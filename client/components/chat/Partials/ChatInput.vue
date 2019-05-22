<template>
  <div class="bottomchat">
    <div class="bot-container py-3">

      <!-- Here are the suggestions -->
      <div class="suggestions">
        <vue-scroll :ops="ops">
          <Suggestion v-if="suggestions.text_suggestions" v-for="(suggestion, index) in suggestions.text_suggestions" :key="index" @click.native="$emit('submit', suggestion)" :title="suggestion" />
          <Suggestion v-if="suggestions.link_suggestion" :title="suggestions.link_suggestion.destinationName" :url="suggestions.link_suggestion.uri" />
        </vue-scroll>
      </div>
      <div class="flexible">

        <!-- Text input -->
        <div class="input-container">
            <input :aria-label="config.i18n[lang].inputTitle" class="input" type="text" :placeholder="config.i18n[lang].inputTitle" v-model="query" @keypress.enter="submit()" />
        </div>

        <!-- Send message button (arrow button) -->
        <div :aria-label="config.i18n[lang].sendTitle" :title="config.i18n[lang].sendTitle" class="button-container" v-if="!micro && query.length > 0" @click="submit()">
            <i class="material-icons" aria-hidden="true">arrow_upward</i>
        </div>

        <!-- Microphone Button -->
        <div :aria-label="config.i18n[lang].microphoneTitle" :title="config.i18n[lang].microphoneTitle" class="button-container mic_button" :class="{'mic_active': micro}" @click="micro = !micro" v-else>
            <i class="material-icons" aria-hidden="true">mic</i>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.bot-container
    max-width: 500px
    margin-left: auto
    padding: 0 1rem
    position: relative
    background: white
    border-top: 1px solid #F1f3f4
.bottomchat
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    transition: box-shadow .15s linear

.flexible
    display: flex

.suggestions
    overflow-x: scroll
    overflow-y: hidden
    white-space: nowrap
    -webkit-overflow-scrolling: touch

    &::-webkit-scrollbar
        display: none

.input-container
    width: 100%
    box-sizing: border-box
    border-radius: 40px
    flex: 1 0 0
    background-color: #F1F3F4

.input
    font-size: 16px
    font-weight: 500
    width: 100%
    box-sizing: border-box
    background-color: transparent
    border: none
    outline: none
    padding: 8px
    color: #202124
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

.input:focus
    background-color: #f1f3f8
    border-radius: 40px
    border-color: #cfe1e4
    outline: 0
    box-shadow: 0 0 0 0.2rem rgba(125, 173, 183, 0.25)

.button-container
    padding: 8px
    width: 42px
    height: 42px
    margin-left: 6px
    border-radius: 50%
    cursor: pointer
    background-color: #202124
    color: white

    &.mic_button
        background-color: #F1F3F4
        color: #202124
        font-size: 24px

        &.mic_active
            background-color: #F44336
            color: white
</style>

<script>
import Suggestion from './../RichComponents/Suggestion.vue'

export default {
    name: 'ChatInput',
    props: ['suggestions'],
    components: {
        Suggestion
    },
    data(){
        return {
          query: '',
          micro: false,
          recognition: null,
          ops: {
            vuescroll: {
              mode: 'slide',
              zooming: false
            },
            scrollPanel: {},
            rail: {
            },
            bar: {
              keepShow: true,
              hoverStyle: true
            }
          }
        }
    },
    computed: {
      config(){
        return this.$store.state.config
      },
      history(){
        try {
          localStorage.getItem('check')
          return true
        }
        catch {
          return false
        }
      },
      lang(){
        if(this.history) return localStorage.getItem('lang') || this.config.app.fallback_lang

        else {
            return this.config.app.fallback_lang
        }
      },
    },
    mounted(){
        if(window && window.webkitSpeechRecognition || window.SpeechRecognition){
            this.recognition = new webkitSpeechRecognition() || new SpeechRecognition()
            this.recognition.interimResults = true
            this.recognition.lang = this.lang
        }
    },
    watch: {
        /* This function triggers when user clicks on the microphone button */
        micro(bool){
            if(bool){
                /* When value is true, start voice recognition */
                this.recognition.start()
                this.recognition.onresult = (event) => {
                    for (let i = event.resultIndex; i < event.results.length; ++i){
                        this.query = event.results[i][0].transcript // <- push results to the Text input
                    }
                }

                this.recognition.onend = () => {
                    this.recognition.stop()
                    this.micro = false
                    this.submit(this.query) // <- submit the result
                }
            }

            else {
                this.recognition.abort() // <- if user stops the recognition, abort it (in V1 this prevented users from starting a new recording)
            }
        }
    },
    methods: {
        submit(){
            if(this.query.length > 0){
                this.$emit('submit', this.query)
                this.query = ''
            }
        }
    }
}
</script>
