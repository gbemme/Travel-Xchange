
export default {
    async getAllLocations({commit}){
        const response = await fetch("https://hiring.zumata.xyz/job01/autosuggest");
        let data = await response.json()
        commit('SET_ALL_LOCATION',data)
    },
    async getResults({commit}, payload){
        commit('SET_LOADING',true)

        try{
            commit('SET_SEARCH_VALUE',payload.value)
            const response = await fetch(`https://hiring.zumata.xyz/job01/search/${payload.cityCode}`);
            let data = await response.json()

            if (!response.ok) {
                commit('SET_ERROR_STATUS',data.message)
                throw new Error(`Error! status: ${response.status}`);
              }
              else{
                commit('SET_ERROR_STATUS','')
                commit('SET_ALL_RESULT',data)

              }
        }
        finally{
            commit('SET_LOADING',false)
        }
       
    },
    filterProperties({commit,state},payload){
        console.log(payload)
        let allFilter
        allFilter = [...state.searchResults.outlets.availability.results.filter(pool => (pool[payload.key][payload.index][payload.val]=== payload.value))]
        let update = {...state.searchResults.outlets.availability}
        update.results = allFilter
        console.log(update)
        commit('SET_ALL_RESULT',update)
        console.log(allFilter)
    }
}