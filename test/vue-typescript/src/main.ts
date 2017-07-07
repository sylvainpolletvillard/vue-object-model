import Vue from 'vue'
import VueExposeComponentNames from "vue-expose-component-names"
import VueObjectModel from "../../../src/main.js";

import App from './components/App.vue'

Vue.use(VueExposeComponentNames);
Vue.use(VueObjectModel);

new Vue({
	el: '#app',
	render: h => h(App)
});