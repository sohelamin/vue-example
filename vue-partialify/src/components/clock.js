require('insert-css')(require('./clock.css'))

module.exports = {
    template: require('./clock.html'),
    data () {
        return { time: "00:00:00" }
    },
    ready () {
        this.startTime()
    },
    methods: {
        startTime: function () {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = this.checkTime(m);
            s = this.checkTime(s);

            this.time = h + ":" + m + ":" + s;
            var t = setTimeout(this.startTime, 500);
        },
        checkTime: function (i) {
            if (i < 10) {i = "0" + i};
            return i;
        }
    }
}
