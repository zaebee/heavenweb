// import moment from 'moment'
import { QUIZ } from './mutation-types'

let state = () => ({
  next_week: '0:H-7:d',
  next_two_week: '0:H-14:d',
  keys: [
    '1:M-2:M', // jan
    '2:M-1:M', // feb
    '3:M-1:M', // mar
    '4:M-1:M', // apr
    '5:M-1:M', // may
    '6:M-1:M', // jun
    '7:M-1:M', // jul
    '8:M-1:M', // aug
    '9:M-1:M', // sep
    '10:M-1:M', // oct
    '11:M-1:M', // nov
    '12:M-1:M' // dec
  ],
  months: []
})

let getters = {
  filteredMonthKeys: (state) => (start = null, end = null) => {
    if (start && end) {
      return [`${start}-${end}`]
    }
    let nowMonthIndex = 0 // moment().get('M')
    let _keys = state.keys.slice()
    _keys.splice(0, nowMonthIndex)
    return _keys
  }

}

let actions = {
  QUIZ ({commit, state}, payload) {
    commit(QUIZ, payload.data)
  }
}

let mutations = {
  [QUIZ] (state, payload) {
    state = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
