Vue.createApp({
    data() {
        return {
            classes: '',
            color: '',
            styles: {
                user1: false,
                user2: false,
                visible: true,
                hidden: false
            }
        }
    },
    methods: {
        toggle() {
            this.styles['visible'] = !this.styles['visible'];
            this.styles['hidden'] = !this.styles['hidden'];
        },
        classentered() {
            if (this.classes == 'user1' || this.classes == 'user2') {
                this.styles['user1'] = this.classes === 'user1';
                this.styles['user2'] = this.classes === 'user2';
            } else {
                alert('WRONG INPUT');
            }
        },
    },
}).mount('#assignment');