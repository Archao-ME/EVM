<template>
  <div id="main-work">
    <textarea v-model="currentArticle.content">
    </textarea>
  </div>
</template>
<script>
  import {currentArticle,articleList} from '../../vuex/getters'

  //TODO: 一段时间后保存
  export default {
    created: function(){
      console.log('MainWork created')
    },
    data: {
      content: ''
    },
    vuex: {
      getters: {
        currentArticle,
        articleList
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
