<template>
<div>
      <div v-for="(data,i) in showLessItems" :key="i">
       <div class="tw-flex tw-justify-between tw-items-center" @click="getFilter">
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
       <div class="tw-flex tw-justify-between tw-items-center" >
               <v-checkbox color="#002D63" hide-details >
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
      <small class="show"> {{showMore?'Show Less':'Show 5 more'}}</small>
              <v-icon>mdi-menu-down</v-icon>


      </div>
      </div>
</template>

<script>
    import { mapGetters } from "vuex";
export default {
    name:'MealPlanComponent',
    data(){
      return{
    meal:[
                {
                    tag:'Room only',
                    val:1
                },
                {
                    tag:'Breakfast',
                    val:2
                },
                {
                    tag:'Lunch',
                    val:3
                },
                {
                    tag:'Dinner',
                    val:4
                },
                {
                    tag:'Half board',
                    val:5
                },
                {
                    tag:'Full board',
                    val:6
                },
                {
                    tag:'All inclusive',
                    value:''
                },
              
            ],
             showMore:false,
            showLessItems:[],
            showMoreItems:[],
            allFilter:[],
            key:'packages',
            index:0,
            val:'foodCode'
      }
    },
     computed:{
      ...mapGetters(['getLoadingStatus','getAllSearchResult','getAllLocation','getErrorStatus','getSearchValue'])
    },
    watch:{
        showMore: {
      handler: function (val) {
            if(val){
                return this.showMoreItems = this.meal.slice(2,this.meal.length)
            }
            else{
                return this.showLessItems = this.meal.slice(0,2)

            }
        },
        immediate:true,
        deep:true
    }
    },
    methods:{
        getFilter(value){
         console.log(value)
         this.$store.dispatch('filterProperties',{key:this.key, index:this.index,val:this.val,value:value})

    //   this.allFilter = [...this.getAllSearchResult.outlets.availability.results.filter(pool => (pool[this.key][this.index][this.val]=== 1))]
    //   console.log(this.allFilter)
    }
    }

}
</script>

<style>

</style>