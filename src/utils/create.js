// 1.创建传入组件实例
// 2.挂载它从而生成dom结构
// 3.生成dom结构追加到body
// 4.淘汰机制：不需要时组件实例应当被销毁
import Vue from 'vue'
import Notice from '@/components/Notice'

export default function create(props) {
    // 1.创建传入组件实例
    const Ctor = Vue.extend(Notice) //获取构造函数
    const comp = new Ctor({propsData: props})
    comp.$mount();
    document.body.appendChild(comp.$el)
    comp.remove = () => {
        // 移除dom
        document.body.removeChild(comp.$el)
        // 销毁组件
        comp.$destroy();
    }

    // const vm = new Vue({
    //     render(h) { // h即是createElement(tag, data, children)
    //         // 返回虚拟dom
    //         return h(Component, {props})
    //     }
    // }).$mount(); // 只挂载，不设置宿主，意思是执行初始化过程，但是没有追加dom操作

    // document.body.appendChild(vm.$el)

    // // 获取组件实例
    // const comp = vm.$children[0];
    // 附加一个删除方法
    // comp.remove = () => {
    //     // 移除dom
    //     document.body.removeChild(vm.$el)
    //     // 销毁组件
    //     vm.$destroy();
    // }
    return comp;
}