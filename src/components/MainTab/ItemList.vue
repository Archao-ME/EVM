<template>
  <div class="item-wrapper">
    <div class="img-wrapper">
      <img src="http://vuejs.org.cn/images/logo.png" />
    </div>
    <div class="info-wrapper">
      <div class="title">
        <h1>Title in the EMV</h1>
      </div>
      <div class="detail">
        <p>http://www.google.com/123</p>
      </div>
    </div>
  </div>
</template>
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
