class Oeil {
    constructor() {
        this.class=".oeil";
        this.references=[];
        this.write();
    }
    
    /* Introduction */
    intro() {
        $(this.class).append("\
        <section style='text-align: center;'>\
            <div class='card border-dark mb-100'>\
                <div class='card-header'><h2 class='card-title'>Partie I</h2></div>\
                <div class='card-body text-dark'>\
                    <h3 class='card-title'>L’oeil</h3>\
                    <p class='card-text'>Premier instrument optique</p>\
                </div>\
            </div>\
        </section>"
        );

        $(this.class).append("\
        <section class='oeil-intro'>\
            <span>L'œil un système optique simple composé de:\
            <p class='fragment fade-in-then-out oeil-fragment'>\
                    <span>- la cornée</span><br>\
                    <span></span><br>\
                    <span></span><br>\
                    <span></span><br>\
                    <img src='img/cornee.svg' class='oeil-img'>\
                </p>\
                <p class='fragment fade-in-then-out oeil-fragment'>\
                    <span>- la cornée</span><br>\
                    <span>- l'iris</span><br>\
                    <span></span><br>\
                    <span></span><br>\
                    <img src='img/iris.svg' class='oeil-img'>\
                </p>\
                <p class='fragment fade-in-then-out oeil-fragment'>\
                    <span>- la cornée</span><br>\
                    <span>- l'iris</span><br>\
                    <span>- le critallin</span><br>\
                    <span></span><br>\
                    <img src='img/cristallin.svg' class='oeil-img'>\
                </p>\
                <p class='fragment fade-in-then-out oeil-fragment'>\
                    <span>- la cornée</span><br>\
                    <span>- l'iris</span><br>\
                    <span>- le critallin</span><br>\
                    <span>- la rétine</span><br>\
                    <img src='img/retine.svg' class='oeil-img'>\
                </p>\
                </span>\
        </section>"
        );

        $(this.class).append("\
        ");
    }

    /* Trajet de la lumière */
    trajet() {
        $(this.class).append("\
        <section class='oeil-trajet'>\
            <p>La lumière traverse deux lentilles convergentes pour se focaliser sur la rétine</p>\
            <iframe id='oeil-iframe' src='oeil.html' style='' title='Trajet de la lumière dans l'oeil'></iframe>\
            <svg id='oeil-zoom' style='position: absolute; left: -25px; top: 145px;' width='16' height='16' fill='currentColor' class='bi bi-fullscreen' viewBox='0 0 16 16'>\
              <path d='M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5'/>\
            </svg>\
            <p style='font-size: 12px;'>*Cliquer sur le schéma!</p>\
        </section>"
        );

        $("#oeil-zoom ").click(function() {
            let scale=$("#oeil-iframe").css("transform");

            if(scale=="matrix(1, 0, 0, 1, 0, 0)") {
                $("#oeil-iframe").css("transform", "scale(1.5)");
                $("#oeil-iframe").css("left", "125px");
                $("#oeil-iframe").css("top", "95px");
            } else {
                $("#oeil-iframe").css("transform", "scale(1)");
                $("#oeil-iframe").css("left", "0px");
                $("#oeil-iframe").css("top", "0px");
            }
        });
    }

    write() {
        this.intro();
        this.trajet();
    }
}