<template>
  <v-footer
    dark
    padless
    fixed
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title style="background: #333333;padding:25px;">

        <v-spacer  class="tw-hidden  md:tw-block"></v-spacer>
        <div v-for="(data,i) in items" :key="i">
            <p class="white--text tw-mr-3 md:tw-mr-5">{{data}}</p>
        </div>

        <v-spacer class="tw-hidden  md:tw-block"></v-spacer>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        <strong>Copyright CloudTravel</strong> <strong>{{ new Date().getFullYear() }}.</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
    name:'FooterComponent',
    data: () => ({
      items: [
        'FAQ',
        'Terms of use',
        'Privacy policy',
        'Privacy policy',
      ],
    }),
    
}
</script>
<style lang="scss" scoped>

</style>