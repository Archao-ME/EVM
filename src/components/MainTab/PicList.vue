<template>
  <loading-bar v-for="item in uploadObj" :progress="item.progress" v-show="item.progress"></loading-bar>
  <item-wrapper v-for="item in picList" :with-thumb=true :item="item" @click = "testUploadObj"></item-wrapper>
</template>
<script>
  import {picList, uploadObj} from '../../vuex/getters'
  import itemWrapper from '../ItemWrapper'
  import loadingBar from '../LoadingBar'
  export default {
    components: {
      itemWrapper,
      loadingBar
    },
    vuex: {
      getters: {
        picList,
        uploadObj
      },
      actions: {
        testUploadObj: function({dispatch, state}){
          dispatch('CHANGEUPLOADOBJ', 1)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "../../assets/css/baseColor.scss";
.item-wrapper{
  background-color: $midNightBlue;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;

}
.img-wrapper{
  width: 100px;
  height: 100%;
  overflow: hidden;
  img{
    width: 100%;
  }
}
.info-wrapper{
  word-wrap: break-word;
  width:170px;
  margin: 10px;
  overflow: hidden;
  h1{
    font-size: 16px;
    color: $peterRiver;
  }
  p{
    font-size: 12px;
    color: $belizeHole
  }
}
</style>
