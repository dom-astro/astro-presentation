class Cassegrain {
    constructor() {
        this.class=".cassegrain";
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
                    <h3 class='card-title'>Télescopes réfracteurs</h3>\
                    <p class='card-text'>2) Le Cassegrain</p>\
                </div>\
            </div>\
        </section>"
        );

        $(this.class).append("\
        <section class='cassegrain-intro'>\
            <span>\
                A peu près au même moment que le télescope de cassegrain est apparu le télescope de Cassegrain. \
                <p class='fragment fade-in'>On utilise aussi deux miroirs, mais cette fois-ci disposés sur le même axe.</p>\
                <p class='fragment fade-in-' style='display: flex; justify-content: center;'>\
                    <img src='img/cassegrain1.jpg' class='rounded img-cassegrain''>\
                    <span class='cassegrain-figure'>Télescope Cassegrain C 203/2436</span>\
                </p>\
            </span>\
        </section>"
        );
    }

    schema() {
        $(this.class).append("\
            <section class='cassegrain-trajet'>\
                <span>Le télescope de Cassegrain utilise un miroir concave pour faire converger la lumière.</span>\
                <p class='fragment fade-in'>A ce miroir est ajouté un miroir convexe pour renvoyer la lumière vers l'occulaire.</p>\
                <br>\
                <p class='fragment fade-in'>\
                    <iframe id='cassegrain-iframe' src='cassegrain.html' title='Trajet de la lumière dans  télescope de type cassegrain'></iframe>\
                    <svg id='cassegrain-zoom'  width='16' height='16' fill='currentColor' class='bi bi-fullscreen' viewBox='0 0 16 16'>\
                    <path d='M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5'/>\
                    </svg>\
                    <span style='font-size: 12px;'>*Cliquer sur le schéma!</span>\
                </p>\
            </section>"
        );

        $("#cassegrain-zoom").click(function() {
            let scale=$("#cassegrain-iframe").css("transform");

            if(scale=="matrix(1, 0, 0, 1, 0, 0)") {
                $("#cassegrain-iframe").css("transform", "scale(1.5)");
                $("#cassegrain-iframe").css("left", "140px");
                $("#cassegrain-iframe").css("top", "25px");
            } else {
                $("#cassegrain-iframe").css("transform", "scale(1)");
                $("#cassegrain-iframe").css("left", "0px");
                $("#cassegrain-iframe").css("top", "-50px");
            }
        });
    }


    write() {
        this.intro();
        this.schema();
    }
}