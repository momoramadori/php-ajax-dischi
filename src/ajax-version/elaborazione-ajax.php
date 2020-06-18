
<?php
    include '/Applications/MAMP/htdocs/Boolean/php-exercises/Giugno/17-06/php-ajax-dischi/public/database/dischi.php';

    if (isset($_GET['author'])) {
        $dischi_filtrati = [];
        foreach ($dischi as $key => $value) {
            if ($value['author'] == $_GET['author']) {
                array_push($dischi_filtrati, $value);
            }
        }
        if ($dischi_filtrati != []) {
            $dischi = $dischi_filtrati;
        }
    }

    header('Content-Type: application/json');
    echo json_encode($dischi);
?>