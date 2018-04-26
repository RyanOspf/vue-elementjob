import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
	state:{
		loadingStatus:true
	},
	mutations:{
		loadingShow(state){
			state.loadingStatus = true;
		},
		loadingHide(state){
			state.loadingStatus = false;
		}
	}
})

export default store;

