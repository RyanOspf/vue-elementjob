<!--
	移动端轮播图：vue-awesome-swiper
	安装方法：https://www.npmjs.com/package/vue-awesome-swiper
	配置参考swiper4的配置，swiper3不适用了：http://www.swiper.com.cn/api/autoplay/autoplay.html
-->
<template>
  <div class="introCom">
		<div class="swiperBox">
			<!--
				在实例中获取mySwiper这个对象，用ref取名为mySwiper
				this.$refs.mySwiper
			-->
			 <swiper :options="swiperOption" ref="mySwiper">
				 <!-- slides -->
				 
				 <swiper-slide :key="index" v-for="(item,index) in luboImg">
				 		<img :src="item.desImg" :alt="item.describeName" />
				 </swiper-slide>
				 
				 <!--<swiper-slide>
				 	<img src="https://jobs-mobile.ele.me/static/img/bg-1.ca292e2.jpg" alt="" />
				 </swiper-slide>
				 <swiper-slide>
				 	<img src="https://jobs-mobile.ele.me/static/img/bg-1.ca292e2.jpg" alt="" />
				 </swiper-slide>
				 <swiper-slide>
				 	<img src="https://jobs-mobile.ele.me/static/img/bg-1.ca292e2.jpg" alt="" />
				 </swiper-slide>-->
				 
				 
				 <!-- Optional controls -->
				 <div class="swiper-pagination"  slot="pagination"></div>
    			 <!--<div class="swiper-button-prev" slot="button-prev"></div>
        		 <div class="swiper-button-next" slot="button-next"></div>-->
			</swiper>
		</div>
		<div class="content">
			<div>
				<h3>认识饿了么</h3>
				<h5>改变世界没有想象的那么难</h5>
				<img class="content-bigimage" src="https://jobs-mobile.ele.me/static/img/about-1-1.e255d31.jpg" alt="">
				<p>饿了么是中国专业的到家服务平台，2008 年创立于上海。饿了么成立至今，秉承客户中心、品质为王、自我驱动、团队协作、创新、诚信的价值观，致力推进中国餐饮业的数字化进程，让 7 亿城镇居民实现“美好生活，触手可得”。截止 2016 年 12 月，饿了么在线外卖交易平台已覆盖全国 1400 多个城市，用户量超过 1 亿，加盟餐厅 100 万家，日订单量突破 900 万单，平台上 99.5% 的交易额来自移动端。业绩持续高速增长的同时，公司员工也超过 15000 人。</p>
				<img class="content-bigimage" src="https://jobs-mobile.ele.me/static/img/about-1-2.e6a4d02.jpg" alt="">
				<p>饿了么正改变着人们的饮食消费习惯乃至生活方式，定义到家消费的未来，努力向广大城镇居民兑现“make everything 30’”的承诺。其在外卖交易平台、即时配送物流平台及供应链平台上的持续发力，正逐渐勾勒出万亿级别的到家服务生态体系。</p>
			</div>
		</div>
		<footer>
  		 ©2018 ele.me, all rights reserved 
  		</footer>
  </div>
</template>

<script>

import {swiper,swiperSlide} from 'vue-awesome-swiper';

export default {
	data() {
	   return {
	   	 luboImg:[
			  {
			    "describeName": "技术类",
			    "desImg": "https://jobs-mobile.ele.me/static/img/bg-1.ca292e2.jpg"
			  },
			  {
			    "describeName": "产品类",
			    "desImg": "https://jobs-mobile.ele.me/static/img/bg-2.b85becd.jpg"
			  },
			  {
			    "describeName": "设计类",
			    "desImg": "https://jobs-mobile.ele.me/static/img/bg-3.8b361bd.jpg"
			  },
			  {
			    "describeName": "市场类",
			    "desImg": "https://jobs-mobile.ele.me/static/img/bg-4.88cd77d.jpg"
			  },
			  {
			    "describeName": "职能类",
			    "desImg": "https://jobs-mobile.ele.me/static/img/bg-5.450e471.jpg"
			  },
			  {
			    "describeName": "物流类",
			    "desImg": "https://jobs-mobile.ele.me/static/img/bg-6.6145c7d.jpg"
			  },
			  {
			    "describeName": "客服类",
			    "desImg": "https://jobs-mobile.ele.me/static/img/bg-7.564817d.jpg"
			  }
			],
	     swiperOption: {
	       // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
	       notNextTick: true,
	       // swiper configs 所有的配置同swiper官方api配置
		   autoplay:{
		   		delay:2000,
		   		stopOnlastSlide:false,
		   		disableOnInteraction:false
		   },
	       loop:true,
	       effect:"coverflow",
	       pagination : {
	       	el:'.swiper-pagination'
	       },
	       observer:true,
		   observeParents:true,
//	       navigation: {
//		    nextEl: '.swiper-button-next',
//		    prevEl: '.swiper-button-prev',
//		  },
	       // swiper的各种回调函数也可以出现在这个对象中，和swiper4官方一样
		   on:{
//		   	slideChangeTransitionStart(){
//		   		console.log(this.activeIndex);
//		   	},
//			destroy: function(){
//		      console.log('你销毁了Swiper;');
//		   	}
		   }
	     }
	   }
	 },
	 computed:{
	 	swiper(){
	 		return this.$refs.mySwiper.swiper;
	 	}
	 },
	 beforeCreate(){
		this.$store.commit('loadingShow');
		if(this.$route.name === 'Introcom'){
			document.title = '北斗星招聘-公司介绍';
		}
	},
	created(){
		this.$store.commit('loadingHide');
	},
	mounted(){
		console.log(this.swiper);
	},
	components:{
		swiper,
		swiperSlide
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.introCom{
		/*padding: 60px 0;*/
		padding-top:60px;
    color:#333;
    background-color:#fff;
}
.swiper-slide{
	/*background-color:red;*/
	color:#fff;
}
.swiper-slide img{
	height:170px;
}

.content{
    margin-top: 10px;
    padding: 0 15px;
    font-size: 0;
    overflow: hidden;
}

.content h3{
    margin-top: 35px;
    font-size: 18px;
    color: #333;
    text-align: center;
    line-height: 1;
}

.content h5{
    margin-top: 10px;
    font-size: 12px;
    font-weight: 400;
    color: #999;
    text-align: center;
    line-height: 1;
}

.content p{
    margin-top: 15px;
    font-size: 12px;
    line-height: 20px;
    color: #999;
}

.content-bigimage{
    margin-top: 20px;
    width: 100%;
}
footer{
	background:#fff;
}
</style>
