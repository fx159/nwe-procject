import getusername from '../api/app'
const actions = {
  updatausername: ({ commit }, resaon) => {
    getusername().then(data => {
      const { code, res: { name } } = data
      commit('SET_NAME', name)
    })
  }
}

export default actions
