




var Dialogs = require('../dialogs');
    module.exports = {
        mounted(){
            this.$events.listen('error', function(e){
                console.error(e)
                var message = "Произошла неизвестная ошибка, попробуйте перезапустить программу";

                Dialogs.alert(message); 
            })
        }
    }


if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-010389ca", module.exports)
  } else {
    hotAPI.update("_v-010389ca", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}