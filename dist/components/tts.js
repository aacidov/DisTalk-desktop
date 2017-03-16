





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


if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"tts\">\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-3914ceb5", module.exports)
  } else {
    hotAPI.update("_v-3914ceb5", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}