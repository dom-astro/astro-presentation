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
            <span>L'œil un système optique simple composé de:</p>\
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
        </section>"
        );

        $(this.class).append("\
        ");
    }

    /* Introduction */
    trajet() {
        $(this.class).append("\
        <section class='oeil-trajet'>\
            <span>La lumière traverse deux lentilles convergentes pour se focaliser sur la rétine:</p>\
            <iframe class='oeil-iframe' src='Lentille\\oeil.html' style='' title='Trajet de la lumière dans l'oeil'></iframe>\
        </section>"
        );       
    }

    write() {
        this.intro();
        this.trajet();
    }
}