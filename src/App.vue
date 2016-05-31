<template>
  <div id="app">
    <window-button></window-button>
    <main-tab></main-tab>
    <main-work>
    </main-work>
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
#app {
  height: 100vh;
  width: 100%;
  display: flex;
}
</style>
