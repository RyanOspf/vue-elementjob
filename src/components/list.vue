<template>
  <div class="listPage">
  	<div class="contain">
  		<ul>
  			
  			<router-link 
  				tag="li" 
  				:to = "{path:'/jobtitle/'+item.listId}"
  				v-bind:style="{backgroundImage:'url('+item.desImg+')'}" 
  				v-for="(item,index) in list" 
  				:key="item.index"
  			>
  				<div>
  					<h4>{{ item.describeName }}</h4>
  					<p>{{ item.describeText }}</p>
  				</div>
  			</router-link>
  			
  			<!--<li v-bind:style="{backgroundImage:'url('+item.desImg+')'}" v-for="item in list" :key="item.id" >
  				<div>
  					<h4>{{ item.describeName }}</h4>
  					<p>{{ item.describeText }}</p>
  				</div>
  			</li>-->
  			<!--<li>
  				<div>
  					<h4>技术类</h4>
  					<p>国内顶尖的技术团队</p>
  				</div>
  			</li>
  			<li>
  				<div>
  					<h4>技术类</h4>
  					<p>国内顶尖的技术团队</p>
  				</div>
  			</li>
  			<li>
  				<div>
  					<h4>技术类</h4>
  					<p>国内顶尖的技术团队</p>
  				</div>
  			</li>
  			<li>
  				<div>
  					<h4>技术类</h4>
  					<p>国内顶尖的技术团队</p>
  				</div>
  			</li>
  			<li>
  				<div>
  					<h4>技术类</h4>
  					<p>国内顶尖的技术团队</p>
  				</div>
  			</li>
  			<li>
  				<div>
  					<h4>技术类</h4>
  					<p>国内顶尖的技术团队</p>
  				</div>
  			</li>-->
  		</ul>
  	</div>
  	<footer>
  		 ©2018 ele.me, all rights reserved 
  	</footer>
  </div>
</template>

<script>

import axios from 'axios';

export default {
	data(){
		return {
			list:[]
		}
	},
	watch:{
		$route(){
			console.log(111);
		}
	},
	beforeCreate:function(){
		this.$store.commit('loadingShow');
		if(this.$route.name === 'List'){
			document.title = '北斗星招聘-首页';
		}
	},
	created:function(){
		this.$http.get(this.urlLink+'listPage#!method=get').then((res)=>{
//			console.log(res);
				this.list = res.data;
				this.$store.commit('loadingHide');
		}).catch((error)=>{
			console.log(error);
		});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
