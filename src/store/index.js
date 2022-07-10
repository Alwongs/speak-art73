import { createStore } from 'vuex'
import slider from './modules/slider.js'
import app from './modules/app.js'

export default createStore({

    modules: {
        app,
        slider
    }
})
