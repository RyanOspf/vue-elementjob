import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import list from '@/components/list';
import jobtitle from '@/components/jobTitle';
import jobdes from '@/components/jobDes';
import introCom from '@/components/introCom';

let router = new VueRouter({
//	mode:'history',
//	scrollBehavior(to,from,savedPosition){
//		if(savedPosition){
//			return savedPosition;
//		}else{
//			return {x:0,y:0}
//		}
//	},
	routes:[
		{
			path:'/',
			name:'List',
			component:list
		},
		{
			path:'/jobtitle/:id?',
			name:'Jobtitle',
			component:jobtitle
		},
		{
			path:'/jobdes',
			name:'JobDes',
			component:jobdes
		},
		{
			path:'/introCom',
			name:"Introcom",
			component:introCom
		}
	]
})

export default router;
