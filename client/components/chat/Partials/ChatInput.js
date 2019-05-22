import { mapState } from 'vuex'
import Suggestion from './../RichComponents/Suggestion.vue'

export default {
  name: 'ChatInput',
  props: ['suggestions', 'close'],
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
        rail: {},
        bar: {
          keepShow: true,
          hoverStyle: true
        }
      }
    }
  },
  computed: {
    ...mapState([
      'config'
    ]),
    history() {
      try {
        localStorage.getItem('check')
        return true
      }
      catch {
        return false
      }
    },
    lang() {
      if (this.history) {
        return localStorage.getItem('lang') || this.config.app.fallback_lang
      } else {
        return this.config.app.fallback_lang
      }
    },
  },
  mounted() {
    if (window && window.webkitSpeechRecognition || window.SpeechRecognition) {
      this.recognition = new webkitSpeechRecognition() || new SpeechRecognition()
      this.recognition.interimResults = true
      this.recognition.lang = this.lang
    }
  },
  watch: {
    // This function triggers when user clicks on the microphone button
    micro(bool) {
      console.log('start micro', bool)
      if(bool) {
        // When value is true, start voice recognition
        this.recognition.start()
        this.recognition.onresult = (event) => {
          console.log('speech recognize', event)
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            // push results to the Text input
            this.query = event.results[i][0].transcript
          }
        }

        this.recognition.onend = () => {
          this.recognition.stop()
          this.micro = false
          // submit the result
          this.submit()
        }
      } else {
        // if user stops the recognition,
        // abort it (in V1 this prevented users from starting a new recording)
        this.recognition.abort()
      }
    }
  },
  methods: {
    submit(){
      console.log(this.query)
      if (this.query.length > 0) {
        this.$emit('submit', this.query)
        this.query = ''
      }
    }
  }
}
