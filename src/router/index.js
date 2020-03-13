import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const index = ()=>import("@/pages/index")
export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
    	path:'*',
    	redirect: '/index'
    }
  ]
})
