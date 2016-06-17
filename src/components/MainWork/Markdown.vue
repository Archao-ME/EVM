<template>
  <div id="editor">
    <textarea v-editor></textarea>
  </div>
</template>
<script>
// import marked from 'marked'
import SimpleMDE from '../../SimpleMDE/js/simplemde'
export default {
  directives : {
    editor: {
      bind: function() {
        var simplemde = new SimpleMDE({
            element: this.el
          }
        )
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../SimpleMDE/css/simplemde';
// textarea,#editor {
//   margin: 0;
//   height: 100%;
//   width: 100%;
//   border: 0;
//   font-size: 16px;
//   flex:1;
// }
// textarea:focus {
//   outline: 0;
// }
</style>
