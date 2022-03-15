<template>
  <div >
    <NavBar/>
    <search-bar/>
    <properties-results/>
    
  </div>
</template>

<script>
import NavBar from '@/components/nav/NavBar.vue'
import SearchBar from '@/components/nav/SearchBar.vue'
import PropertiesResults from '@/components/PropertiesResults.vue'
export default {
  components: { NavBar, SearchBar, PropertiesResults, },
    name:'HomeView'

}
</script>

<style>

</style>