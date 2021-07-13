import {
    init,
    h,
    styleModule,
    eventListenersModule
} from 'snabbdom'

//导入模块

//注册模块
const patch = init([
    styleModule,
    eventListenersModule
])
//使用h（）第二个参数 传入模块中使用的数据{}

let vnode = h('div', [
    h('h1', { style: { backgroundColor: 'red' } }, 'hello sb'),
    h('p', { on: { click: () => { eventHandler() } } }, 'mdzz')
])

function eventHandler() {
    console.log('傻逼是你')
}

let app = document.querySelector("#app")
patch(app, vnode)