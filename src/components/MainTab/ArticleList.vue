<template>
<item-wrapper v-for="item in articleList" track-by="$index" :with-thumb=false :item="item" v-on:click="changeArticle(item,$index)"></item-wrapper>
</template>
<script>
  import {articleList,article} from '../../vuex/getters'
  import {changeArticle} from '../../vuex/action'
  import itemWrapper from '../ItemWrapper'
  export default {
    components: {
      itemWrapper
    },
    vuex: {
      getters: {
        articleList: articleList
      },
      actions: {
        changeArticle,
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
