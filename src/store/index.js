import Vue from "vue"
    // 4-2、载入 n
        import Vuex from "vuex"
    // 4-3、使用 vuex
        Vue.use(Vuex)
    // 4-4、创建 store
        const store=new Vuex.Store({
            // 共享状态
                state:{},
            // 方法(可以是异步)
                actions:{},
            // 唯一可以改变state 的方法 （必须是同步的）
                mutations:{},
            // 相当于 vue中的计算属性
                getters:{}
        })
    // 4-5、导出 store
        export default store;
