<template>
  <div>
      <filter-card v-for="(data,i) in items" :key="i" :title="data.type">
          <template #component>
              <component  :is="getComponent(data.type)"/>
          </template>
      </filter-card>
  </div>
</template>

<script>
import FacilitiesComponent from './FacilitiesComponent.vue'
import FilterCard from './FilterCard.vue'
import HotelNameSearch from './HotelNameSearch.vue'
import MealPlanComponent from './MealPlanComponent.vue'
import PropertyTypeComponent from './PropertyTypeComponent.vue'
import ReservationComponent from './ReservationComponent.vue'
import ReviewComponent from './ReviewComponent.vue'
import StarRatingComponent from './StarRatingComponent.vue'
export default {
  components: { FilterCard, ReviewComponent, ReservationComponent, MealPlanComponent, StarRatingComponent, HotelNameSearch, PropertyTypeComponent, FacilitiesComponent },
    name:'FilterCardWrapper',
    data(){
        return{
            items:[
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