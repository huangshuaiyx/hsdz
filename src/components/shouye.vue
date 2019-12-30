<template>
  <div class="shouye">
    <div class="sou">
      <div class="nj">
      <van-icon name="location" color="blue" />
        南京
        </div>
      <van-search placeholder="请输入区域/房源名称/地址" v-model="value" class="inp" />
    </div>
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" class="lun">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
    <van-grid :border="false" :column-num="5" :gutter="0">
      <van-grid-item class="jiu">
        <van-image class="jiuimg" src="https://static1.912hf.com/static/image/index/cutPrice_new.png" />全程砍价
      </van-grid-item>
      <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/exchange_new.png"
        />置换增值
      </van-grid-item>
      <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/auto_address_new.png"
        />智能选址
      </van-grid-item>
      <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/brand_new.png"
        />品牌开店
      </van-grid-item>
      <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/pub_new.png"
        />发布房源
      </van-grid-item>
      <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/business_new.png"
        />商业体
      </van-grid-item>
      <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/park_new.png"
        />产业园
      </van-grid-item>
      <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/house_shop_new.png"
        />商铺
      </van-grid-item>
        <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/house_shop_new.png"
        />商铺
      </van-grid-item>
        <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/house_shop_new.png"
        />商铺
      </van-grid-item>
        <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/house_shop_new.png"
        />商铺
      </van-grid-item>
    </van-grid>
    <!-- 精品咨询 -->
    <div class="news-container">
      <div class="one">
        <div class="one-one">精品咨询</div>
        <div class="one-two">
          <ul>
            <li>dfdfff撒大苏打实打实</li>
            <li>dfdfff撒大苏打实打实</li>
            <li>dfdfff撒大苏打实打实</li>
            <li>dfdfff撒大苏打实打实</li>
          </ul>
        </div>
      </div>
      <!-- 下 -->
      <div class="xia">
        <img
          class="jpimg"
          src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3912396222,3202023930&fm=26&gp=0.jpg"
          alt
        />
        <img
          class="jpimg"
          src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3912396222,3202023930&fm=26&gp=0.jpg"
          alt
        />
      </div>
    </div>
    <h1>招商办</h1>
    <h1>中间大图</h1>
    <h1>商业中心</h1>
    <h1>最新上架</h1>
    <h1>商品入住</h1>
    <h1>商家选址</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      images: [
        "https://baseimg.912hf.com/uploads/Poster/20190816/5896da6d776edf9da47de883075f257f.jpg",
        "https://baseimg.912hf.com/uploads/Poster/20190814/cefcd3b8de962c87a17b0b55ae8b8a54.jpg",
        "https://baseimg.912hf.com/uploads/Poster/20190620/053c82c40e152efe893fe7ac44071592.jpg"
      ]
    };
  }
};
</script>


<style lang="">
.shouye{
  box-sizing: border-box;
}
/* 轮播 */
.lun {
  height: 142px;
}
.img {
  width: 94%;
  height: 100%;
  border-radius: 18px;
  padding: 0 15px;
}
/* 精品 */
.news-container {
  width: 100%;
  height: 250px;
  position: relative;
  margin-bottom: 30px;
  /* padding: 0 15px; */
  background: url(http://bpic.588ku.com/back_pic/05/80/83/195c2dc3e30af89.jpg)
    top no-repeat;
  background-size: 100% 150px;
  box-sizing: border-box;
}
/* 九宫格 */
.jiuimg {
  width: 50px;
  height: 50px;
  
}
.one {
  width: 100%;
  height: 2rem;
  display: flex;
}
.one-one {
  width: 40px;
  height: 30px;
  color: white;
}
.one-two {
  width: 250px;
  height: 20px;
  border: solid 1px red;
  color: white;
}
p {
  width: 100%;
  text-align: center；;
}
/* 搜索 */
.sou {
  width: 100%;
  display: flex;
  height: 50px;
  padding: 20px 8px;
}
.nj {
  width: 15%;
  line-height: 50px;
  text-align: center;
  font-size:20px;
}
.inp {
    width: 82%;
    height: 50px;
}
.van-search__content {
  border-radius: 8px;
  background: white;
  box-shadow: 0 0 10px gainsboro;
  padding: 9px 0;
}

.van-field__control{
  font-size: 15px;
}
.van-icon-search{
  width: 20px;
  height: 20px;
  
}
.xia {
  width: 90%;
  height: 200px;
  border: solid 1px;
  position: absolute;
  top: 40px;
  left: 25px;
  background: white;
  display: flex;
  justify-content: space-around;
}
.jpimg {
  width: 45%;
  height: 120px;
  border-radius: 10px;
}
</style>