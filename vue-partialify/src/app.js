require('insert-css')(require('./app.css'))

module.exports = {
    template: require('./app.html'),
    data () {
        return {
            msg: 'Welcome to VueJs World!'
        }
    },
    components: {
        clock: require('./components/clock')
    }
}
