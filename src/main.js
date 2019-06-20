// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// mint-ui
import { Header,Button,Swipe, SwipeItem } from 'mint-ui';
// import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// MUI
// import "./dist/js/mui.min.js"
import "./dist/css/mui.min.css"
import "./dist/css/icons-extra.css"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
