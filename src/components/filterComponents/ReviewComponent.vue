<template>
  <div>
    <div v-for="(data, i) in reviews" :key="i">
      <div class="tw-flex tw-justify-between tw-items-center">
        <v-checkbox color="#002D63" hide-details>
          <template v-slot:label>
            <div>
              <small>{{ data.tag }}</small>
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
  name: "ReviewComponent",
  data() {
    return {
       reviews:[
              {
                  tag:'Excellent',
                  value:''
              },
              {
                  tag:'Very Good',
                  value:''
              },
              {
                  tag:'Good',
                  value:''
              },
              {
                  tag:'Fair',
                  value:''
              },
              {
                  tag:'Poor',
                  value:''
              },
              {
                  tag:'No review',
                  value:''
              }
          ],
    };
  },
};
</script>

<style>
</style>