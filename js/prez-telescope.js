class Telescope {
    constructor() {
        this.class=".telescope";
        this.references=
            ["Reconstruction de la lunette de Galilée qui fêta son 400e anniversaire en 2009. Document <a href='http://www.jimsugar.com/'>Jim Sugar</a>"
            ,"Observatoire de Paris-Meudon - B. Mollier"
            ];
        this.write();
    }
    
    /* Introduction */
    intro() {
        $(this.class).append("\
        <section style='text-align: center;'>\
            <div class='card border-dark mb-100'>\
                <div class='card-header'><h2 class='card-title'>Partie III</h2></div>\
                <div class='card-body text-dark'>\
                    <h3 class='card-title'>Télescopes réflecteurs</h3>\
                </div>\
            </div>\
        </section>"
        );

        $(this.class).append("\
        <section class='telescope-intro'>\
            <span>\
                Dans la course au grossissement la lentille présente le désavantage d'être limitée par le poids et donc la taille. \
                <p class='fragment fade-in'>En effet un fort grosssissement ne sert à rien si le diamètre de l'objectif reste limité.</p>\
                <p class='fragment fade-in'>C'est comme zoomer une image avec peu de pixel. On obtient des pixels plus gros!</p>\
                <p class='fragment fade-in telescope-saturne'>\
                    <img src='img/saturne.jpg' class='rounded' width=250px'>\
                    <br>\
                    <span class='newton-figure'>Saturne depuis une lunette de 60mm</span>\
                </p>\
                <p class='fragment fade-in telescope-saturne-zoom'>\
                    <img src='img/saturne-zoom.png' class='rounded' width=250px'>\
                    <br>\
                    <span class='newton-figure'>Zoom x5 de l'image Saturne</span>\
                </p>\
            </span>\
        </section>"
        );
    }

    write() {
        this.intro();
    }
}