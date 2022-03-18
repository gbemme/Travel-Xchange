<template>
  <div>
       <v-progress-linear
      v-model="value"
    ></v-progress-linear>
    <div class="tw-flex tw-mt-5 tw-items-center tw-justify-evenly">
        <v-text-field flat solo hide-details="" class="price mr-3" label="SGD  0"></v-text-field> -
        <v-text-field flat solo hide-details="" class="price ml-3" label="SGD  0"></v-text-field> 
    </div>
  </div>
</template>

<script>
export default {
    name:'PriceComponent',
    data(){
        return{
            value:50
        }
    }
}
</script>

<style scoped>
.price{
    border: 1px solid #DDDDDD;
box-sizing: border-box;
border-radius: 3px;
}

</style>