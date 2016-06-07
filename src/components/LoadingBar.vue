<template>
  <div class="item-wrapper" v-show="progress" transition="expand">
    <div v-bind:style="{width: progress + '%',height:'100%',backgroundColor:'#fff', backgroundImage: 'repeating-linear-gradient( 45deg, #2980b9, #2980b9 30px, #3498db 30px, #3498db 60px )'}">
    </div>
    <div class="info-wrapper">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
