// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
Vue.prototype.$store = store

import {Local} from './utils/public'
Vue.prototype.$local = Local
if(Local.get('bjImg')){
	store.state.background.bjImg = Local.get('bjImg');
}
if(Local.get('bjColor')){
	store.state.background.bjColor = Local.get('bjColor');
}

import Api from './utils/api'
Vue.prototype.$api = Api



import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import {Row,Col,Menu,MenuItem,Input,Button,Submenu,RadioGroup,RadioButton,Image,Pagination,Loading,Message} from 'element-ui';
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Submenu);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Image);
Vue.use(Pagination);
Vue.use(Loading);
Vue.prototype.$message = Message;

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
