import Vue from 'vue'
import App from './App.vue'
import { Button,Container, Header, Aside, Main, Row, Col, Menu, MenuItem, MenuItemGroup, Submenu, DropdownItem, DropdownMenu, Dropdown, Form, Input, FormItem } from 'element-ui'
import router from './router'
import http from 'axios'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dropdown)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.prototype.$http = http
// http.defaults.baseURL = 'http://127.0.0.1:8080/' //作用是每次发送请求都会带一个/api的前缀
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
