<script>
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

</script>