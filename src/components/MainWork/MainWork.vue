<template>
  <div id="main-work">
    <div v-html="currentArticle.content | marked"></div>
    <div id="editor" v-demo="currentArticle.content" contenteditable="true"></div>
  </div>
</template>
<script>
  import {currentArticle,articleList} from '../../vuex/getters'
  import marked from 'marked'

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: true,
    sanitize: true,
    smartLists: true,
    smartypants: true
  })
  //TODO: 一段时间后保存
  export default {
    created: function(){
      console.log('MainWork created')
    },
    data: function (){
      return {
        contentHtml: ''
      }
    },
    vuex: {
      getters: {
        currentArticle,
        articleList
      }
    },
    filters: {
      marked: function (value) {
        var renderer = new marked.Renderer()
        renderer.heading = function (text, level) {
          var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

          return '<h' + level + '><a name="' +
                        escapedText +
                         '" class="anchor" href="#' +
                         escapedText +
                         '"><span class="header-link"></span></a>' +
                          text + '</h' + level + '>';
        }
        return marked(value, { renderer: renderer })
      }
    }
    ,
    directives: {
      demo : {
        twoWay: true,
        bind: function () {
            this.handler = function () {
                this.set(this.el.innerHTML)
            }.bind(this)
            this.el.addEventListener('keyup', this.handler)
        },
        update: function (newValue, oldValue) {
            this.el.innerHTML = newValue || ''
        },
        unbind: function () {
            this.el.removeEventListener('keyup', this.handler)
        }
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
  #editor {
    margin: 0;
    height: 100%;
    font-size: 16px;
  }
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
