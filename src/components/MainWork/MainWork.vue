<template>
  <div id="main-work">
    {{currentArticle}}
  </div>
</template>
<script>
import {currentArticle} from '../../vuex/getters'
  export default {
    vuex: {
      getters: {
        currentArticle
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../../assets/css/baseColor.scss";
@import "../../assets/css/markdown.scss";
#main-work {
  height: 100%;
  width: 100%;
}
</style>
