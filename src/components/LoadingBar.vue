<template>
  <div class="item-wrapper" v-show="progress" transition="expand">
    <div v-bind:style="{width: progress + '%',height:'100%',backgroundColor:'#fff', backgroundImage: 'repeating-linear-gradient( 45deg, #2980b9, #2980b9 30px, #3498db 30px, #3498db 60px )'}">
    </div>
    <div class="info-wrapper">
    </div>
  </div>
</template>
<script>
//TODO: 添加Loading progress样式和参数输入
//TODO: 缩略图预览
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
@import "../assets/css/baseColor.scss";
.expand-transition {
  transition: all .3s ease;
  height: 70px;
}
/* .expand-enter 定义进入的开始状态 */
.expand-enter {
  height: 70px;
}
/* .expand-leave 定义离开的结束状态 */
.expand-leave {
  height: 0;
  opacity: 0;
}
.item-wrapper{
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>
