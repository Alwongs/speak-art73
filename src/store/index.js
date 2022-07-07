import { createStore } from 'vuex'

export default createStore({
    getters: {
        isMenuActive(state) {
            return state.isMenuActive
        }
    },
    state: {
        isMenuActive: false
    },
    mutations: {
        TOGGLE_MENU(state) {
            state.isMenuActive = !state.isMenuActive
        }
    },
    actions: {
    },
    modules: {
    }
})
