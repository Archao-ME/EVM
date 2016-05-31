<template>
  <div class="window-buttons">
    <ul class="window-buttons-ul">
      <li class="close-button" v-on:click = "onClose()"></li>
      <li class="min-button" v-on:click = "onMin()"></li>
      <li class="zoom-button" v-on:click = "onZoom()"></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@import "../../assets/css/baseColor.scss";
.window-buttons{
  z-index: 1100;
  position: fixed;
  top:10px;
  left: 10px;
}
.window-buttons-ul{
  li {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    margin: 0 5px;
    padding: 0;
    float: left;
  }
  li.close-button {
    background-color: $alizarn;
  }
  li.min-button {
    background-color: $sunFlower;
  }
  li.zoom-button {
    background-color: $emerald;
  }
}
</style>
