var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n    .btn{\n        width:200px;\n        height: 200px;\n        border: 1px solid black;\n        text-align: center;\n        display: inline-block;\n        cursor: pointer;\n        margin: 4px;\n    }\n\n.btn-image{\n    width: 140px;\n    height: 140px;\n}\n\n")



























const Path = require('path');
const fs = require('fs');

const {remote} = require('electron')
const {Menu, MenuItem} = remote

var Dialogs = require('../dialogs');

    module.exports = {
        props:['src', 'title', 'file'],
        data: function(){
            return{
            };
        },
        methods:{
            buttonClick: function(){
            this.$events.emit('btn-clicked', this.title)
            },
            contextClick: function(e){
                  e.preventDefault()
this.menu.popup(remote.getCurrentWindow())
            }
        },
        mounted(){

const menu = this.menu = new Menu()
menu.append(new MenuItem({label: 'Переименовать', click:()=> { 
    Dialogs.prompt("Введите новое название:", this.title, (title)=>{
        if (title===undefined) return; 
            fs.rename(this.file, Path.dirname(this.file)+Path.sep+title+Path.extname(this.file), (err)=>{
                if (err) return this.$events.emit('error', err);
                this.$events.emit('imagesUpdate');
                                
            } )
        
    })
 }}))
menu.append(new MenuItem({label: 'Удалить', click:()=>{
  
    Dialogs.confirm(`Удалить "${this.title}"`, res=>{
        if(!res) return ;
        fs.unlink(this.file, (err)=>{
            if (err) return this.$events.emit('error', err);
            this.$events.emit('imagesUpdate');
        }) 
    })
}}))
        }
    }

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"btn border\" @click=\"buttonClick\" @contextmenu=\"contextClick\">\n    <h4 class=\"btn-title\">{{title}}</h4> \n    <img :src=\"src\" :alt=\"title\" class=\"btn-image\">\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n    .btn{\n        width:200px;\n        height: 200px;\n        border: 1px solid black;\n        text-align: center;\n        display: inline-block;\n        cursor: pointer;\n        margin: 4px;\n    }\n\n.btn-image{\n    width: 140px;\n    height: 140px;\n}\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-fec3a2c4", module.exports)
  } else {
    hotAPI.update("_v-fec3a2c4", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}