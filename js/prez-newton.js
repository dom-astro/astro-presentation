class Newton {
    constructor() {
        this.class=".newton";
        this.references=
            ["Reconstruction de la lunette de Galilée qui fêta son 400e anniversaire en 2009. Document <a href='http://www.jimsugar.com/'>Jim Sugar</a>"
            ,"Observatoire de Paris-Meudon - B. Mollier"
            ];
        this.write();
    }
    
    /* Introduction */
    intro() {
        $(this.class).append("\
        <section class='chapitre'>\
            <div class='card border-dark mb-100'>\
                <div class='card-header'><h2 class='card-title'>Partie III</h2></div>\
                <div class='card-body text-dark'>\
                    <h3 class='card-title'>Télescopes réflecteurs</h3>\
                    <p class='card-text'>1) Le Newton</p>\
                </div>\
            </div>\
        </section>"
        );

        $(this.class).append("\
        <section class='newton-intro'>\
            <span>\
                Pour résoudre ce problème, Newton remplace la lentille par un miroir concave.\
                <p class='fragment fade-in'>Il positionne ce miroir à l'arrière du télescope pour qu'il puisse refléter la lumière.</p>\
                <p class='fragment fade-in'>L'avantage du miroir est qu'il peut avoir un diamètre plus grand pour un poid équivalent.</p>\
                <p class='fragment fade-in-then-out' style='display: flex; position: absolute; top: 275px; left: 20%;'>\
                    <img src='img/newton.jpg' class='rounded' width=350px'>\
                    <br>\
                    <span class='newton-figure'>Réplique du télescope de Newton</span>\
                </p>\
                <p class='fragment fade-in' style='display: flex; position: absolute; top: 275px; left: 20%;'>\
                    <img src='img/newton.jpg' class='rounded' width=350px'>\
                    <img src='img/newton2.gif' class='rounded' width=350px' style='padding-left: 20px;'>\
                    <br>\
                    <span class='newton-figure'>Réplique du télescope de Newton</span>\
                    <span class='newton-figure' style='left: 53%; width: 100%;'>Newton ayant l'idée d'utiliser des miroirs pour faire un télescope</span>\
                </p>\
            </span>\
        </section>"
        );
    }

    schema() {
        $(this.class).append("\
            <section class='newton-trajet'>\
                <span>Le télescope de Newton utilise un miroir concave pour faire converger la lumière.</span>\
                <br>\
                <iframe id='newton-iframe' src='newton.html' title='Trajet de la lumière dans  télescope de type Newton'></iframe>\
                <svg id='newton-zoom' style='position: absolute; left: -25px; top: 105px;' width='16' height='16' fill='currentColor' class='bi bi-fullscreen' viewBox='0 0 16 16'>\
                <path d='M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5'/>\
                </svg>\
                <span style='font-size: 12px;'>*Cliquer sur le schéma!</span>\
            </section>"
        );

        $("#newton-zoom").click(function() {
            let scale=$("#newton-iframe").css("transform");

            if(scale=="matrix(1, 0, 0, 1, 0, 0)") {
                $("#newton-iframe").css("transform", "scale(2)");
                $("#newton-iframe").css("left", "250px");
                $("#newton-iframe").css("top", "150px");
            } else {
                $("#newton-iframe").css("transform", "scale(1)");
                $("#newton-iframe").css("left", "0px");
                $("#newton-iframe").css("top", "0px");
            }
        });
    }


    write() {
        this.intro();
        this.schema();
    }
}