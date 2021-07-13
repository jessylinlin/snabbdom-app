import {
    init,
    h,
} from 'snabbdom'


const patch = init([])

/*
参数
 标签 + 选择器
 如果是字符串就是标签中的文本内容
*/
let vnode = h(
    'div#container',
    [
        h('h1', 'hello snabbdom'),
        h('p', 'nmslsb')
    ]
)
let app = document.querySelector("#app")

/*
    patch函数
    旧的vnode，可以为dom元素（会转换为vnode）
    新的vnode
    return 新的vnode
*/
let oldVnode = patch(app, vnode)

setTimeout(() => {
    vnode = h('div#container', [
        h('h1', 'hello sb'),
        h('p', 'hello mdzz')
    ])

    patch(oldVnode, vnode)
}, 2000)

setTimeout(() => {
    //清空
    patch(oldVnode, h('!'))
}, 4000)