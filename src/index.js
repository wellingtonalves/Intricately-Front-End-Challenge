import 'Styles/main.scss';
import Vue from 'vue';
import router from './routes/router';
import App from './App.vue';
import store from './store/store';

const _ = require('lodash');

require('./directives/directives.js');

new Vue({
    router,
    render: createElement => createElement(App),
    store,
    el: '#app'
});
