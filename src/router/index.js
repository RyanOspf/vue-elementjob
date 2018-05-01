import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//import list from '@/components/list';
//import jobtitle from '@/components/jobTitle';
//import jobdes from '@/components/jobDes';
//import introCom from '@/components/introCom';

/*
利用webpack实现懒加载，把不同路由对应的组件分割成不同的代码块，
然后当路由被访问的时候才加载对应的组件
*/

/*
webpack代码分割功能
require.ensure代码分块 （chunk名字是可选的）
	require.ensure(依赖,回调函数,[chunk名字])

import 函数
*/

/*
//require.ensure代码分块 写法
let list = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('@/components/list'));
	})
}

let jobtitle = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('@/components/jobTitle'));
	})
}

//chunk就是将一起的组件可以打包成一个js文件
//下面的abc就是起的chunk名字，将相同的chunk名字打包成一个js文件
let jobdes = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('@/components/jobDes'));
	},'abc')
}

let introCom = (resolve)=>{
	return require.ensure([],()=>{
		resolve(require('@/components/introCom'));
	},'abc')
}
*/

//import 函数写法实现代码分块     (不支持chunk将多个组件打包成一个js文件)
let list = (resolve)=>{
	return import('@/components/list');
}

let jobtitle = (resolve)=>{
	return import('@/components/jobTitle');
}

let jobdes = (resolve)=>{
	return import('@/components/jobDes');
}

let introCom = (resolve)=>{
	return import('@/components/introCom');
}


let router = new VueRouter({
	mode:'history',
	scrollBehavior(to,from,savedPosition){
		if(savedPosition){
			return savedPosition;
		}else{
			return {x:0,y:0}
		}
	},
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
