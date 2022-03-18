import getters from '@/store/property/getters'
import mutations from '@/store/property/mutations'
import actions from '@/store/property/actions'

const state={
   
    allLocation:[],
    searchResults:[],
    loading:false,
    error:'',
    searchValue:''
   

}
export default {
    // namespaced:true,
    state,
    getters,
    mutations,
    actions
}
