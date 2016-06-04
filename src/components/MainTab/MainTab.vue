<template>
  <div id="main-tab">
    <div class="head-wrapper">
      <main-button></main-button>
      <div class="type-list">
        <ul>
          <li v-on:click="changeTab('PicList')"><p>图库</p></li>
          <li v-on:click="changeTab('ArticleList')"><p>文库</p></li>
        </ul>
      </div>
      <div class="search">
        <search-input></search-input>
      </div>
    </div>
    <div class="item-list-wrapper">
      <components :is="currentTab">
      </components>
    </div>
  </div>
</template>
<script>
import MainButton from '../WindowButton/MainButton'
import SearchInput from '../WindowButton/SearchInput'
import PicList from './PicList'
import ArticleList from './ArticleList'

import {currentTab} from '../../vuex/getters'
import {changeTab} from '../../vuex/action'
export default {
  components: {
    MainButton,
    SearchInput,
    PicList,
    ArticleList
  },
  vuex: {
    getters: {
      currentTab: currentTab
    },
    actions: {
      changeTab
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/css/baseColor.scss";
@import "../../assets/css/base.scss";
.head-wrapper{
  position: fixed;
  z-index: 1;
  box-shadow:0px 3px 10px rgba(0, 0, 0, 0.5);
  background-color: $midNightBlue;
  width: $mainTabWidth;
  height: $headWrapper;
}
.item-list-wrapper{
  padding-top: $headWrapper;
}
.type-list{
  width: 100%;
  position: relative;
  top:-10px;
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
  position: relative;
  top:-10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
