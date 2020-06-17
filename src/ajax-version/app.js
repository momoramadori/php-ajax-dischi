const $ = require('jquery');


$(document).ready(function(){
    alert('ciao')
    $.ajax({
        'url':'../public/database/dischiajax.php',
        'method':'GET',
        'success': function(data) {
            console.log(JSON.parse(data));
        },
        'error': function() {
            console.log('errore');
        }
    })
})