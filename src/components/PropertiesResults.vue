<template>
  <div style="background:#E5E5E5" class="md:tw-pb-32 tw-pb-24">
      <div  class="md:tw-w-5/6  tw-m-auto">
    <v-row style="background:#E5E5E5"   class="tw-justify-between tw-h-full">
      <v-col cols="12" md="3" sm="0" class=" tw-hidden tw-p-2 md:tw-block">
          <map-component/>
          <filter-card-wrapper @close="$emit('close')"/>
      </v-col>
      <v-col  v-if="getAllSearchResult.outlets" cols="12" md="9" sm="12" class="tw-p-2 ">
        <filter-nav @toggle="$emit('toggle')" :search="getSearchValue" />
        <div v-if="getLoadingStatus">
        <place-holder-component/>
        </div>
        <div v-else-if="!getAllSearchResult.outlets.availability.results.length && !getErrorStatus">
        <empty-search-page />

        </div>
        <div v-else-if="getErrorStatus">
            <error-page :error="getErrorStatus"/>
        </div>
        <v-data-table v-else
        dense
        hide-default-header
        hide-default-footer
        :page.sync="page"
         @page-count="pageCount = $event"
        :items-per-page="itemsPerPage"
         :items="getAllSearchResult.outlets.availability.results"
        >
         <template #item="{ item }">
        <property-card  :property="item"/>
         </template>

        </v-data-table>
        

      </v-col>


    </v-row>
    <v-row class="tw-my-8" v-if="getAllSearchResult.outlets&&getAllSearchResult.outlets.availability.pagination">
      <v-col class="tw-hidden md:tw-block" cols="2"></v-col>
      <v-col cols="12" md="10" sm="12">
          <div class="md:tw-flex tw-items-center justify-end" >
            <div class="tw-cursor-pointer tw-flex md:tw-block tw-mb-6 md:tw-mb-0  tw-justify-around md:tw-mr-32" @click="scrollToTop">
            <p>Back to top</p>
            <p class="md:tw-hidden">Showing Results {{getAllSearchResult.outlets.availability.pagination.showing[0]}} – {{getAllSearchResult.outlets.availability.pagination.showing[1]}} of {{getAllSearchResult.outlets.availability.pagination.totalItems}}</p>


          </div>
          <div class="tw-hidden md:tw-block">
            <p>Showing Results {{getAllSearchResult.outlets.availability.pagination.showing[0]}} – {{getAllSearchResult.outlets.availability.pagination.showing[1]}} of {{getAllSearchResult.outlets.availability.pagination.totalItems}}</p>
          </div>
             <v-pagination
        color="#002D63"
        v-model="page"
        :length="pageCount"
      ></v-pagination>
        </div>
      </v-col>

    
     
    </v-row>
    </div>

  </div>
</template>

<script>
import FilterNav from './nav/FilterNav.vue'
import MapComponent from './MapComponent.vue'
import PropertyCard from './PropertyCard.vue'
import FilterCardWrapper from './filterComponents/FilterCardWrapper.vue'
import { mapGetters } from 'vuex'
import PlaceHolderComponent from './PlaceHolderComponent.vue'
import EmptySearchPage from './EmptySearchPage.vue'
import ErrorPage from './ErrorPage.vue'
export default {
  components: { FilterNav, MapComponent, PropertyCard, FilterCardWrapper, PlaceHolderComponent, EmptySearchPage, ErrorPage, },
    name:'PropertiesResults',
    data(){
        return{
              properties:[
                  {
                      name:'The Fullerton Bay Hotel',
                      location:'80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)',
                      description:'“Excellent boutique hotel. Great rooms in excellent location. Awesome vibe. Beautiful beac...',
                      benefit:['Breakfast','Free cancellation','Pay later'],
                      country:'Singapore - SG Clean',
                      rating:5
                  },
                  {
                      name:'The Fullerton Bay Hotel',
                      location:'80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)',
                      description:'“Excellent boutique hotel. Great rooms in excellent location. Awesome vibe. Beautiful beac...',
                      benefit:['Breakfast','Free cancellation'],
                      country:'Singapore - SG Clean',
                      rating:5
                  },
                  {
                      name:'The Fullerton Bay Hotel',
                      location:'80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)',
                      description:'“Excellent boutique hotel. Great rooms in excellent location. Awesome vibe. Beautiful beac...',
                      benefit:['Breakfast','Free cancellation'],
                      country:'Singapore - SG Clean',
                      rating:3
                  }
              ],
              itemsPerPage:3,
               page: 3,
        pageCount: 0,
        }
    },
    async created(){
     await  this.$store.dispatch('getAllLocations')
       await this.$store.dispatch('getResults',{cityCode:this.getAllLocation[0].cityCode, value:this.getAllLocation[0].label})

    },
    methods: { 
  scrollToTop() {
    window.scrollTo(0,0);
  }
},
    computed:{
      ...mapGetters(['getLoadingStatus','getAllSearchResult','getAllLocation','getErrorStatus','getSearchValue'])
    }

}
</script>

<style>

</style>