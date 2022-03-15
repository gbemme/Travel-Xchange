<template>
<div>
      <div v-for="(data,i) in items" :key="i">
       <div class="tw-flex tw-justify-between tw-items-center">
               <v-checkbox color="#002D63" hide-details>
                 <template v-slot:label>
                     <div >
                     <small>{{data.tag}}</small>
                     </div>
                 </template>
                 </v-checkbox>
                        <small>999</small>

      </div>
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
      }
    }

}
</script>

<style>

</style>