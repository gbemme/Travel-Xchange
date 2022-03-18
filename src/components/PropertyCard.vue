<template>
  <div class="tw-mx-4 md:tw-mx-0">
       <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
      <v-card
    class="tw-mb-3 card-wrapper"
    :elevation="hover ? 10 : 0"
    :class="{ 'on-hover': hover }"
    flat

  >
    <v-card-text>
        <div class="tw-flex">
            <div class="tw-mr-4 tw-w-24 md:tw-w-auto">
                <img alt="property image" :src="property.property.heroImage.url" class="md:tw-w-48"/>
                <v-row no-gutters class="">
                    <v-col cols="3" v-for="(data,i) in property.property.gallery.slice(0,4)" :key="i">
                        <img :src="data.m.url || data.sm.url || data.xs.url || data.xl.url" alt="" class="tw-mr-0.5 mt-2" width="48" height="48">

                    </v-col>
                </v-row>
            </div>
            <div>
                <div class="tw-flex tw-justify-between">
                    <div class="md:tw-w-500"> 
                        <div class="md:tw-flex tw-items-center">
                        <h3 class="tw-mr-3">{{property.property.name}}</h3>
                        <ratings-component  :rating="property.property.starRating"/>
                        </div>
                        <small>{{property.property.location.address + ', ' +property.property.location.city + ', ' +property.property.location.postalCode }} (view map)</small>
                        <small  class="placeholder tw-mt-4 tw-hidden md:tw-block">{{property.property.reviews.summary.text}}</small>
                    </div>
                    <div class="md:tw-block tw-hidden">
                        <img src="@/assets/images/excellent.png" alt="">
                    </div>
                </div>
                <div class=" tw-hidden md:tw-flex tw-my-2">
                 <div  class="tw-flex tw-my-2">     
                     <div class="benefit tw-px-2 tw-mr-1">
                         <small>
                             {{foodCode[property.packages[0].foodCode]}}
                         </small>

                     </div> 
                      <div class="benefit tw-px-2 tw-mr-1" v-if="property.packages[0].nonRefundable">
                         <small>
                             Free cancelation
                         </small>

                     </div>
                     <div class="benefit tw-px-2 tw-mr-1" v-if="property.packages[0].payLater">
                         <small>
                            Pay later
                         </small>

                     </div>
                     <div class="benefit tw-px-2 tw-mr-1" v-if="property.packages[0].payAtHotel">
                         <small>
                            Pay at hotel
                         </small>

                     </div>
                 </div>
                 </div>
                 <div v-if="property.property.reviews.covidSafety" class="tw-flex tw-items-center mt-3">
                     <img src="@/assets/images/safety.png" alt="">
                     <small>{{property.property.reviews.covidSafety}}</small>
                 </div>
                  <div class="tw-flex tw-justify-end"  v-if="property.packages[0].displayRate.value>property.packages[0].adjustedDisplayRate.value">
                      <div>
                        <h6 class="save">SAVE {{getDiscountRate(property.packages[0])}} TODAY!</h6>

                      </div>
                     </div>
                 <div class="tw-flex tw-justify-end">
                    
                     <div>
                         <small>Nightly avg.</small>
                         <div class="tw-flex tw-items-baseline">
                        <h5 v-if="property.packages[0].displayRate.value>property.packages[0].adjustedDisplayRate.value" class="rate">{{property.packages[0].displayRate.value}}</h5>  <h2>{{property.packages[0].adjustedDisplayRate.value}}</h2>

                         </div>

                     </div>

                 </div>
     
     
            </div>

        </div>
     
    </v-card-text>
    
      </v-card>
       </v-hover>

  </div>
</template>

<script>
import RatingsComponent from './nav/RatingsComponent.vue'
export default {
  components: { RatingsComponent },
    name:'PropertyCard',
    data(){
        return{
              rating: 5,
              foodCode:{
                  1:'Room Only',
                  2:'Breakfast',
                  3:'Lunch',
                  4:'Dinner',
                  5:'Half board',
                  6:'Full board',
                  7:'All inclusive',
              }
            
        }
    },
    props:{
        property:[Object]
    },
    computed:{
        getDiscountRate(){
            return function(item){
            let difference = (item.adjustedDisplayRate.value/item.displayRate.value)*100
            return  difference +' '+'%'
            }

        }
    }

}
</script>

<style lang="scss" scoped>
.card-wrapper{
    background: #FFFFFF;
border-radius: 5px;
}
h3{
 color: var(--333);   
}
.placeholder{
 color: var(--placeholder) !important;   
  width: 485px;
  white-space: nowrap;
  overflow: hidden;
   text-overflow: ellipsis;

}
.benefit{
border: 1px solid #00A1E6;
box-sizing: border-box;
display: flex;
justify-content: center;
}
.benefit small{
    color: var(--blue2);
margin: auto;

}
.rate{
    font-family: 'Mulish';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
text-decoration-line: line-through;
// align-items: baseline !important;
margin-right: 5px;

/* placeholder */

color: #757575;

}
.save{
    font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 20px;
color: #FFFFFF;
background: #00A1E6;
padding: 5px;

}

</style>