<template>
  <div class="">
      <h3 v-if="getAllSearchResult.outlets" class="tw-ml-3 md:tw-ml-0 tw-py-5">{{search.split(',')[0]}}: {{getAllSearchResult.outlets.availability.results.length}} properties found</h3>
      <h3 v-else class="tw-py-5 tw-ml-3 md:tw-ml-0">{{search.split(',')[0]}}: 0 properties found</h3>

      <div class="md:tw-flex tw-mx-3 tw-mb-4 tw-items-center tw-hidden">
          <v-row class="tw-flex tw-items-center tw-pb-4  ">
          <v-col   v-for="(data,i) in filterList"  :key="i" cols="12" md="3" @click="activeFilter=data.name"  :class="activeFilter===data.name?'filter-active':'filter-no-active'" class=" tw-cursor-pointer tw-py-3.5  filter">
              <div class="tw-flex tw-items-center">
                    <p>{{data.name}}</p>
              <!-- <v-icon v-if="data.menuList">mdi-menu-down</v-icon> -->
              </div>
              
          </v-col>
          
          </v-row>
          

      </div>
      <div class="md:tw-hidden tw-flex">
          <div v-for="(data,i) in mobileFilter"  :key="i" class="tw-flex tw-w-3/6 tw-items-center tw-pb-4 tw-mr-0.5">
          <div @click="toggleDisplay(data)"  :class="activeFilter===data.name?'filter-active':'filter-no-active'" class=" tw-w-full  tw-cursor-pointer tw-py-3.5 filter">
              <div class="tw-flex tw-items-center">
              <v-icon class="tw-mr-3">{{data.icon}}</v-icon>

                    <p>{{data.name}}</p>
              </div>
              
          </div>
          </div>

      </div>
       
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name:"FilterNav",
    data(){
        return{
            filterList:[
                {
                    name:'Popularity'
                },
                {
                    name:'Price (lowest first)',
                    isDropdown:true,
                    menuList:[
                        {
                            price:'100-200'
                        }
                    ]
                },
                {
                    name:'Reviews'
                },
                {
                    name:'Discount'
                },
            ],
            mobileFilter:[
                {
                    name:'Sort & Filter',
                    icon:'mdi-sort-bool-ascending'
                },
                {
                    name:'Map View',
                    icon:'mdi-map-marker-outline'
                }

            ],
            activeFilter:'Popularity'
            
        }
    },
    props:{
        properties:[Number],
        search:[String]
    },
    computed:{
      ...mapGetters(['getAllSearchResult','getAllLocation','getErrorStatus','getSearchValue'])
    },
    methods:{
        toggleDisplay(data){
            this.activeFilter=data.name
            this.$emit('toggle')
        }
    }

}
</script>

<style lang="scss" scoped>
.filter-active{
    background: #002D63;
border-radius: 5px 0px 0px 5px;
color: #FFFFFF!important;
border-right: 1px solid #DDDDDD;
}
.filter-active p{
color: #FFFFFF!important;

}
.filter{
    display: flex;
    justify-content: center;
}
.filter-no-active{
    background: #FFFFFF;
border-right: 1px solid #DDDDDD;

}

</style>