import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';



import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);




import PostsComponent from './Pages/PostsComponents.vue';

const routes = [
  {
    path: '/posts',
    name: 'PostsComponent',
    component: PostsComponent
  },
  // {
  //   path: '/users',
  //   name: 'Users',
  //   component: Posts
  // }
];

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
