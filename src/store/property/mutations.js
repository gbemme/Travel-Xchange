export default {
    SET_ALL_RESULT:(state,data)=>{
        state.searchResults= data
    },
    SET_ALL_LOCATION:(state,data)=>{
        state.allLocation= data
    },
    SET_LOADING:(state,status)=>{
        state.loading= status
    },
    SET_ERROR_STATUS:(state,status)=>{
        state.error= status
    },
    SET_SEARCH_VALUE:(state,status)=>{
        state.searchValue= status
    },
   
}
