// import moment from 'moment'
import { LEAD } from './mutation-types'

let state = () => ({
  email: null,
  phone: null,
  errors: {},
  request: {},
})

let getters = {
  prevQuestionIndex: (state) => (start = null, end = null) => {
    if (start && end) {
      return [`${start}-${end}`]
    }
    let currentIndex = 0 // moment().get('M')
    let _keys = state.keys.slice()
    _keys.splice(0, currentIndex)
    return _keys
  },
  nextQuestionIndex: (state) => (start = null, end = null) => {
    if (start && end) {
      return [`${start}-${end}`]
    }
    let currentIndex = 0 // moment().get('M')
    let _keys = state.keys.slice()
    _keys.splice(0, currentIndex)
    return _keys
  }

}

let actions = {
  async save ({commit, state}, payload) {
    // TODO post request api
    await commit('save', payload)
  },
  errors ({commit, state}, payload) {
    commit('errors', payload.data)
  }
}

let mutations = {
  ['save'] (state, payload) {
    console.log('IN STORE', payload)
    state.email = payload.email
  },
  ['errors'] (state, payload) {
    console.log('LEAD ERRORS', payload)
    state.errors = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
