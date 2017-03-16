<template>
    <div class="tts">
    </div>
</template>

<script>
    var settings = require('./settings')
    var say = require('say')
    var yatts = require('./yatts');
    module.exports = {
        data: function () {
            return {
                onlinetts: true
            }
        },
        methods: {
            handleClick: function (e) {
                if (settings.store.ttsOffline) {
                    say.speak(e);
                    return;
                }
                yatts(e);
            }
        },
        mounted() {

            this.$events.listen('btn-clicked', this.handleClick);
        }
    }

</script>