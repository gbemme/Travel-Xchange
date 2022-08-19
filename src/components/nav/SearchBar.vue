<template>
<div>
   <v-app-bar
      color="#002D63"
      class="tw-m-auto md:tw-flex tw-hidden tw-justify-center"
      :fixed="isScrolled"
      flat
    
    >
     <div class=" tw-py-2.5 tw-bg-blue1k md:tw-flex tw-hidden tw-justify-center tw-items-center">
      <div class="tw-mr-2.5">
          <v-autocomplete  v-model="search"  :items="getAllLocation" hide-details   prepend-inner-icon="mdi-magnify" item-text="label"
      item-value="cityCode" label="Search" class="tw-w-420" solo>
      <template v-slot:item="{ item }">
        <v-icon>mdi-map-marker-outline</v-icon>
        <v-list-item-content @click="displayResult(item.cityCode,item.label)">
          <v-list-item-title v-text="item.label"  ></v-list-item-title>
        </v-list-item-content>
      </template>
      </v-autocomplete>
      </div>
      <div class="tw-mr-2.5">
          <v-text-field solo hide-details prepend-inner-icon="mdi-calendar-blank-outline" label="Jul 19  –  Jul 20"  class="tw-w-60"></v-text-field>
      </div>
      <div class="tw-mr-2.5">
          <v-text-field solo hide-details label="2 adults, 0 children, 1 room"   class="tw-w-60"></v-text-field>
      </div>
      <div>
          <v-btn class="tw-w-36 white--text font-weight-bolder" height="3rem"  depressed color="#00A1E5">Search</v-btn>
      </div>

  </div>
   </v-app-bar>
   <div class="md:tw-hidden">
      <v-divider></v-divider>
      <div class="tw-flex tw-items-center  tw-p-3" @click="show=!show">
          <v-icon class="tw-mr-3">mdi-magnify</v-icon>
          <div class="tw-mb-2">
          <h4>{{getSearchValue}}</h4>
            <small >Aug 18 - Aug 19 <small class="tw-ml-4">2 adults, 1 room, 0 children</small>   </small>
          </div>

      </div>
      <v-divider></v-divider>
      <v-list v-show="show">
          <v-list-item
        v-for="data in getAllLocation"
        :key="data.cityCode"
      >
        <v-icon>mdi-map-marker-outline</v-icon>
        <v-list-item-content>
          <v-list-item-title v-text="data.label"  @click="displayResult(data.cityCode,data.label);show=false"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </v-list>

  </div>
    
    
  </div>
 
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'SearchBar',
    data(){
        return{
            search:'',
             scrollPosition: null,
             isScrolled:false,
             show:false
        }
    },

    computed:{
        ...mapGetters(['getAllLocation','getSearchValue'])
    },
    mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },


  destroyed() {
  window.removeEventListener('scroll', this.updateScroll)
        
},
    methods:{
        displayResult(code,value){
            this.$store.dispatch('getResults', {cityCode:code,value:value})
        },
        updateScroll() {
      this.scrollPosition = window.scrollY
      if (this.scrollPosition){
          return  this.isScrolled =true
      }
      else{
           return  this.isScrolled = false
      }
    }
    }

}
</script>

<style>

</style>