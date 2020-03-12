import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
 Vue.use(VueResource) 
export const bus = new Vue();

//Custom Directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  }
});

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if(binding.value == 'wide') {
      el.style.width = '95%';
    } else if (binding.value == 'narrow') {
      el.style.width = '500px';
    }else if (binding.value == 'medium') {
      el.style.width = '80%';
    }
    if (binding.arg == 'bgcolor') {
       el.style.backgroundColor = '#f7f7f7';
       el.style.padding = '20px';
    } 
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
