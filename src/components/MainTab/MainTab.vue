<template>
  <div id="main-tab">
    <div class="main-wrapper">
      <main-button></main-button>
      <div class="type-list">
        <ul>
          <li><p>文库</p></li>
          <li><p>图库</p></li>
        </ul>
      </div>
      <div class="search">
        <search-input></search-input>
      </div>
    </div>
  </div>
</template>
<script>
import MainButton from '../WindowButton/MainButton'
import SearchInput from '../WindowButton/SearchInput'
export default {
  components: {
    MainButton,
    SearchInput
  }
}
</script>
<style lang="scss">
@import "../../assets/css/baseColor.scss";
#main-tab {
  height: 100%;
  width:400px;
  min-width: 300px;
  background-color: $wetAsphalt;
}
.main-wrapper{
  box-shadow:0px 3px 10px rgba(0, 0, 0, 0.5);
  background-color: $midNightBlue;
  width: 100%;
  height: 120px;
}
.type-list{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  li{
    margin:5px;
    color: $clouds;
    float: left;
  }
}
.search{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
