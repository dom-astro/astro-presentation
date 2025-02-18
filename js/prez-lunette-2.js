class Lunette2 {
    constructor() {
        this.class=".lunette-2";
        this.references=
            ["Reconstruction de la lunette de Galilée qui fêta son 400e anniversaire en 2009. Document <a href='http://www.jimsugar.com/'>Jim Sugar</a>"
            ,"Observatoire de Paris-Meudon - B. Mollier"
            ];
        this.write();
    }
    
    /* Lunette astronomique */
    introAstro() {
        $(this.class).append("\
        <section class='chapitre'>\
            <div class='card border-dark mb-100'>\
                <div class='card-header'><h2 class='card-title'>Partie II</h2></div>\
                <div class='card-body text-dark'>\
                    <h3 class='card-title'>2) La lunette de Kepler</h3>\
                </div>\
            </div>\
        </section>"
        );
    }
        
    astro() {
        $(this.class).append("\
        <section class='astro'>\
            <span>Peu de temps après Galilée, Kepler propose, en 1611, une combinaison optique plus performante qui deviendra la lunette astronomique qu'on utilise encore de nos jours.\
                Elle est constituée de deux lentilles, mais cette fois-ci convergentes.<br><br>\
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
                    <span>- Dans le cas d'une lunette astronomique l'image est inversée.</span><br><br>\
                    <img src='img/lunette-result.png' class='rounded img-astro img-astro-occulaire' alt='Occulaire de la lunette'>\
                </p>\
            </span>\
        </section>"
        );       
    }

    /* Trajet */
    astroTrajet() {
        $(this.class).append("\
        <section class='trajet-astro'>\
            <span>Calculons le grossissement <b>G</b> de la lunette astronomique</p>\
            <iframe id='astro-iframe' src='lunette.html' style='' title='Trajet de la lumière dans une lunette astronomique'></iframe>\
            <svg id='astro-zoom' style='position: absolute; left: -25px; top: 75px;' width='16' height='16' fill='currentColor' class='bi bi-fullscreen' viewBox='0 0 16 16'>\
              <path d='M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5'/>\
            </svg>\
            <span style='font-size: 12px;'>*Cliquer sur le schéma!</span>\
            <p class='fragment fade-in'><span style='font-size: 16px; top:-30px; position: relative;'>Le grossissement G vaut le rapport entre les deux angles &alpha;'/&alpha;</span></p>\
            <p class='fragment fade-in'><span style='font-size: 16px; top:-60px; position: relative;'>On remarque deux triangles rectangle en B'. Avec un peu de connaissance en trigonométrie, on sait que tan(&alpha;)=B'A'/F<sub>1</sub> et tan(&alpha;')=B'A'/F<sub>2</sub>\
            <p class='fragment fade-in'><span style='font-size: 16px; top:-90px; position: relative;'>Comme les angles sont très petits, on a tan(&alpha;)=&alpha; et tan(&alpha;')=&alpha;'</span></p>\
            <p class='fragment fade-in'><span style='font-size: 16px; top:-120px; position: relative;'>On en déduit que G=&alpha;'/&alpha; => G=tan(&alpha;')/tan(&alpha;) => G=(B'A'/F<sub>2</sub>) / (B'A'/F<sub>1</sub>) => <b style='font-size: 25px;'>G=F<sub>1</sub>/F<sub>2</sub></b></span></p>\
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

    observation() {
        $(this.class).append("\
        <section class='obs-kepler'>\
            <p>Faisons une simulation avec une lunette de 60mm et de focal 300mm.</p>\
            <p class='fragment fade-in'>La simulation porte sur la Lune, Saturne et les Pléiades.</p>\
            <p class='fragment fade-in'>Avec une gamme d'occulaire dont la focale vont de 30mm à 4mm, soit un grossissement de ...</p>\
            <p class='fragment fade-in'>\
                <a target='_blank' href='https://www.stelvision.com/astro/simulateur-de-telescope/?simtelmode=visu&D=60&F=300&FD=5&type_choix=auto&nboc=5&champ_nom=50&champ_alt=&cibles=lune%2Csaturne%2Cpleiades&simu_personnalisee=Simuler'>\
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' class='bi bi-moon-stars' viewBox='0 0 16 16'>\
                    <path d='M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286'/>\
                    <path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z'/>\
                    </svg>\
                => Simulateur de télescope via stelvision.com\
                </a>\
            </p>\
            </section>"
        );
    }


    
    write() {
        this.introAstro();
        this.astro();
        this.astroTrajet();
        this.observation();
    }
}