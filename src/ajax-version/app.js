const $ = require('jquery');
const Handlebars = require("handlebars");

$(document).ready(function(){
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    $.ajax({
        'url':'http://localhost:8888/Boolean/php-exercises/Giugno/17-06/php-ajax-dischi/public/database/dischiajax.php',
        'method':'GET',
        'success': function(data) {
            var dataParsed = JSON.parse(data);
            for (let index = 0; index < dataParsed.length; index++) {
                var disco = dataParsed[index];
                var context = {
                    'image': disco.poster,
                    'title' : disco.title,
                    'author' : disco.author,
                    'genre' : disco.genre,
                    'year' : disco.year
                }
                var html = template(context);
                $('main .container').append(html);
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
            'url':'http://localhost:8888/Boolean/php-exercises/Giugno/17-06/php-ajax-dischi/public/database/dischiajax.php',
            'method':'GET',
            'success': function(data) {
                $('main .container').empty();
                var dataParsed = JSON.parse(data);
                for (let index = 0; index < dataParsed.length; index++) {
                    var disco = dataParsed[index];
                    if ($('select').val() == disco.author || $('select').val() == 'none') {
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
                }
            },
            'error': function() {
                console.log('errore');
            }
        })
    })
});