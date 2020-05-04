import {questions} from "./questions";

export const state = () => ({
  user: {},
  steps: questions,
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  clearUser(state) {
    state.user = {}
  },
  setCurrentQuestion(state) {
    state.user.current_question++
  },
  setUserRating(state) {
    state.user.rating++
  }
}
export const actions = {
  createUser({commit}) {

  }
}
export const getters = {
  user: state => state.user,
  count_steps: state => state.steps.length,
  current_question: state => state.user.current_question,
  question: state => id => {
    return state.steps[id-1]
  },
  rating: state => state.user.rating,
}
