<template>
  <div class="">
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
            <div class="tw-mr-4">
                <img alt="property image" src="@/assets/images/bay.png" />
            </div>
            <div>
                <div class="tw-flex tw-justify-between">
                    <div> 
                        <div class="md:tw-flex tw-items-center">
                        <h3 class="tw-mr-3">{{property.name}}</h3>
                        <ratings-component  :rating="property.rating"/>
                        </div>
                        <small>{{property.location}}</small><br>
                        <small class="placeholder">{{property.description}}</small>
                    </div>
                    <div class="md:tw-block tw-hidden">
                        <img src="@/assets/images/excellent.png" alt="">
                    </div>
                </div>
                <div class=" tw-hidden md:tw-flex">
                 <div v-for="(data,i) in property.benefit" :key="i" class="tw-flex tw-my-2">     
                     <div class="benefit tw-px-2 tw-mr-1">
                         <small>
                             {{data}}
                         </small>

                     </div> 
                 </div>
                 </div>
                 <div class="tw-flex tw-items-center mt-3">
                     <img src="@/assets/images/safety.png" alt="">
                     <small>{{property.country}}</small>
                 </div>
                 <div class="tw-flex tw-justify-end">
                     <div>
                         <small>Nightly avg.</small>
                         <h2>SGD 100</h2>
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
            
        }
    },
    props:{
        property:[Object]
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

</style>