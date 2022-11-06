export const state = () => ({
  user: null,
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
}

export const actions = {
  async fetchUser(
    { commit, state },
    { refresh = false, redirect = false } = {}
  ) {
    if (state.user && !refresh) return

    try {
      const { data } = await this.$axios.get('/me')
      commit('setUser', data)
    } catch (e) {
      if (redirect) {
        localStorage.setItem('redirect', window.location.pathname)
        this.$router.push('/auth/login')
      }
    }
  },
}
