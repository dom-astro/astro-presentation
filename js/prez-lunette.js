class Lunette {
    constructor() {
        this.class=".lunette";
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
                <div class='card-header'><h2 class='card-title'>Partie II</h2></div>\
                <div class='card-body text-dark'>\
                    <h3 class='card-title'>Télescopes réfracteurs</h3>\
                    <p class='card-text'>Les lunettes</p>\
                </div>\
            </div>\
        </section>"
        );

        $(this.class).append("\
        <section class='lunette-intro'>\
            <span>\
                Les télescopes réfracteurs sont les plus anciens types de télescopes. Ils utilisent des lentilles pour focaliser \
                la lumière. On peut les séparer en deux catégories:\
                <p class='fragment fade-in lunette-astro'>\
                    <br><span>La lunette astronomique</span><br>\
                    <img src='img/lunette-astro.jpg' class='rounded'>\
                </p>\
                <p class='fragment fade-in-then-out lunette-galilee'>\
                    <span>La lunette de Galilée</span><br>\
                    <img src='img/lunette-galilee.jpg' class='rounded'>\
                </p>\
            </span>\
        </section>"
        );

        $(this.class).append("\
        ");
    }

    /* Lunette astronomique */
    introAstro() {
        $(this.class).append("\
        <section style='text-align: center;'>\
            <div class='card border-dark mb-100'>\
                <div class='card-header'><h2 class='card-title'>Partie II</h2></div>\
                <div class='card-body text-dark'>\
                    <h3 class='card-title'>1) La lunette astronomique</h3>\
                </div>\
            </div>\
        </section>"
        );
    }
        
    astro() {
        $(this.class).append("\
        <section class='astro'>\
            <span>Une lunette astronomique est constituée de deux lentilles<br><br>\
                <p class='fragment fade-in-then-out'>\
                    <span>- Une première lentille en entrée de l'instrument (l'objectif), qui capte la lumière.</span><br><br>\
                    <span></span><br><br>\
                    <span></span><br><br>\
                    <span></span><br><br>\
                    <img src='img/lunette-objectif.png' class='rounded img-astro img-astro-objectif' alt='Objectif de la lunette'>\
                <p class='fragment fade-in-then-out'>\
                    <span>- Une première lentille en entrée de l'instrument (l'objectif), qui capte la lumière.</span><br><br>\
                    <span>- Puis la focalise dans la lunette.</span><br><br>\
                    <span></span><br><br>\
                    <span></span><br><br>\
                    <img src='img/lunette-focal.png' class='rounded img-astro img-astro-focal' alt='Point focal de la lunette'>\
                </p>\
                <p class='fragment fade-in-then-out'>\
                    <span>- Une première lentille en entrée de l'instrument (l'objectif), qui capte la lumière.</span><br><br>\
                    <span>- Puis la focalise dans la lunette.</span><br><br>\
                    <span>- Une seconde lentille qui redresse l'image afin d'en faciliter son observation à l'oeil.</span><br><br>\
                    <span></span><br><br>\
                    <img src='img/lunette-occulaire.png' class='rounded img-astro img-astro-occulaire' alt='Occulaire de la lunette'>\
                </p>\
                <p class='fragment fade-in-then-out'>\
                    <span>- Une première lentille en entrée de l'instrument (l'objectif), qui capte la lumière.</span><br><br>\
                    <span>- Puis la focalise dans la lunette.</span><br><br>\
                    <span>- Une seconde lentille qui redresse l'image afin d'en faciliter son observation à l'oeil.</span><br><br>\
                    <span>- Dans le cas d'une lunette astronomique, les deux lentilles sont convergentes, et l'image est inversée.</span><br><br>\
                    <img src='img/lunette-result.png' class='rounded img-astro img-astro-occulaire' alt='Occulaire de la lunette'>\
                </p>\
            </span>\
        </section>"
        );       
    }

    /* Trajet */
    trajet() {
        $(this.class).append("\
        <section class='oeil-trajet'>\
            <span>La lumière traverse deux lentilles convergentes pour se focaliser sur la rétine</p>\
            <iframe class='oeil-iframe' src='oeil.html' style='' title='Trajet de la lumière dans l'oeil'></iframe>\
        </section>"
        );       
    }
    
    /* Trajet */
    astroTrajet() {
        $(this.class).append("\
        <section class='trajet-astro'>\
            <span>Calculons le grossissement de la lunette astronomique</p>\
            <iframe id='astro-iframe' src='lunette.html' style='' title='Trajet de la lumière dans une lunette astronomique'></iframe>\
            <svg id='astro-zoom' style='position: absolute; left: -25px; top: 75px;' width='16' height='16' fill='currentColor' class='bi bi-fullscreen' viewBox='0 0 16 16'>\
              <path d='M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5'/>\
            </svg>\
            <span style='font-size: 12px;'>*Cliquer sur le schéma!</span>\
            <p class='fragment fade-in'><span style='font-size: 16px; top:-30px; position: relative;'>Le grossissement G vaut le rapport entre les deux angles &alpha;'/&alpha;</span></p>\
            <p class='fragment fade-in'><span style='font-size: 16px; top:-60px; position: relative;'>On remarque deux triangles rectangle en B'. Avec un peu de connaissance en trigonométrie, on sait que tan(&alpha;)=B'A'/F<sub>1</sub> et tan(&alpha;')=B'A'/F<sub>2</sub>\
            <p class='fragment fade-in'><span style='font-size: 16px; top:-90px; position: relative;'>Comme les angles sont très petits, on a tan(&alpha;)=&alpha; et tan(&alpha;')=&alpha;'</span></p>\
            <p class='fragment fade-in'><span style='font-size: 16px; top:-120px; position: relative;'>On en déduit que G=&alpha;/&alpha;, soit G=tan(&alpha;')/tan(&alpha;), soit G=<b>F<sub>2</sub>/F<sub>1</sub></b></span></p>\
        </span>\
       </section>"
        );
        //https://www.maxicours.com/se/cours/etudier-une-lunette-afocale/#:~:text=Le%20grossissement%20de%20la%20lunette,sur%20celui%20de%20l%27oculaire.
        $("#astro-zoom ").click(function() {
            let scale=$("#astro-iframe").css("transform");

            if(scale=="matrix(1, 0, 0, 1, 0, 0)") {
                $("#astro-iframe").css("transform", "scale(2)");
                $("#astro-iframe").css("left", "250px");
                $("#astro-iframe").css("top", "150px");
            } else {
                $("#astro-iframe").css("transform", "scale(1)");
                $("#astro-iframe").css("left", "0px");
                $("#astro-iframe").css("top", "0px");
            }
        });
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
                <p class='fragment fade-in'><span style='font-size: 16px; top:-30px; position: relative;'>Le grossissement G vaut le rapport entre les deux angles &alpha;'/&alpha;</span></p>\
                <p class='fragment fade-in'><span style='font-size: 16px; top:-60px; position: relative;'>On remarque deux triangles rectangle en B'. Avec un peu de connaissance en trigonométrie, on sait que tan(&alpha;)=B'A'/F<sub>1</sub> et tan(&alpha;')=B'A'/F<sub>2</sub>\
                <p class='fragment fade-in'><span style='font-size: 16px; top:-90px; position: relative;'>Comme les angles sont très petits, on a tan(&alpha;)=&alpha; et tan(&alpha;')=&alpha;'</span></p>\
                <p class='fragment fade-in'><span style='font-size: 16px; top:-120px; position: relative;'>On en déduit que G=&alpha;/&alpha;, soit G=tan(&alpha;')/tan(&alpha;), soit G=<b>F<sub>1</sub>/F<sub>2</sub></b></span></p>\
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
        this.intro();
    }
}