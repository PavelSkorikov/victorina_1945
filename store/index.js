export const state = () => ({
  user: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}
export const actions = {
  fetchUser({commit}) {

  }
}
export const getters = {
  user: state => state.user
}
