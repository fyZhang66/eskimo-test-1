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

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
//单元测试

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
}

{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    button.$mount("#test")
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    button.$el.remove()
}
{
    //mock
    const Constructor = Vue.extend(Button)
    const gbutton = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    gbutton.$mount()
    let spy = chai.spy(function(){})
    gbutton.$on('click', spy)
    let button = gbutton.$el
    button.click()
    expect(spy).to.have.been.called()
}