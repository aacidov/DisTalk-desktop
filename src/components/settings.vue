<template>
    <div class="settings">
        
        <form class="settings-menu border" v-show="settingsShow" transition="switch">
            <h1>Настройки</h1>

            <input type="checkbox" id='chboxonline' v-model="ttsOffline"> <label for="chboxonline"> Использовать системный синтезатор (работает не всегда)</label>            <br>
            <input type="button" value="Выбрать папку с картинками" @click="chooseDirButton"></input>
        </form>
        <div class="settings-show-button" @click="settingsShow = !settingsShow"></div>

    </div>
</template>

<script>
    var store = {
                ttsOffline: true,
                settingsShow: true
            };
    module.exports = {
        data: function () {
            return store;
        },
        methods:{
            chooseDirButton:function(){
                
                this.$events.emit("chooseDir")
            }
        }
    };
    module.exports.store = store;

</script>

<style>
    .settings >* {
        position: fixed;
        right: 0;
        bottom: 0;
    }
    .settings-menu{
        width:500px;
        height: 300px;
        border: 1px solid black;
        border-radius: 1px;
        background: white;
                
    }
    .settings-show-button{
        width:25px;
        height: 25px;
            background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M19.43%2012.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49%201c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46%202.18%2014.25%202%2014%202h-4c-.25%200-.46.18-.49.42l-.38%202.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49%200-.61.22l-2%203.46c-.13.22-.07.49.12.64l2.11%201.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11%201.65c-.19.15-.24.42-.12.64l2%203.46c.12.22.39.3.61.22l2.49-1c.52.4%201.08.73%201.69.98l.38%202.65c.03.24.24.42.49.42h4c.25%200%20.46-.18.49-.42l.38-2.65c.61-.25%201.17-.59%201.69-.98l2.49%201c.23.09.49%200%20.61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12%2015.5c-1.93%200-3.5-1.57-3.5-3.5s1.57-3.5%203.5-3.5%203.5%201.57%203.5%203.5-1.57%203.5-3.5%203.5z%22%2F%3E%3C%2Fsvg%3E');
        border-radius: 50%;
        cursor: pointer;
    }
</style>