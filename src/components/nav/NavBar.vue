<template>
  <div class="tw-flex tw-py-3.5 tw-px-4 md:tw-px-0 md:tw-justify-around tw-justify-between tw-items-center">
      <div>
          <img src="@/assets/images/cloudtravel-logo.png" alt=""/>
      </div>
      <div class="md:tw-hidden">
           <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </div>
      <div class="md:tw-flex tw-hidden tw-w-80 tw-justify-between">
          <div>
              <span>English</span>
              <v-icon >mdi-menu-down</v-icon>
          </div>
          <div>
              <span>USD</span>
              <v-icon>mdi-menu-down</v-icon>
          </div>
           <div>
              <span>My Account</span>
          </div>
           <div>
              <span>Log Out</span>
          </div>


      </div>

  </div>
</template>

<script>
export default {
    name:'NavBar'

}
</script>

<style>

</style>