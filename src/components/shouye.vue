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
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.img" class="img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
    <van-grid :border="false" :column-num="5" :gutter="0">
      <van-grid-item class="jiu" v-for="(v,i) in jggimg" :key="i">
        <van-image
          class="jiuimg"
          :src="v.img"
        />{{v.text}}
      </van-grid-item>
    </van-grid>
    <!-- 轮播2 -->
   <van-swipe :loop="false" :width="100" :height="100" >
  <van-swipe-item v-for="(v,i) in lunbo" :key="i" class="lun2">
     <van-image
          class="jiuimg"
          :src="v.img"
          
        />
        <p>{{v.text}}</p>
  </van-swipe-item>
  <!-- <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item> -->
</van-swipe>
    <!-- 精品咨询 -->
    <div class="news-container">
      <div class="one">
        <div class="one-one">精品咨询</div>
        <div class="one-two">
        <li class="text1">案犯开<i class="i">顶顶大萨达顶顶</i></li>
        <li class="text1">案犯开<i class="i">顶顶大萨达顶顶</i></li>
        <li class="text1">案犯开<i class="i">顶顶大萨达顶顶</i></li>
        <li class="text1">案犯开<i class="i">顶顶大萨达顶顶</i></li>
        <li class="text1">案犯开<i class="i">顶顶大萨达顶顶</i></li>
        <li class="text1">案犯开<i class="i">顶顶大萨达顶顶</i></li>
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
    <van-tabs @click="zsb" class="da">
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
        <van-tab title="商业体" >
          <figure class="syt" v-for="(v,i) in zxsj" :key="i">
            <img
              :src="v.img"
              alt
            />
            <figcaption>
              <p class="yfc">{{v.name}}</p>
              <p class="hyq">{{v.qu}}</p>
              <p class="fj">{{v.fujin}}</p>
              <p class="tian">{{v.jiage}}</p>
            </figcaption>
          </figure>
          
          <button class="chakan">查看更多</button>
        </van-tab>
        <van-tab title="商铺">
           <figure class="syt" v-for="(v,i) in zxsj" :key="i">
            <img
              :src="v.img"
              alt
            />
            <figcaption>
              <p class="yfc">{{v.name}}</p>
              <p class="hyq">{{v.qu}}</p>
              <p class="fj">{{v.fujin}}</p>
              <p class="tian">{{v.jiage}}</p>
            </figcaption>
          </figure>
          
        </van-tab>
        <van-tab title="写字楼">
           <figure class="syt" v-for="(v,i) in zxsj" :key="i">
            <img
              :src="v.img"
              alt
            />
            <figcaption>
              <p class="yfc">{{v.name}}</p>
              <p class="hyq">{{v.qu}}</p>
              <p class="fj">{{v.fujin}}</p>
              <p class="tian">{{v.jiage}}</p>
            </figcaption>
          </figure>
           
        </van-tab>
      </van-tabs>
    </div>
    <!-- <h1>商品入住</h1> -->
         <p class="shang">最新上架</p>

    <div class="shangjia">
      <div class="updg">
         <li class="text">案犯开<i class="i">顶顶大萨达顶顶</i></li>
         <li class="text">案犯开<i class="i">顶顶大萨达顶顶</i></li>
         <li class="text">案犯开<i class="i">顶顶大萨达顶顶</i></li>
         <li class="text">案犯开<i class="i">顶顶大萨达顶顶</i></li>
         <li class="text">案犯开<i class="i">顶顶大萨达顶顶</i></li>
         <li class="text">案犯开<i class="i">顶顶大萨达顶顶</i></li>
         <li class="text">案犯开<i class="i">顶顶大萨达顶顶</i></li>
         <li class="text">案犯开<i class="i">顶顶大萨达顶顶</i></li>
         <li class="text">案犯开<i class="i">顶顶大萨达顶顶</i></li>
         <li class="text">案犯开<i class="i">顶顶大萨达顶顶</i></li>
         <li class="text">案犯开<i class="i">顶顶大萨达顶顶</i></li>
        
      </div>
    </div>
      
    <!-- <h1>商家选址</h1> -->
     <p class="shang">商家选址</p>
     <div class="xuanzhi">
       <figure>
         <van-icon name="checked" size="55" />
         <figcaption>发达的</figcaption>
       </figure>
       <figure>
         <van-icon name="checked" size="55" />
         <figcaption>发达的</figcaption>
       </figure>
       <figure>
         <van-icon name="checked" size="55" />
         <figcaption>发达的</figcaption>
       </figure>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      images: [],
      active: "",
      jggimg:[],
      lunbo:[],
      zxsj:[]
    };
  },
  methods: {
    zsb(){

    },
    onClick(name, title) {
      this.axios.get('/zxsjs',{
        params:{
          index:name
        }
      }).then(res=>{
        console.log(res.data)
        this.zxsj=res.data.info.syt
      })
    }
  },
   mounted() {
     //轮播图
     this.axios.get('/lunjius').then(res=>{
      this.images=res.data.info
    })
    //九宫格
    this.axios.get('/jiugongs').then(res=>{
      this.jggimg=res.data.info
    })
    //轮播2
    this.axios.get('/lunbos').then(res=>{
      this.lunbo=res.data.info
    })
    
  },
};
</script>


<style lang="">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.shouye{
  width: 100%;
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
/* 轮播2 */
.lun2{
  text-align: center;
}
/* 精品 */
.text1{
  animation: myMove 10s linear infinite;
    animation-fill-mode: forwards;
    overflow: hidden;
    font-size: 13px;
    color:white
}
.one-two{
      height: 30px;
      /* border: solid 1px; */
    /* animation: myMove 5s linear infinite; */
     overflow: hidden;
     margin: 0 20px;

}

.shangjia{
  width: 90%;
  height: 144px;
  /* border: solid 1px; */
  margin: 15px auto;
  height: 140px;
  background: #f9f9f9;
   box-sizing: border-box;
}
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
  box-sizing: border-box;
}
.one-one {
  width: 36px;
  height: 40px;
  color: white;
  margin-left: 20px;
  box-sizing: border-box;
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
  box-sizing: border-box;
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
   box-sizing: border-box;
}
.nj {
  width: 15%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
   box-sizing: border-box;
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
   box-sizing: border-box;
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
  background: url(http://img2.imgtn.bdimg.com/it/u=1993323374,966927966&fm=26&gp=0.jpg) right 4px no-repeat;
  background-size: 25%;
   /* box-sizing: border-box; */
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
   box-sizing: border-box;
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
  background: url(http://img5.imgtn.bdimg.com/it/u=1991949725,3370560052&fm=26&gp=0.jpg)
    right 4px no-repeat;
  background-size: 18%;
}
.xiao {
  font-size: 14px;
  font-weight: 300;
  padding: 10px 0;
   box-sizing: border-box;
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
  width: 95%;
  height: 30px;
  border: solid 5px white;
  border-left-color: orange;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 5px;
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
/* .zuixin {
  width: 100%;
  padding: 0 15px;
} */
.syt {
  width: 95%;
  display: flex;
  padding-top: 15px;
margin:0 auto;
border-bottom: solid 1px #f2f2f2;
}
.syt img {
  width: 100px;
  height: 80px;
  border-radius: 10px;
  padding: 5px 0;
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
   box-sizing: border-box;
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

/*.商品入住文字上下滚动*/

.updg{
      width: 100%;
      height: 140px;
      /* border: solid 1px; */
    /* animation: myMove 5s linear infinite; */
     overflow: hidden;
     margin: 0 20px;

}
.text{
  animation: myMove 10s linear infinite;
    animation-fill-mode: forwards;
    overflow: hidden;
    
}
@keyframes myMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100px);
  }
}
.shangjia{
  width: 90%;
  height: 144px;
  /* border: solid 1px; */
  margin: 15px auto;
  height: 140px;
  background: #f9f9f9;
   box-sizing: border-box;
}
.i{
  font-size: 5px;
}
/* 商家选址 */
.xuanzhi{
  width: 90%;
  height: 100px;
  border: solid 1px;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
   box-sizing: border-box;
}
</style>