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

})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
