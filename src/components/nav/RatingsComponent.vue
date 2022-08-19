<template>
   <v-rating
      :value="rating"
      color="#E9BF2D"
       small
       readonly
       empty-icon
       
    ></v-rating>
</template>

<script>
export default {
name:'RatingsComponent',
props:{
    rating:[Number,String]
}

}
</script>

<style >
.v-rating .v-icon{
    padding: 0 !important;
}
</style>