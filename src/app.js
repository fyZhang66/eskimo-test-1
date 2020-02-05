import Vue from 'vue';
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('f-button', Button)
Vue.component('f-icon', Icon)
Vue.component('f-button-group', ButtonGroup)

new Vue({
    el: "#app",
    data:{
        loading1: false,
        loading2: false,
        loading3: false
    }
})