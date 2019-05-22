<template>
  <main id="app" class="chat-animate" :class="{'collapsed': close}">

    <TopHead
      @close-chat="collapseChat"
      v-if="app"
      :app="app">
    </TopHead>

    <vue-scroll :ops="ops">
      <section class="bot-container chat-container">

        <Welcome v-if="messages.length == 0" :app="app"></Welcome>
        <!-- Messages Table -->
        <section class="messages">
          <table v-for="m in messages" class="message">
            <tr>
              <!-- My message -->
              <td>
                <Bubble
                  :text="m.queryResult.queryText"
                  from="me"
                />
              </td>
            </tr>

            <!-- Component iterator (Dialogflow Gateway Feature) -->
            <tr v-for="component in m.queryResult.fulfillmentMessages">
                <td>
                  <!-- Default / Webhook bubble -->
                  <Bubble
                    v-if="component.name == 'DEFAULT'"
                    :text="component.content"
                  />

                  <!-- Simple Response -->
                  <Bubble
                    v-if="component.name == 'SIMPLE_RESPONSE'"
                    :text="component.content.displayText || component.content.textToSpeech"
                    />

                  <!-- Card -->
                  <Card
                    v-if="component.name == 'CARD'"
                    :title="component.content.title"
                    :subtitle="component.content.subtitle"
                    :image="component.content.image"
                    :text="component.content.formattedText"
                    :button="component.content.buttons[0]"
                    />

                  <!-- Carousel layout and cards -->
                  <div
                    v-if="component.name == 'CAROUSEL_CARD'"
                    class="carousel"
                    >
                      <div class="carousel-panel">
                      <vue-scroll :ops="carouselOps">
                        <Card
                        v-for="card in component.content"
                        @click.native="send(card.info.key)"
                        :key="card.info.key"
                        :title="card.title"
                        :image="card.image"
                        :subtitle="card.subtitle"
                        :text="card.description"
                        />
                      </vue-scroll>
                      </div>
                  </div>

                  <!-- List -->
                  <List
                    v-if="component.name == 'LIST'"
                    @select="send"
                    :items="component.content.items"
                    :title="component.content.title"
                    />

                  <!-- Webhook Image -->
                  <Picture
                    v-if="component.name == 'IMAGE'"
                    :image="component.content"
                    />
              </td>
            </tr>
          </table>
          <table class="message" v-if="loading">
            <tr>
              <!-- My message (Loading) -->
              <td><Bubble text="..." from="me" /></td>
            </tr>
            <tr>
              <!-- Default / Webhook bubble (Loading) -->
              <td><Bubble text="..." /></td>
            </tr>
          </table>
        </section>
      </section>

      <!-- #bottom is the anchor, we need, when new messages arrive, to scroll down -->
      <div id="bottom"></div>
    </vue-scroll>

    <!-- ChatInput is made for submitting queres and displaying suggestions -->
    <ChatInput @show-chat="showChat" @submit="send" :suggestions="suggestions" :close="close"></ChatInput>

  </main>
</template>

<style lang="sass">

@font-face
    font-family: 'Material Icons'
    font-style: normal
    font-weight: 400
    font-display: swap
    src: url(https://fonts.gstatic.com/s/materialicons/v42/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2')

.material-icons
    font-family: 'Material Icons'
    font-weight: normal
    font-style: normal
    font-size: 24px
    line-height: 1
    letter-spacing: normal
    text-transform: none
    display: inline-block
    white-space: nowrap
    word-wrap: normal
    direction: ltr
    -webkit-font-feature-settings: 'liga'
    -webkit-font-smoothing: antialiased
</style>

<style lang="sass" scoped>
main
    top: 0
    right: 0
    height: 100%
    position: fixed
    padding-bottom: 100px
    background: white
    width: 500px
    box-shadow: 1px 2px 5px 2px #bababa
    &.collapsed
        width: 0

.bot-container
    max-width: 500px
    margin-left: auto
    padding: 0 1rem
    position: relative
    padding-top: 60px

.message
    width: 100%

.audio-toggle
    position: fixed
    top: 0
    right: 0
    margin: 8px
    z-index: 999
    padding: 10px
    background-color: #F1F3F4
    border-radius: 50%
    width: 24px
    height: 24px
    cursor: pointer
    color: #202124

.carousel-panel
    overflow-x: scroll
    overflow-y: hidden
    scrollbar-width: none
    -webkit-overflow-scrolling: touch
    white-space: nowrap
    padding-bottom: 20px
    padding-left: 10px

.carousel-panel::-webkit-scrollbar
    display: none
    width: 0 !important

.carousel-panel:active
    pointer-events: none
</style>

<script>

  import Welcome from './Welcome/Welcome.vue'
  import TopHead from './Partials/TopHead.vue'
  import ChatInput from './Partials/ChatInput.vue'

  import Bubble from './RichComponents/Bubble.vue'
  import Card from './RichComponents/Card.vue'
  import List from './RichComponents/List.vue'
  import Picture from './RichComponents/Picture.vue'

  import * as uuidv1 from 'uuid/v1'

  export default {
    name: 'Chat',
    components: {
      Welcome,
      TopHead,
      ChatInput,
      Bubble,
      Card,
      List,
      Picture,
    },
    data(){
        return {
          app: null,
          messages: [],
          language: '',
          session: '',
          loading: false,
          close: false,
          ops: {
            vuescroll: {},
            scrollPanel: {},
            rail: {},
            bar: {
              background: '#c1c1c1',
            }
          },
          carouselOps: {
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
    mounted(){
        /* If history is enabled, the messages are retrieved from localStorage */
        if(this.history && localStorage.getItem('message_history') !== null){
            this.messages = JSON.parse(localStorage.getItem('message_history'))
        }

        /* Session should be persistent (in case of page reload, the context should stay) */
        if(this.history && localStorage.getItem('session') !== null){
            this.session = localStorage.getItem('session')
        }

        else {
            this.session = uuidv1()
            if(this.history) localStorage.setItem('session', this.session)
        }

        /* Cache Agent (this will save bandwith) */
        if(this.history && localStorage.getItem('agent') !== null){
            this.app = JSON.parse(localStorage.getItem('agent'))
        }

        else {
            fetch(this.config.app.gateway)
            .then(response => {
                return response.json()
            })
            .then(agent => {
                this.app = agent
                if(this.history) localStorage.setItem('agent', JSON.stringify(agent))
            })
        }
    },
    computed: {
      /* The code below is used to extract suggestions from last message, to display it on ChatInput */
      config(){
        return this.$store.state.config
      },
      muted(){
        return this.config.app.muted
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

      suggestions(){
        if(this.messages.length > 0){
          let last_message = this.messages[this.messages.length - 1].queryResult.fulfillmentMessages
          let suggestions = []

          for (let component in last_message){
            if (last_message[component].name == 'SUGGESTIONS') suggestions.text_suggestions = last_message[component].content
            if (last_message[component].name == 'LINK_OUT_SUGGESTION') suggestions.link_suggestion = last_message[component].content
          }

          return suggestions
        }

        else {
          return {
            // if no messages are present, return start_suggestions, from config.js
            // to help user figure out what he can do with your application
            text_suggestions: this.config.app.start_suggestions
          }
        }
      }
    },
    watch: {
      /* This function is triggered, when new messages arrive */
      messages(messages){
        // Save history if the feature is enabled
        if(this.history) localStorage.setItem('message_history', JSON.stringify(messages))
      },
      /* This function is triggered, when request is started or finished */
      loading(){
        setTimeout(() => {
          // We need to scroll down #app, to prevent the whole page jumping to bottom, when using in iframe
          let app = document.querySelector('#app')
          app.querySelector('#bottom').scrollIntoView({
            behavior: 'smooth'
          })
        }, 2)
        // wait for render (timeout) and then smoothly scroll
        // #app down to #bottom selector, used as anchor
      },
    },
    methods: {
      send(q){
        let request = {
          "queryInput": {
            "text": {
              "text": q,
              "languageCode": this.lang
            }
          }
        } // this is how a Dialogflow request look like
        let url = `${this.config.app.gateway}/${this.session}?format=true`
        let data = {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(request)
        }

        this.loading = true

        /* Make the request to gateway with formatting enabled */
        fetch(url, data)
        .then(response => {
          return response.json()
        })
        .then(response => {
            this.messages.push(response)
            // trigger the handle function (explanation below)
            this.handle(response)
            this.loading = false
            // console.log(response) // <- (optional) log responses
        })
      },
      handle(response){
        /* This function is used for speech output */
        for (let component in response.queryResult.fulfillmentMessages){
          // init a text variable
          let text

          /* Set the text variable according to component name */
          if(response.queryResult.fulfillmentMessages[component].name == 'DEFAULT') text = response.queryResult.fulfillmentMessages[component].content
          if(response.queryResult.fulfillmentMessages[component].name == 'SIMPLE_RESPONSE') text = response.queryResult.fulfillmentMessages[component].content.textToSpeech

          let speech = new SpeechSynthesisUtterance(text)
          // change this, to get a different voice
          speech.voiceURI = 'native'

          /* This "hack" is used to format our lang format, to some other lang format (example: en -> en_EN). Mainly for Safari, Firefox and Edge */
          speech.lang = this.lang + '-' + this.lang.toUpperCase()

          // if app is not muted, speak out the speech
          if(!this.muted) window.speechSynthesis.speak(speech)
        }
      },
      collapseChat(){
        this.close = true
      },
      showChat(){
        this.close = false
      }
    }
  }
</script>
