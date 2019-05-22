import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

// import auth from './modules/auth'

const environment = process.env.NODE_ENV
const METRO_JSON = process.env.METRO_JSON

Vue.use(Vuex)

export const state = () => ({
  counter: 0,
  env: environment,
  METRO_JSON: METRO_JSON,

  config: {
    app: {
        gateway: "https://dialogflow-web-v2.gateway.dialogflow.cloud.ushakov.co", // <- enter your gateway URL here, the function is just a helper function for my cloud integration. You don't normally need it
        muted: false, // <- mute microphone at start
        start_suggestions: [], // <- array of suggestions, displayed at the start screen
        fallback_lang: 'en' // <- fallback language code, if history mode or network is unavailable
    },
    i18n: {
        en: {
            welcomeTitle: "Welcome to",
            muteTitle: "Mute Toggle",
            inputTitle: "Type your message",
            sendTitle: "Send",
            microphoneTitle: "Voice Input"
        },
        ru: {
            welcomeTitle: "Добро пожаловать в",
            muteTitle: "Режим звука",
            inputTitle: "Введите свое сообщение",
            sendTitle: "Отправить",
            microphoneTitle: "Голосовой ввод"
        },
        de: {
            welcomeTitle: "Wilkommen bei",
            muteTitle: "Stumm Modus",
            inputTitle: "Schreiben Sie ihre Nachricht",
            sendTitle: "Senden",
            microphoneTitle: "Spracheingabe"
        }
    }
  }
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
