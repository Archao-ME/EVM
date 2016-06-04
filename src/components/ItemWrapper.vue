<template>
  <div class="item-wrapper">
    <div class="img-wrapper" v-if="withThumb && item.img">
      <img :src="item.img" />
    </div>
    <div class="info-wrapper">
      <div class="title">
        <h1>{{item.name}}</h1>
      </div>
      <div class="detail">
        <p>{{item.img}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    withThumb: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
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
