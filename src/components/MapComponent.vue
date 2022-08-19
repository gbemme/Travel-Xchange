<template>
  <div class="tw-py-2 map">
      <img src="@/assets/images/map.png" alt=""/>
      <v-btn height="40px" depressed class="show-map">
          <h4>Show on map</h4>

      </v-btn>
  </div>
</template>

<script>
export default {
    name:'MapComponent'

}
</script>

<style lang="scss" scoped>
// .show-map{
//   position: absolute;
//   top: 190px;
//   left: 170px;
//   border: 1px green solid;
// }
    .map{
        position: relative;
        display: inline-block;
    }
    .map .show-map{
        position: absolute;
        // z-index: 999;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: 40%;
        text-align: center;
        width: 170px; 
        background: var(--blue1);
        color: white;
        font-weight: 500;
    }
    .show-map h4{
             color: white;
    }
</style>
