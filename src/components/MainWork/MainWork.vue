<template>
  <div id="main-work">
    <!-- <div id="editor" v-demo contenteditable="plaintext-only"></div> -->
    <textarea v-model="contentHtml" @input="inputContent"></textarea>
    <div id="editor" contenteditable="plaintext-only" v-demo>
      <div id="row-0">
        rowID-0
      </div>
    </div>
  </div>
</template>
<script>
  import {currentArticle,articleList} from '../../vuex/getters'
  import marked from 'marked'

  let brToN = function (str) {
    var escapedText = str.replace(/[\<br/>]+/g, '\n')
    return escapedText
  }
  let renderer = new marked.Renderer()
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  })
  //TODO: 一段时间后保存
  export default {
    created: function(){
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
      },
      actions: {
        inputContent: function() {
          // console.log(marked(this.contentHtml))
          console.log(this.contentHtml)
        }
      }
    },
    directives: {
      demo : {
        bind: function () {
          this.contentRow = []
          this.handler = e => {
            let content = this.el
          }
          let hashID = 0
          let rowId = "row-" + hashID
          this.el.addEventListener('keypress', function(e) {
            var key = e.which || e.keyCode
            let editorDOM = document.getElementById('editor')
            if(key == 13){
              //TODO: 实验富文本编辑器的实现思路
              let currentContent = this.el.textContent
              let range = document.createRange("pre")
              let newNode = document.createElement("div")
              let oldId = hashID++
              rowId = "row-" + hashID
              let oldrow = 'row-'+oldId
              newNode.setAttribute("id", rowId)
              // newNode.appendChild(document.createTextNode(currentContent))
              newNode.appendChild(document.createElement('br'))
              let oldRowDOM =  document.getElementById('row-'+oldId)
              editorDOM.insertBefore(newNode, oldRowDOM.nextSibling)
              range.selectNode(editorDOM)
              let selection = document.getSelection()
              selection.selectAllChildren(editorDOM)
              selection.collapseToEnd()
              // range.insertNode(newNode)
              e.preventDefault()
            }
          }.bind(this))
          this.el.addEventListener('input', this.handler)
        },
        update: function (newValue, oldValue) {
        },
        unbind: function () {
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
