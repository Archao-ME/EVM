<template>
  <div id="main-work">
    <textarea>
      {{ currentArticle }}
    </textarea>
  </div>
</template>
<script>
  import {currentArticle} from '../../vuex/getters'
  //TODO: node打开MD文件后填充进入Markdown组件
  export default {
    data: function () {
      return {
        xx: 'xx'
      }
    },
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
  height: 100vh;
  width: 100%;
  overflow: scroll;
  textarea {
    margin: 0;
    height: 100%;
    width: 100%;
    border: 0;
    font-size: 16px;
  }
  textarea:focus {
    outline: 0;
  }
}
</style>
