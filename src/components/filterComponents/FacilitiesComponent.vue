<template>
<div>
      <div v-for="(data,i) in facilities" :key="i">
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
    name:'MealPlanComponent',
    data(){
      return{
    facilities:[
                {
                    tag:'Swimming pool',
                    value:''
                },
                {
                    tag:'Internet access',
                    value:''
                },
                {
                    tag:'Non-smoking floor',
                    value:''
                },
                // {
                //     tag:'Dinner',
                //     value:''
                // },
                // {
                //     tag:'Half board',
                //     value:''
                // },
                // {
                //     tag:'Full board',
                //     value:''
                // },
                // {
                //     tag:'All inclusive',
                //     value:''
                // },
              
            ],
      }
    }

}
</script>

<style>

</style>