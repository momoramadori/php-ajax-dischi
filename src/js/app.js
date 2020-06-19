var $ = require('jquery');
const Handlebars = require("handlebars");

$(document).ready(function(){
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    if ($('main').hasClass('handlebars-compile')) {
        $.ajax({
            'url': '../database/dischi.php',
            'method':'GET',
            'dataType': 'json',
            'success': function(data) {
                //ciclo i dati per generare tutti i dischi
                for (let index = 0; index < data.length; index++) {
                    var disco = data[index];
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
    }
    
    
    $('select').change(function(){
        $.ajax({
            'url': '../database/dischi.php',
            'method':'GET',
            'data': {'author' : $(this).val()},
            'dataType':'json',
            'success': function(data) {
                $('main .container').empty()
                for (let index = 0; index < data.length; index++) {
                    var disco = data[index];
                    //con handlebar genero le card
                    handleTemplate(disco);
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
});

