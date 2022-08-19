<template>
  <div >
    <NavBar/>
    <search-bar/>
    <component :is="toggleComponent()" @toggle="showFilterOnMobile=true" @close="showFilterOnMobile=false" class="tw-mb-32 md:tw-mb-0"/>
    
    <footer-component v-if="!showFilterOnMobile"/>

    
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar.vue'
import SearchBar from '@/components/nav/SearchBar.vue'
import PropertiesResults from '@/components/PropertiesResults.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import FilterCardWrapper from '@/components/filterComponents/FilterCardWrapper.vue'
export default {
  components: { NavBar, SearchBar, PropertiesResults, FooterComponent, FilterCardWrapper,},
    name:'HomeView',
    data(){
      return{
        showFilterOnMobile:false
      }
    },
    methods:{
      toggleComponent(){
        if(this.showFilterOnMobile){
          return FilterCardWrapper
        }
        else{
          return PropertiesResults
        }
      }
    }

}
</script>

<style>

</style>