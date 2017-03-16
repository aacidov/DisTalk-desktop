






    var fs = require('fs')
    var Path = require('path');
    const remote = electron.remote
const mainProcess = remote.require('./index')

    module.exports = {
        data:function(){return {
				buttons:[
				
				],
            directory:__dirname+"/../assets/img/default/"}},
        components:{
            btn:require('./btn')
        },
        methods:{
            selectDirectory(){
                mainProcess.selectDirectory((e)=>{
                    this.directory = e[0];
                    this.loadDirectory();
                });
            },
            loadDirectory(){

                    fs.readdir(this.directory, (error,files)=>{
                        if (error) return this.$events.emit('error', error);
                        files = files.map((file)=>{return this.directory+"/"+file})
                        this.buttons = files.map(file=>{
                            var base = Path.basename( file);
                            return {src:file, title:base.slice(0,base.indexOf('.')), file};
                        })
                     })
            }
            
        },
        mounted(){
                    this.loadDirectory();
            
            this.$events.listen('chooseDir', this.selectDirectory);
            this.$events.listen('imagesUpdate', this.loadDirectory);
            
        document.ondragover = () => {
            return false;
        };

        document.ondragleave = () => {
            return false;
        };

        document.ondragend = () => {
            return false;
        };
        var self = this;
            document.ondrop = (e) => {
            e.preventDefault();

            for (let f of e.dataTransfer.files) {
                fs.readFile(f.path, function (error, file) {
                        if (error) return this.$events.emit('error', error);
                        fs.writeFile(self.directory+'/'+Path.basename(f.path), function(error){
                            if (error) return this.$events.emit('error', error);
                                self.loadDirectory();                        
                        })
                })
            }
            
            return false;
        };
        }

    };

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"grid\">\n    <btn v-for=\"button in buttons\" :src=\"button.src\" :title=\"button.title\" :file=\"button.file\"> </btn>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-2b111474", module.exports)
  } else {
    hotAPI.update("_v-2b111474", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}