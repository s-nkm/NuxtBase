export const state = () => ({
  sample: 'This is sample store.',
})

export const getters = {
  sample: (state) => state.sample,
}

export const mutations = {
  setSample (state) {
    state.sample = status
  },
}

export const actions = {
  setSample ({commit}, status) {
    commit('setSample', status)
  },
}