<template>
    <div class="btn border" @click="buttonClick" @contextmenu="contextClick">
        <h4 class="btn-title">{{title}}</h4> 
        <img :src="src" :alt="title" class="btn-image" >
    </div>
</template>

<style>
    .btn{
        width:200px;
        height: 200px;
        border: 1px solid black;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        margin: 4px;
    }

.btn-image{
    width: 140px;
    height: 140px;
}

</style>

<script>

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
</script>