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
  data() {
    return {
      app: null,
      messages: [],
      language: '',
      session: '',
      loading: false,
      close: false,
      ops: {
        bar: {
          background: '#c1c1c1',
        }
      },
      carouselOps: {
        vuescroll: {
          mode: 'slide',
          zooming: false
        },
        bar: {
          keepShow: true,
          hoverStyle: true
        }
      }
    }
  },
  mounted() {
    // if history is enabled, the messages
    // are retrieved from localStorage
    if (this.history && localStorage.getItem('message_history') !== null) {
      this.messages = JSON.parse(localStorage.getItem('message_history'))
    }

    // session should be persistent (in case
    // of page reload, the context should stay)
    if (this.history && localStorage.getItem('session') !== null) {
      this.session = localStorage.getItem('session')
    } else {
      this.session = uuidv1()
      if (this.history) {
        localStorage.setItem('session', this.session)
      }
    }

    // Cache Agent (this will save bandwith)
    if (this.history && localStorage.getItem('agent') !== null) {
      this.app = JSON.parse(localStorage.getItem('agent'))
    } else {
      fetch(this.config.app.gateway)
      .then(response => {
        return response.json()
      })
      .then(agent => {
        console.log(agent)
        this.app = agent
        if (this.history) {
          localStorage.setItem('agent', JSON.stringify(agent))
        }
      })
    }
  },
  computed: {
    /* The code below is used to extract suggestions
     * from last message, to display it on ChatInput */
    config() {
      return this.$store.state.config
    },
    muted() {
      return this.config.app.muted
    },
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

    suggestions() {
      if (this.messages.length > 0){
        let last = this.messages[this.messages.length - 1].queryResult.fulfillmentMessages
        let suggestions = []

        for (let component in last){
          if (last[component].name == 'SUGGESTIONS') {
            suggestions.text_suggestions = last[component].content
          }
          if (last[component].name == 'LINK_OUT_SUGGESTION') {
            suggestions.link_suggestion = last[component].content
          }
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
    messages(messages) {
      // Save history if the feature is enabled
      if (this.history) localStorage.setItem('message_history', JSON.stringify(messages))
    },
    /* This function is triggered, when request is started or finished */
    loading() {
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
      }).then(response => {
        console.log(response) // (optional) log responses
        this.messages.push(response)
        // trigger the handle function (explanation below)
        this.handle(response)
        this.loading = false
      })
    },
    handle(response){
      /* This function is used for speech output */
      for (let component in response.queryResult.fulfillmentMessages) {
        // init a text variable
        let text

        /* Set the text variable according to component name */
        if (response.queryResult.fulfillmentMessages[component].name == 'DEFAULT') {
          text = response.queryResult.fulfillmentMessages[component].content
        }
        if (response.queryResult.fulfillmentMessages[component].name == 'SIMPLE_RESPONSE') {
          text = response.queryResult.fulfillmentMessages[component].content.textToSpeech
        }

        let speech = new SpeechSynthesisUtterance(text)
        // change this, to get a different voice
        speech.voiceURI = 'native'

        // This "hack" is used to format our lang format,
        // to some other lang format (example: en -> en_EN).
        // Mainly for Safari, Firefox and Edge
        speech.lang = this.lang + '_' + this.lang.toUpperCase()

        // if app is not muted, speak out the speech
        if(!this.muted) window.speechSynthesis.speak(speech)
      }
    },
  }
}
