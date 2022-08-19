<template>
  <div>
      <filter-card v-for="(data,i) in items" :key="i" :title="data.type">
          <template #component>
              <component  :is="getComponent(data.type)"/>
          </template>
      </filter-card>
       <div class="tw-flex md:tw-hidden tw-p-5">
            <v-btn class="tw-w-3/6 tw-h-12" outlined @click="$emit('close')"  color="#002D63">Clear</v-btn>
            <v-btn depressed  class="ml-4 tw-w-3/6 tw-h-12 white--text font-weight-bolder" @click="$emit('close')" color="#002D63">Filter</v-btn>

        </div>
  </div>
</template>

<script>
import FacilitiesComponent from './FacilitiesComponent.vue'
import FilterCard from './FilterCard.vue'
import HotelNameSearch from './HotelNameSearch.vue'
import MealPlanComponent from './MealPlanComponent.vue'
import PriceComponent from './PriceComponent.vue'
import PropertyTypeComponent from './PropertyTypeComponent.vue'
import ReservationComponent from './ReservationComponent.vue'
import ReviewComponent from './ReviewComponent.vue'
import StarRatingComponent from './StarRatingComponent.vue'
export default {
  components: { FilterCard, ReviewComponent, ReservationComponent, MealPlanComponent, StarRatingComponent, HotelNameSearch, PropertyTypeComponent, FacilitiesComponent, PriceComponent },
    name:'FilterCardWrapper',
    data(){
        return{
            items:[
                 {
                    type:'Price per night'
                },
                {
                    type:'Reviews'
                },
                {
                type:'Star rating'
                    
                },
                {
                type:'Hotel name'
                    
                },
                {
                    type:'Reservation policy'
                },
                {
                    type:'Meal plan'
                },
                 {
                    type:'Property type'
                },
                {
                    type:'Facilities'
                },
                
                
            ]
        }
    },
    methods:{
        getComponent(type){
             switch (type) {
        case "Price per night":
            return PriceComponent
        case "Reviews":
         return ReviewComponent;
        case "Reservation policy":
            return ReservationComponent;
        case "Meal plan":
            return MealPlanComponent
        case "Star rating":
             return StarRatingComponent;
        case "Hotel name":
            return HotelNameSearch;
        case "Property type":
            return PropertyTypeComponent
        case "Facilities":
            return FacilitiesComponent

        default:
          return ''
        }
    }
    }

}
</script>

<style>

</style>