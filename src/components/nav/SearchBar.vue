<template>
   <v-app-bar
      color="#002D63"
      class="tw-m-auto tw-flex tw-justify-center"
      elevate-on-scroll
      flat
    
    >
     <div class=" tw-py-2.5 tw-bg-blue1k md:tw-flex tw-hidden tw-justify-center tw-items-center">
      <div class="tw-mr-2.5">
          <v-text-field hide-details   prepend-inner-icon="mdi-magnify" label="Search" class="tw-w-420" solo></v-text-field>
      </div>
      <div class="tw-mr-2.5">
          <v-text-field solo hide-details prepend-inner-icon="mdi-calendar-blank-outline" label="Jul 19  –  Jul 20"  class="tw-w-60"></v-text-field>
      </div>
      <div class="tw-mr-2.5">
          <v-text-field solo hide-details label="2 adults, 0 children, 1 room"   class="tw-w-60"></v-text-field>
      </div>
      <div>
          <v-btn class="tw-w-36 tw-text-white font-weight-bold" height="3rem"  depressed color="#00A1E5">Search</v-btn>
      </div>

  </div>
  <div class="md:tw-hidden">
      <v-divider></v-divider>
      <div class="tw-flex tw-items-center  tw-p-3">
          <v-icon class="tw-mr-3">mdi-magnify</v-icon>
          <div>
          <h4>Singapore, Singapore</h4>
            <small>Aug 18 - Aug 19 <small class="tw-ml-4">2 adults, 1 room, 0 children</small>   </small>
          </div>

      </div>
      <v-divider></v-divider>

  </div>
   </v-app-bar>
 
</template>

<script>
export default {
    name:'SearchBar'

}
</script>

<style>

</style>