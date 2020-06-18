const $ = require('jquery');
const Handlebars = require("handlebars");

$(document).ready(function(){
    const url = 'http://localhost:8888/Boolean/php-exercises/Giugno/17-06/php-ajax-dischi/public/database/dischiajax.php'
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    $.ajax({
        'url': url,
        'method':'GET',
        'success': function(data) {
            var dataParsed = JSON.parse(data);
            //ciclo i dati per generare tutti i dischi
            for (let index = 0; index < dataParsed.length; index++) {
                var disco = dataParsed[index];
                //con handlebar genero le card
                handleTemplate(disco);
                //popolo la select
                if ($('option').val() != disco.author) {
                    $('select').append('<option val ="'+ disco.author +'">' + disco.author + '</option>');
                }
            }
        },
        'error': function() {
            console.log('errore');
        }
    })

    //BONUS: aggiungere una select con i nomi degli artisti che fungerà da filtro: quando viene selezionato un artista, recuperare gli album appropriati tramite una chiamata ajax

    $('select').change(function(){
        $.ajax({
            'url': url,
            'method':'GET',
            'success': function(data) {
                //svuoto il contenitore dai preceedenti dischi
                $('main .container').empty();
                var dataParsed = JSON.parse(data);
                for (let index = 0; index < dataParsed.length; index++) {
                    var disco = dataParsed[index];
                    // mostro solo i dischi dell'artista scelto nella select
                    if ($('select').val() == disco.author || $('select').val() == 'none') {
                        handleTemplate(disco);
                    }
                }
            },
            'error': function() {
                console.log('errore');
            }
        })
    })
    
    function handleTemplate(disco) {

        var context = {
            'image': disco.poster,
            'title' : disco.title,
            'author' : disco.author,
            'genre' : disco.genre,
            'year' : disco.year
        }
        var html = template(context);
        $('main .container').append(html);
    }

    // $('select').change(function(){
    //     $.ajax({
    //         'url': url,
    //         'method':'POST',
    //         'data': {'author' : $(this).val()},
    //         'dataType':'json',
    //         'success': function(data) {
    //             console.log(data);
    //         },
    //         'error': function() {
    //             console.log('errore');
    //         }
    //     })
    // })
});

