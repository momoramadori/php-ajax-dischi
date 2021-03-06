<?php include '../database/dischi.php';

//creo l'array per la select
$authors = [];
foreach ($dischi as  $disco) {
    if (!in_array( $disco['author'], $authors)) {
        array_push($authors, $disco['author']);
    }
}
?>

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
                <?php for ($i=0; $i < count($authors); $i++) { 
                    $author = $authors[$i]; ?>
                    <option value="<?php echo $author ?>"><?php echo $author ?></option>
                    <?php
                } 
                ?>
            </select>
        </form>
    </div>
</header>
    <main>
        <div class="container">
            <?php foreach ($dischi as $key => $value) { ?>
                <div class="card">
                    <div><img src="<?php echo $value['poster'] ?>" alt=""></div>
                    <div class='info'>
                        <h3><?php echo $value['title'] ?> </h3>
                        <p class='author' data='<?php echo $value['author'] ?>'><?php echo $value['author'] ?></p>
                        <p><?php echo $value['genre'] ?></p>
                        <small><?php echo $value['year'] ?></small>
                    </div>
                </div>
                <?php
            }
            ?>
        </div>
    </main>
    <script src="../public//app.js"></script>
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