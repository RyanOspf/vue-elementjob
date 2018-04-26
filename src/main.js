import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper);

import '@/assets/css/app.css';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.urlLink = 'https://www.easy-mock.com/mock/5a409adbe817121d56a3a660/example/';

new Vue({
	el:"#app",
	router,
	store,
	template:'<App />',
	components:{
		App
	}
})
