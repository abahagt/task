<template>
    <div class="alert alert-flash" :class="[alertType]" role="alert" v-show="show" v-html="body">
    </div>
</template>

<script>
    export default {
        name: 'flash',
        props: [
            'message',
            'type'
        ],
        data() {
            return {
                body: '',
                alertType: 'alert-success',
                show: false
            };
        },
        created() {
            if (this.message) {
                this.flash(this.message, this.type);
            }

            window.events.$on('flash', (message, type) => {
                this.flash(message, type);
            });
        },
        methods: {
            flash(message, type = 'success') {
                this.body = message;
                this.alertType = 'alert-' + type;
                this.show = true;

                this.hide();
            },

            hide() {
                setTimeout(() => {
                    this.show = false;
                }, 5000);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .alert-flash {
        position: fixed;
        right: 25px;
        bottom: 25px;
    }
</style>

