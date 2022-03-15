
<template>
  <div class="card-wrapper tw-p-5  tw-mb-2">
      <div class="tw-flex tw-justify-between tw-items-center tw-mb-3">
          <h4>{{title}}</h4>
          <h3 class="tw-uppercase">Clear</h3>

      </div>
      <slot name="component"></slot>
  </div>
</template>

<script>
export default {
    name:'FilterCard',
    props:{
        title:[String]
    },
}
</script>

<style lang="scss" scoped>
.card-wrapper{
    background: #FFFFFF;
border-radius: 5px;
}


</style>