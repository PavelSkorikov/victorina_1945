import {questions} from "./questions";

export const state = () => ({
  user: {},
  steps: questions,
  active_step: 0
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setActiveStep(state, id) {
    state.active_step = id
  }
}
export const actions = {
  fetchUser({commit}) {

  }
}
export const getters = {
  user: state => state.user,
  islogin: state => !!state.user,
  count_steps: state => state.steps.length,
  active_step: state => state.active_step,
  question: state => id => {
    return state.steps[id-1]
  }
}
