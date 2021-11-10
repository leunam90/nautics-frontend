require("babel-core/register");
require("babel-polyfill");
import Vue from 'vue';
import App from './components/App.vue';
new Vue({
    render: h => h(App)
}).$mount('#app');