import Vue from 'vue';
import App from './app.vue';

const root = document.createElment('div');
document.body.appendChild(root);

new Vue({
    render: (h) => h(App)
}).$mount(root);