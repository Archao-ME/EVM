<template>
  <div id="app">
    <window-button></window-button>
    <div class="main-tab">
      <main-tab></main-tab>
    </div>
    <div class="main-work">
      <main-work></main-work>
    </div>
  </div>
</template>

<script>
import MainTab from './components/MainTab/MainTab'
import MainWork from './components/MainWork/MainWork'
import WindowButton from './components/WindowButton/WindowButton'

export default {
  components: {
    WindowButton,
    MainTab,
    MainWork
  }
}
</script>
<style lang="scss">
@import "./assets/css/base.scss";
@import "./assets/css/baseColor.scss";
.main-tab {
  width:$mainTabWidth;
  background-color: $wetAsphalt;
}
#app {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow:hidden;
}
.main-tab{
  overflow:scroll;
}
.main-work{
  flex:1;
  overflow: scroll;
  background-color: $clouds;
}
</style>
