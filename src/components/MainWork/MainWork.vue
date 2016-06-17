<template>
  <div id="main-work">
    <markdown></markdown>
  </div>
</template>
<script>
  import {currentArticle,articleList} from '../../vuex/getters'
  import marked from 'marked'
  import markdown from './Markdown'
  //TODO: 一段时间后保存
  export default {
    created: function(){
    },
    data: function (){
      return {
        contentHtml: ''
      }
    },
    components: {
      markdown
    },
    vuex: {
      getters: {
        currentArticle,
        articleList
      },
      actions: {
        inputContent: function() {
          console.log(this.contentHtml)
        }
      }
    }
  }
</script>
<style lang="scss">
@import "../../assets/css/baseColor.scss";
#main-work {
  height: 100vh;
  overflow: scroll;
  display: flex;
  #markdown-preview {
    flex:1;
  }
  #editor {
    height: 100%;
    width: 100%;
    white-space: 'pre';
  }
  textarea,#editor {
    margin: 0;
    height: 100%;
    width: 100%;
    border: 0;
    font-size: 16px;
    flex:1;
  }
  textarea:focus {
    outline: 0;
  }
}
</style>
