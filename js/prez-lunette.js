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
            <span>La lumière traverse deux lentilles convergentes pour se focaliser sur la rétine:</p>\
            <iframe class='oeil-iframe' src='oeil.html' style='' title='Trajet de la lumière dans l'oeil'></iframe>\
        </section>"
        );       
    }
    
    /* Lunette Galilée */
    galilee() {
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
    astro_trajet() {
        $(this.class).append("\
        <section class='trajet-astro'>\
            <span>Calculons le grossissement de la lunette astronomique</p>\
            <iframe id='astro-iframe' src='lunette.html' style='' title='Trajet de la lumière dans une lunette astronomique'></iframe>\
        </section>"
        );
        //https://www.maxicours.com/se/cours/etudier-une-lunette-afocale/#:~:text=Le%20grossissement%20de%20la%20lunette,sur%20celui%20de%20l%27oculaire.
        $("body ").click(function() {
            let scale=$("#astro-iframe").css("transform");

            if(scale=="matrix(1, 0, 0, 1, 0, 0)") {
                $("#astro-iframe").css("transform", "scale(2.1)");
            } else {
                $("#astro-iframe").css("transform", "scale(1)");
            }
        });
    }

    write() {
        this.intro();
        this.astro();
        this.astro_trajet();
        //this.trajet();
    }
}