<template>
  <div class="jobtitle">
  	<div class="jobox">
  		<ul v-show="ifHaveDate">
  			<router-link :to="{path:'/jobdes',query:{'jobid':item.jobid}}" tag="li" class="joblist" v-for="(item,index) in titleDes" :key="index">
  				<p class="joblist-name">
	  			 	<span class="joblist-title">{{ item.jobtitle }}</span>
	  			 	<span class="joblist-hot" v-show="item.jobhot">HOT</span>
	  			 </p>
	  			 <p class="joblist-city">{{ item.jobcity }}</p>
	  			 <p class="joblist-addition">
	  			 	<span class="joblist-time">发布时间: {{ item.jobtime }}</span>
	  			 </p>
  			</router-link>
  			
  			<!--<li class="joblist" v-for="(item,index) in titleDes" :key="index">
	  			 <p class="joblist-name">
	  			 	<span class="joblist-title">{{ item.jobtitle }}</span>
	  			 	<span class="joblist-hot" v-show="item.jobhot">HOT</span>
	  			 </p>
	  			 <p class="joblist-city">{{ item.jobcity }}</p>
	  			 <p class="joblist-addition">
	  			 	<span class="joblist-time">发布时间: {{ item.jobtime }}</span>
	  			 </p>
	  		</li>-->
	  		<!--<li class="joblist">
	  			 <p class="joblist-name">
	  			 	<span class="joblist-title">技术产品经理（Technical Product Manager）</span>
	  			 	<span class="joblist-hot">HOT</span>
	  			 </p>
	  			 <p class="joblist-city">上海</p>
	  			 <p class="joblist-addition">
	  			 	<span class="joblist-time">发布时间: 2017-03-27</span>
	  			 </p>
	  		</li>-->
  		</ul>
  		<p class="void-note" :class="{'void-note-active':!ifHaveDate}">没有找到相应的岗位哦！</p>
  </div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			titleDes:[],
			ifHaveDate:true
		}
	},
	beforeCreate(){
		this.$store.commit('loadingShow');
		if(this.$route.name === 'Jobtitle'){
			document.title = '北斗星招聘-职位';
		}
	},
	created(){
		this.getTitle();
	},
	watch:{
		$route(){
			this.getTitle();
		}
	},
	methods:{
		getTitle(){
				this.$http.get(this.urlLink+'jobtitle#!method=get').then((res)=>{

				this.$store.commit('loadingHide');
				
				if(this.$route.params.id == undefined){
					this.titleDes = [];
					this.ifHaveDate = false;
				}else{
						if(parseInt(this.$route.params.id)>res.data.length){
							this.titleDes = [];
							this.ifHaveDate = false;
						}else{
							if(res.data[this.$route.params.id - 1].length){
								this.ifHaveDate = true;
								this.titleDes = res.data[this.$route.params.id - 1];
							}else{
								this.titleDes = [];
								this.ifHaveDate = false;
							}
						}
				}
				
			}).catch((error)=>{
				console.log(error);
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
