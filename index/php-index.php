<?php include '../public/database/dischi.php' ?>

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
    <div class="img-wrapper">
        <img src="../public/img/logo.svg" alt="">
    </div>
    <form action="">
        <select></select>
    </form>
</header>
    <main>
        <div class="container">
            <?php foreach ($dischi as $key => $value) { ?>
                <div class="card">
                    <div><img src="<?php echo $value['poster'] ?>" alt=""></div>
                    <div class='info'>
                        <h3><?php echo $value['title'] ?> </h3>
                        <p><?php echo $value['author'] ?></p>
                        <p><?php echo $value['genre'] ?></p>
                        <p><?php echo $value['year'] ?></p>
                    </div>
                </div>
                <?php
            }
            ?>
        </div>
    </main>
    <script src="../public/php-version/app.js"></script>
</body>
</html>