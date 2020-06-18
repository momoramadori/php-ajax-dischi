const $ = require('jquery');
//BONUS: aggiungere una select con i nomi degli artisti che fungerà da filtro: quando viene selezionato un artista, recuperare gli album appropriati tramite una chiamata ajax

$('select').change(function(){
    $('.card').hide();
    $('.card').each(function(){
        if ($(this).find('.author').attr('data') == $('select').val()) {
            $(this).show();
        }
    })
    if ($(this).val() == 'none') {
        $('.card').show();
    }
})