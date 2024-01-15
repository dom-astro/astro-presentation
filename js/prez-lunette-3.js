class Lunette3 {
    constructor() {
        this.class=".lunette-3";
        this.references=
            ["Reconstruction de la lunette de Galilée qui fêta son 400e anniversaire en 2009. Document <a href='http://www.jimsugar.com/'>Jim Sugar</a>"
            ,"Observatoire de Paris-Meudon - B. Mollier"
            ];
        this.write();
    }
    
    /* Lunette de Galilée */
    introGalilee() {
        $(this.class).append("\
        <section style='text-align: center;'>\
            <div class='card border-dark mb-100'>\
                <div class='card-header'><h2 class='card-title'>Partie II</h2></div>\
                <div class='card-body text-dark'>\
                    <h3 class='card-title'>2) La lunette de Galilée</h3>\
                </div>\
            </div>\
        </section>"
        );
    }

    /* Lunette Galilée */
    galilee() {
        $(this.class).append("\
            <section class='trajet-astro'>\
                <span>La lunette de galilée est aussi constituée de deux lentilles. Cependant la seconde est une lentille divergente.</span>\
                <br>\
                <iframe id='galilee-iframe' src='galilee.html' title='Trajet de la lumière dans une lunette astronomique'></iframe>\
                <svg id='galilee-zoom' style='position: absolute; left: -25px; top: 130px;' width='16' height='16' fill='currentColor' class='bi bi-fullscreen' viewBox='0 0 16 16'>\
                <path d='M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5'/>\
                </svg>\
                <span style='font-size: 12px;'>*Cliquer sur le schéma!</span>\
                <p class='fragment fade-in'><span style='font-size: 16px; top:-10px; position: relative;'>On remarque que l'oculaire est placée avant le foyer de l'objectif</span></p>\
                <p class='fragment fade-in'><span style='font-size: 16px; top:-40px; position: relative;'>L'image observée est virtuelle.</span></p>\
                <p class='fragment fade-in'><span style='font-size: 16px; top:-70px; position: relative;'>On ne peut avoir qu'un faible grossissement</span></p>\
            </section>"
        );

        $("#galilee-zoom ").click(function() {
            let scale=$("#galilee-iframe").css("transform");

            if(scale=="matrix(1, 0, 0, 1, 0, 0)") {
                $("#galilee-iframe").css("transform", "scale(2)");
                $("#galilee-iframe").css("left", "250px");
                $("#galilee-iframe").css("top", "175px");
            } else {
                $("#galilee-iframe").css("transform", "scale(1)");
                $("#galilee-iframe").css("left", "0px");
                $("#galilee-iframe").css("top", "25px");
            }
        });

    }


    write() {
        this.introGalilee();
        this.galilee();
    }
}