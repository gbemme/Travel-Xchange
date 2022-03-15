<template>
  <div style="background:#E5E5E5">
      <div  class="md:tw-w-5/6  tw-m-auto">
    <v-row style="background:#E5E5E5"   class="tw-justify-between">
      <v-col cols="12" md="3" sm="0" class=" tw-hidden tw-p-2 md:tw-block">
          <map-component/>
          <filter-card-wrapper/>

      </v-col>
      <v-col cols="12" md="9" sm="12" class="tw-p-2">
        <filter-nav/>
        <property-card v-for="(property,i) in properties" :key="i" :property="property"/>

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
export default {
  components: { FilterNav, MapComponent, PropertyCard, FilterCardWrapper },
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
              ]
        }
    }

}
</script>

<style>

</style>