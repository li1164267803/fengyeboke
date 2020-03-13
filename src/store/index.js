import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import background from './background'
let store = new Vuex.Store({
	modules:{
		background
	}
})
export default store;