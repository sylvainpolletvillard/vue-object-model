import Vue from 'vue'

import VueObjectModel from "../../../src/main.js";

import App from './App.vue'

Vue.use(VueObjectModel)

new Vue({
  el: '#app',
  render: h => h(App)
})
