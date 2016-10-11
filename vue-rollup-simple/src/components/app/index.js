import Clock from './../clock/index.js'

import template from './template.html'
import './style.css'

export default {
    template: template,
    data () {
        return {
            msg: 'Welcome to Vue.js World!'
        }
    },
    components: {
        Clock
    }
}