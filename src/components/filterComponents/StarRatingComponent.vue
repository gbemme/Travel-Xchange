<template>
  <div>
    <div v-for="(data, i) in ratings" :key="i">
      <div class="tw-flex tw-justify-between tw-items-center">
        <ratings-component :rating="data.value"/>
        <small>999</small>
      </div>
    </div>
  </div>
</template>

<script>
import RatingsComponent from '../nav/RatingsComponent.vue';
export default {
  components: { RatingsComponent },
  name: "StarRatingComponent",
  data() {
    return {
       ratings:[
              {
                  value:5
              },
              {
                  value:4
              },
              {
                  value:3
              },
              {
                  value:2
              },
              {
                  value:1
              },
              {
                  value:0
              }
          ],
    };
  },
};
</script>

<style>
</style>