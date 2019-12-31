<template>
  <div class="shouye">
    <div class="sou">
      <div class="nj">
        <van-icon name="location" color="blue" />南京
      </div>
      <van-search placeholder="请输入区域/房源名称/地址" v-model="value" class="inp" />
    </div>
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" class="lun">
      <van-swipe-item v-for="(image, index) in images" :key="index" @click="$router.push({'name':'lbtiao'})">
        <img v-lazy="image" class="img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
    <van-grid :border="false" :column-num="5" :gutter="0">
      <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/cutPrice_new.png"
        />全程砍价
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
        <van-image class="jiuimg" src="https://static1.912hf.com/static/image/index/brand_new.png" />品牌开店
      </van-grid-item>
      <van-grid-item class="jiu">
        <van-image class="jiuimg" src="https://static1.912hf.com/static/image/index/pub_new.png" />发布房源
      </van-grid-item>
      <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/business_new.png"
        />商业体
      </van-grid-item>
      <van-grid-item class="jiu">
        <van-image class="jiuimg" src="https://static1.912hf.com/static/image/index/park_new.png" />产业园
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
      <!-- <van-grid-item class="jiu">
        <van-image
          class="jiuimg"
          src="https://static1.912hf.com/static/image/index/house_shop_new.png"
        />商铺
      </van-grid-item>-->
    </van-grid>
    <!-- 精品咨询 -->
    <div class="news-container">
      <div class="one">
        <div class="one-one">精品咨询</div>
        <div class="one-two">
          <p>145613512ssssssssssssssssssssssss</p>
          <p>145613512sssssssssssss</p>
          <p>145613512ssss</p>
        </div>
      </div>
      <!-- 下-->
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

    <!-- <h1>招商办</h1> -->
    <van-tabs @click="onClick" class="da">
      <van-tab title="招商办">
        <div class="zhao">
          <p>专业找商铺，找办公</p>
          <p class="xiao">就找912</p>
        </div>
        <button>立即寻找</button>
      </van-tab>
      <!-- 找房 -->
      <van-tab title="找房">
        <div class="zhao1">
          <p>找好房，无需东奔西走</p>
          <p class="xiao">省事省心更省金</p>
        </div>
        <button>探寻理想居所</button>
      </van-tab>
    </van-tabs>
    <!-- <h1>中间大图</h1> -->
    <div class="tu">
      <img src="https://baseimg.912hf.com/uploads/Poster/123.jpg" alt />
    </div>
    <!-- <h1>商业中心</h1> -->
    <div class="zuixin">
      <p class="shang">商业中心</p>
      <figure class="shang1">
        <img
          src="http://baseimg.912hf.com/uploads/Poster/20191024/269b2c4ac7f08a1c46624780732d3724.png"
          alt
        />
        <figcaption class="shang2">
          <img
            src="http://baseimg.912hf.com/uploads/Poster/20191118/84da05f1709e9c5b50f8ea26d2eda2e0.png"
            alt
          />
          <img
            src="http://baseimg.912hf.com/uploads/Poster/20191118/8715a0957224880f64591a11439ae42a.png"
            alt
          />
        </figcaption>
      </figure>
    </div>
    <!-- <h1>最新上架</h1> -->
    <div class="zuixin">
      <p class="shang">最新上架</p>
      <van-tabs @click="onClick">
        <van-tab title="商业体">
          <figure class="syt">
            <img
              src="http://img1.912hf.com/uploads/crm/public/20191111/6a461b0629c2d3ca9943a0c6a5ae1727.jpg@!w200"
              alt
            />
            <figcaption>
              <p class="yfc">游坊城</p>
              <p class="hyq">建邺区 | 15000m²</p>
              <p class="fj">附近地铁站</p>
              <p class="tian">2.5/m²/天</p>
            </figcaption>
          </figure>
          <figure class="syt">
            <img
              src="http://img1.912hf.com/uploads/crm/public/20191111/ab7ec8d568d557a90499c04afad03750.jpg@!w200"
              alt
            />
            <figcaption>
              <p class="yfc">游坊城</p>
              <p class="hyq">建邺区 | 15000m²</p>
              <p class="fj">附近地铁站</p>
              <p class="tian">2.5/m²/天</p>
            </figcaption>
          </figure>
          <figure class="syt">
            <img
              src="http://img1.912hf.com/uploads/crm/public/20191030/aeddd8f407bbed01c8b8cdf28c0711f8.jpg@!w200"
              alt
            />
            <figcaption>
              <p class="yfc">游坊城</p>
              <p class="hyq">建邺区 | 15000m²</p>
              <p class="fj">附近地铁站</p>
              <p class="tian">2.5/m²/天</p>
            </figcaption>
          </figure>
          <figure class="syt">
            <img
              src="http://img1.912hf.com/uploads/crm/public/20191213/94f6b6205acb1232b1d0698f6fda98cb.jpg@!w200"
              alt
            />
            <figcaption>
              <p class="yfc">游坊城</p>
              <p class="hyq">建邺区 | 15000m²</p>
              <p class="fj">附近地铁站</p>
              <p class="tian">2.5/m²/天</p>
            </figcaption>
          </figure>
          <figure class="syt">
            <img
              src="http://img1.912hf.com/uploads/crm/public/20191206/7d98c74558f96e2aac1574467a7ae1d0.jpg@!w200"
              alt
            />
            <figcaption>
              <p class="yfc">迪斯尼水城美食街</p>
              <p class="hyq">建邺区 | 15000m²</p>
              <p class="fj">附近地铁站</p>
              <p class="tian">2.5/m²/天</p>
            </figcaption>
          </figure>
          <button class="chakan">查看更多</button>
        </van-tab>
        <van-tab title="商铺">
          <figure class="syt">
            <img
              src="http://img1.912hf.com/uploads/crm/public/20191206/7d98c74558f96e2aac1574467a7ae1d0.jpg@!w200"
              alt
            />
            <figcaption>
              <p class="yfc">迪斯尼水城美食街</p>
              <p class="hyq">建邺区 | 15000m²</p>
              <p class="fj">附近地铁站</p>
              <p class="tian">2.5/m²/天</p>
            </figcaption>
          </figure>
          <figure class="syt">
            <img
              src="http://img1.912hf.com/uploads/crm/public/20191206/7d98c74558f96e2aac1574467a7ae1d0.jpg@!w200"
              alt
            />
            <figcaption>
              <p class="yfc">迪斯尼水城美食街</p>
              <p class="hyq">建邺区 | 15000m²</p>
              <p class="fj">附近地铁站</p>
              <p class="tian">2.5/m²/天</p>
            </figcaption>
          </figure>
          <figure class="syt">
            <img
              src="http://img1.912hf.com/uploads/crm/public/20191206/7d98c74558f96e2aac1574467a7ae1d0.jpg@!w200"
              alt
            />
            <figcaption>
              <p class="yfc">迪斯尼水城美食街</p>
              <p class="hyq">建邺区 | 15000m²</p>
              <p class="fj">附近地铁站</p>
              <p class="tian">2.5/m²/天</p>
            </figcaption>
          </figure>
          <figure class="syt">
            <img
              src="http://img1.912hf.com/uploads/crm/public/20191206/7d98c74558f96e2aac1574467a7ae1d0.jpg@!w200"
              alt
            />
            <figcaption>
              <p class="yfc">迪斯尼水城美食街</p>
              <p class="hyq">建邺区 | 15000m²</p>
              <p class="fj">附近地铁站</p>
              <p class="tian">2.5/m²/天</p>
            </figcaption>
          </figure>
          <figure class="syt">
            <img
              src="http://img1.912hf.com/uploads/crm/public/20191206/7d98c74558f96e2aac1574467a7ae1d0.jpg@!w200"
              alt
            />
            <figcaption>
              <p class="yfc">迪斯尼水城美食街</p>
              <p class="hyq">建邺区 | 15000m²</p>
              <p class="fj">附近地铁站</p>
              <p class="tian">2.5/m²/天</p>
            </figcaption>
          </figure>
        </van-tab>
        <van-tab title="写字楼">
           <figure class="syt">
      <img src="http://img1.912hf.com/uploads/crm/public/20191206/7d98c74558f96e2aac1574467a7ae1d0.jpg@!w200" alt="">
      <figcaption>
        <p class="yfc">迪斯尼水城美食街</p>
        <p class="hyq">建邺区 | 15000m²</p>
        <p class="fj">附近地铁站</p>
        <p class="tian">2.5/m²/天</p>
      </figcaption>
    </figure>
     <figure class="syt">
      <img src="http://img1.912hf.com/uploads/crm/public/20191206/7d98c74558f96e2aac1574467a7ae1d0.jpg@!w200" alt="">
      <figcaption>
        <p class="yfc">迪斯尼水城美食街</p>
        <p class="hyq">建邺区 | 15000m²</p>
        <p class="fj">附近地铁站</p>
        <p class="tian">2.5/m²/天</p>
      </figcaption>
    </figure>
     <figure class="syt">
      <img src="http://img1.912hf.com/uploads/crm/public/20191206/7d98c74558f96e2aac1574467a7ae1d0.jpg@!w200" alt="">
      <figcaption>
        <p class="yfc">迪斯尼水城美食街</p>
        <p class="hyq">建邺区 | 15000m²</p>
        <p class="fj">附近地铁站</p>
        <p class="tian">2.5/m²/天</p>
      </figcaption>
    </figure>
     <figure class="syt">
      <img src="http://img1.912hf.com/uploads/crm/public/20191206/7d98c74558f96e2aac1574467a7ae1d0.jpg@!w200" alt="">
      <figcaption>
        <p class="yfc">迪斯尼水城美食街</p>
        <p class="hyq">建邺区 | 15000m²</p>
        <p class="fj">附近地铁站</p>
        <p class="tian">2.5/m²/天</p>
      </figcaption>
    </figure>
     <figure class="syt">
      <img src="http://img1.912hf.com/uploads/crm/public/20191206/7d98c74558f96e2aac1574467a7ae1d0.jpg@!w200" alt="">
      <figcaption>
        <p class="yfc">迪斯尼水城美食街</p>
        <p class="hyq">建邺区 | 15000m²</p>
        <p class="fj">附近地铁站</p>
        <p class="tian">2.5/m²/天</p>
      </figcaption>
    </figure>
        </van-tab>
      </van-tabs>
    </div>
    <!-- <h1>商品入住</h1> -->
      <div class="zuixin">
         <p class="shang">品牌入驻</p>
         <div class="pin">
           <ul id="brand-list" style="transform:translate3d(0px,-6px,0px)">
             <li style="width:100%">
               <i></i>
               <span class="pin-one">爱不</span>
               <span class="pin-two">dddddddd</span>
             </li>
             <li>
               <i></i>
               <span class="pin-one">爱不</span>
               <span class="pin-two">dddddddd</span>
             </li>
             <li>
               <i></i>
               <span class="pin-one">爱不</span>
               <span class="pin-two">dddddddd</span>
             </li>
             <li>
               <i></i>
               <span class="pin-one">爱不</span>
               <span class="pin-two">dddddddd</span>
             </li>
             <li>
               <i></i>
               <span class="pin-one">爱不</span>
               <span class="pin-two">dddddddd</span>
             </li>
           </ul>
         </div>
      </div>
    <h1>商家选址</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      // images: [
      //   "https://baseimg.912hf.com/uploads/Poster/20190816/5896da6d776edf9da47de883075f257f.jpg",
      //   "https://baseimg.912hf.com/uploads/Poster/20190814/cefcd3b8de962c87a17b0b55ae8b8a54.jpg",
      //   "https://baseimg.912hf.com/uploads/Poster/20190620/053c82c40e152efe893fe7ac44071592.jpg"
      // ],
      active: ""
    };
  },
  methods: {
    onClick(name, title) {
      this.$toast(title);
    }
  },
 
};
</script>


<style lang="">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 轮播 */
.lun {
  height: 142px;
  padding: 0 0 10px 0;
}
.img {
  width: 100%;
  height: 100%;
  border-radius: 18px;
  padding: 0 15px;
}

/* 九宫格 */
.jiuimg {
  width: 50px;
  height: 55px;
  overflow-x: auto;
}
/* 精品 */
.news-container {
  width: 100%;
  height: 250px;
  position: relative;
  margin-bottom: 30px;
  padding: 0 15px;
  background:powderblue;
  background-size: 100% 160px;
  box-sizing: border-box;
}
.one {
  width: 100%;
  height: 2rem;
  display: flex;
  padding: 17px 0;
}
.one-one {
  width: 36px;
  height: 40px;
  color: white;
  margin-left: 20px;
}
.one-two {
  height: 40px;
  border: solid 1px;
  color: white;
  position: relative;
  padding-left: 13px;
  font-size: 14px;
  overflow: hidden;
}
.xia {
  width: 90%;
  height: 160px;
  border: solid 1px;
  position: absolute;
  top: 70px;
  left: 25px;
  background: white;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  margin-left: auto;
}

.jpimg {
  width: 45%;
  height: 70px;
  border-radius: 10px;
  margin-top: 20px;
}
/* 搜索 */
.sou {
  width: 100%;
  display: flex;
  height: 50px;
  padding: 20px 8px;
  margin-bottom:40px; 
}
.nj {
  width: 15%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
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

.van-field__control {
  font-size: 15px;
}
.van-icon-search {
  width: 20px;
  height: 20px;
}
/* 招商办 */
.zhao {
  width: 100%;
  height: 100px;
  background: url(
      https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=12956031403291504607&fm=26&gp=0.jpg
      
    )
    right 4px no-repeat;
  background-size: 18%;
}
.da {
  width: 90%;
  height: 200px;
  border: solid 1px gainsboro;
  border-radius: 10px;
  padding: 0 15px;
  box-sizing: border-box;
  margin: 0 auto;
  box-shadow: 0 0 10px gainsboro;
}
button {
  width: 100%;
  height: 30px;
  color: orange;
  background: white;
  border: none;
  font-size: 20px;
}
.zhao1 {
  width: 100%;
  height: 100px;
  background: url(
      https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3210732747,
      2015332957&fm=26&gp=0.jpg
    )
    right 4px no-repeat;
  background-size: 18%;
}
.xiao {
  font-size: 14px;
  font-weight: 300;
  padding: 10px 0;
}
.tu {
  width: 100%;
  box-sizing: border-box;
  padding: 30px 10px;
}
.tu img {
  width: 100%;
}
/* 商业中心 */
.shang {
  width: 100%;
  height: 30px;
  border: solid 5px white;
  border-left-color: orange;
  box-sizing: border-box;
}
.shang1 {
  width: 100%;
  height: 300px;
  display: flex;
  box-sizing: border-box;
  padding: 5px;
}
.shang1 img {
  width: 50%;
}
.shang2 img {
  width: 105%;
  padding: 0 10px;
}
.shang2 img:nth-child(2) {
  width: 105%;
  padding-top: 12px;
}
/* 最新上架 */
.zuixin {
  width: 100%;
  padding: 0 15px;
}
.syt {
  width: 100%;
  display: flex;
  padding-top: 20px;
}
.syt img {
  width: 100px;
  height: 80px;
  border-radius: 10px;
}
.syt figcaption {
  padding-left: 20px;
}
.hyq {
  color: #9b9b9b;
  font-size: 12px;
}
.fj {
  width: 80px;
  font-size: 13px;
  color: rgb(107, 154, 228);
  background: rgb(237, 246, 250);
  padding: 0px 5px;
  margin: 5px 0;
}
.tian {
  color: #ff7500;
  font-size: 13px;
}
.chakan{
  width: 50%;
  height: 30px;
  border-radius:10px;
  background: #f8f8f8;
  margin:20px 25%; 
  font-size: 16px;
  color:  #ff7500;
}
/* 品牌入驻 */
.pin{
  width: 100%;
  height: 144px;
  background: #f9f9f9;
  display: flex;
}
.pin-one{
  font-size: 13px;
  font-weight: 700;
}
.pin-two{
  font-size: 13px;
  font-weight: 500;
  color: #9b9b9b;
}
/* .pin i{
  width: 10px;
  height: 10px;
  display: block;
  margin: auto 9px auto 0;
  border-radius:3px;
  background: #60aefc; 
} */
</style>