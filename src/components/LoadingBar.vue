<template>
  <div class="item-wrapper">
    {{ progress }}
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
.item-wrapper{
  background-color: $midNightBlue;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
}
</style>
