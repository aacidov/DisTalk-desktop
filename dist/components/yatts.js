
var
    tts;
setTimeout(() => {
    ya.speechkit.settings.apikey = 'ec3fa132-a743-46e8-a372-e15ca1eb7a46';

    tts = new ya.speechkit.Tts(
        {
            speaker: 'jane'
        }
    )
}, 500);


module.exports = function speak(text) {
    tts.speak(text);
}


if (module.exports.__esModule) module.exports = module.exports.default
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-22cb042d", module.exports)
  } else {
    hotAPI.update("_v-22cb042d", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}