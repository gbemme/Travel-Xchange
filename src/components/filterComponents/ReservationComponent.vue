<template>
<div>
      <div v-for="(data,i) in reservations" :key="i">
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
    name:'ReservationComponent',
    data(){
      return{
         reservations:[
                {
                    tag:'Free cancellation',
                    value:''
                },
                {
                    tag:'Book now, pay later',
                    value:''
                },
                {
                    tag:'Pay at hotel',
                    value:''
                },
                
            ],
      }
    }

}
</script>

<style>

</style>