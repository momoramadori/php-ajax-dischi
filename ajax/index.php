<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../public/app.css">
    <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>
<header>
    <div class="container">
        <div class="img-wrapper">
            <img src="../public/img/logo.svg" alt="">
        </div>
        <form>
            <select>
                <option value="none">--Scegli un artista--</option>
            </select>
        </form>
    </div>
</header>
    <main class='handlebars-compile'>
        <div class="container">       
        </div>
    </main>
    <script src="../public/app.js"></script>
    <script id="entry-template" type="text/x-handlebars-template">
        <div class="card">
            <div><img src="{{image}}" alt=""></div>
            <div class='info'>
                <h3>{{title}}</h3>
                <p>{{author}}</p>
                <p>{{genre}}</p>
                <small>{{year}}</small>
            </div>
        </div>
    </script>
</body>
</html>