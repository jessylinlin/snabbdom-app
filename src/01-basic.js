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
let vnode = h('div#container.cls', {
    hook: {
        init(vnode) {
            console.log(vnode.elm)
        },
        create(emptyNode, vnode) {
            console.log(vnode.elm)
        }
    }
}, 'hello snabbdom')
let app = document.querySelector("#app")

/*
    patch函数
    旧的vnode，可以为dom元素（会转换为vnode）
    新的vnode
    return 新的vnode
*/
let oldVnode = patch(app, vnode);

vnode = h('div#container.sb', 'hello snabbdom patch')
patch(oldVnode, vnode)