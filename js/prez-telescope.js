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
                Dans la course au grossissement la lentille présente le désavantage d'être limitée par la taille et donc le poids. \
                <p class='fragment fade-in'>En effet un fort grosssissement ne sert à rien si le diamètre de l'objectif reste limité.</p>\
                <p class='fragment fade-in'>Avec l'utilisation d'un mirroir, on a pu augmenter le diamètre de l'objectif ...</p>\
                <p class='fragment fade-in'>tout en réduissant la masse de celui-ci ...</p>\
                <p class='fragment fade-in'>et donc utiliser un grossissement plus important!</p>\
                <p class='fragment fade-in' style='display: flex; justify-content: center;'>\
                    <img src='img/newton.jpg' class='rounded' width=350px'>\
                    <br>\
                    <span class='newton-figure'>Réplique du télescope de Newton</span>\
                </p>\
            </span>\
        </section>"
        );
    }

    write() {
        this.intro();
    }
}