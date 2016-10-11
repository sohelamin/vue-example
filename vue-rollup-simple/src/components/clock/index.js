import template from './template.html'
import './style.css'

export default {
    template: template,
    data () {
        return { time: "00:00:00" }
    },
    mounted () {
        this.startTime()
    },
    methods: {
        startTime () {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = this.checkTime(m);
            s = this.checkTime(s);

            this.time = h + ":" + m + ":" + s;
            var t = setTimeout(this.startTime, 500);
        },
        checkTime (i) {
            if (i < 10) {i = "0" + i};
            return i;
        }
    }
}