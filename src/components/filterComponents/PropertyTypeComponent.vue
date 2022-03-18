<template>
<div>
      <div v-for="(data,i) in showLessItems" :key="i">
       <div class="tw-flex tw-justify-between tw-items-center">
               <v-checkbox color="#002D63" hide-details>
                 <template v-slot:label>
                     <div >
                     <small>{{ data.tag}}</small>
                     </div>
                 </template>
                 </v-checkbox>
                        <small>999</small>

      </div>
      </div>
      <v-expand-transition>
          <div v-show="showMore">
          <div  v-for="(data,i) in showMoreItems" :key="i">
       <div class="tw-flex tw-justify-between tw-items-center">
               <v-checkbox color="#002D63" hide-details>
                 <template v-slot:label>
                     <div >
                     <small>{{ data.tag}}</small>
                     </div>
                 </template>
                 </v-checkbox>
                        <small>999</small>

      </div>
      </div>
      </div>
      </v-expand-transition>
      <div class="tw-flex tw-items-center" @click="showMore=!showMore">
      <small class="show"> {{showMore?'Show Less':'Show 9 more'}}</small>
              <v-icon>mdi-menu-down</v-icon>


      </div>
      </div>
</template>

<script>
export default {
    name:'PropertyTypeComponent',
    data(){
      return{
    items:[
                {
                    tag:'Hotel',
                    value:''
                },
                {
                    tag:'Hostel/Backpacker accomodation',
                    value:''
                },
                {
                    tag:'Apartment',
                    value:''
                },
                {
                    tag:'Aparthotel',
                    value:''
                },
                {
                    tag:'Resort',
                    value:''
                },
                {
                    tag:'Inn',
                    value:''
                },
                {
                    tag:'Motel',
                    value:''
                },
                 {
                    tag:'Bed & breakfast',
                    value:''
                },
                {
                    tag:'Guesthouse',
                    value:''
                },
                {
                    tag:'Condo',
                    value:''
                },
                {
                    tag:'All-inclusive property',
                    value:''
                },
                {
                    tag:'Hostal',
                    value:''
                },
              
            ],
            showMore:false,
            showLessItems:[],
            showMoreItems:[]
      }
    },
    watch:{
        showMore: {
      handler: function (val) {
            if(val){
                return this.showMoreItems = this.items.slice(3,this.items.length)
            }
            else{
                return this.showLessItems = this.items.slice(0,3)

            }
        },
        immediate:true,
        deep:true
    }
    }

}
</script>

<style>
.show{
   color: #002D63
}

</style>