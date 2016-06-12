<template>
  <div id="markdown-preview">
    {{{ content | marked }}}
  </div>
</template>

<script>
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
export default {
  props: {
    content: {
      type: String
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
}
</script>

<style lang="scss" >
@import "../../assets/css/markdown.scss";
#markdown-preview {
  background: #ccc;
}
</style>
