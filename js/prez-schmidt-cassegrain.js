class SchmidtCassegrain {
    constructor() {
        this.class=".schmidt-cassegrain";
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
                    <p class='card-text'>3) Le Schmidt-Cassegrain</p>\
                </div>\
            </div>\
        </section>"
        );

        $(this.class).append("\
        <section class='schmidt-cassegrain-intro'>\
            <span>\
                Dans les années 1970, on associe au téléscope Cassegrain une lame de Schmidt. Cela a fortement contribué à son succés au près des astronomes amateurs.\
                <p class='fragment fade-in'>En effet, grâce à la lame de Schmidt, on a pu remplacer le miroir parabolique par un miroir sphérique, plus facile et moins cher à fabriquer.</p>\
                <p class='fragment fade-in-' style='display: flex; justify-content: center;'>\
                    <img src='img/schmidt-cassegrain.jpg' class='rounded img-schmidt-cassegrain'>\
                    <span class='schmidt-cassegrain-figure'>Télescope Schmidt-Cassegrain SC 203 / 2032 C8 OTA</span>\
                </p>\
            </span>\
        </section>"
        );
    }

    schema() {
        $(this.class).append("\
            <section class='schmidt-cassegrain-trajet'>\
                <span>Le télescope de Schmidt-Cassegrain utilise donc un miroir primaire sphérique et une lame de Schmidt pour corriger l'aberration de sphéricité.</span>\
                <br>\
                <p class='fragment fade-in'>\
                    <iframe id='schmidt-cassegrain-iframe' src='schmidt-cassegrain.html' title='Trajet de la lumière dans  télescope de type cassegrain'></iframe>\
                    <svg id='schmidt-cassegrain-zoom'  width='16' height='16' fill='currentColor' class='bi bi-fullscreen' viewBox='0 0 16 16'>\
                    <path d='M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5'/>\
                    </svg>\
                    <span style='font-size: 12px;'>*Cliquer sur le schéma!</span>\
                </p>\
            </section>"
        );

        $("#schmidt-cassegrain-zoom").click(function() {
            let scale=$("#schmidt-cassegrain-iframe").css("transform");

            if(scale=="matrix(1, 0, 0, 1, 0, 0)") {
                $("#schmidt-cassegrain-iframe").css("transform", "scale(1.5)");
                $("#schmidt-cassegrain-iframe").css("left", "135px");
                $("#schmidt-cassegrain-iframe").css("top", "70px");
            } else {
                $("#schmidt-cassegrain-iframe").css("transform", "scale(1)");
                $("#schmidt-cassegrain-iframe").css("left", "0px");
                $("#schmidt-cassegrain-iframe").css("top", "0px");
            }
        });
    }

    focalisation() {
        $(this.class).append("\
            <section class='schmidt-cassegrain-trajet'>\
                <span>La lame de Schmidt permet l’utilisation d’un miroir sphérique qui est bien plus facile à fabriquer. En effet, un\
                miroir sphérique ne permet pas de bien focaliser la lumière, au contraire d’un miroir parabolique, comme le\
                montre les schémas ci-dessous:</span>\
                <br>\
                <p class='fragment fade-in'>\
                    <iframe id='focalisation-iframe' src='focalisation.html' title='Trajet de la lumière dans télescope de type cassegrain'></iframe>\
                    <span style='font-size: 12px; position: absolute; top: 450px; left: 100px;'>Miroir parabolique</span>\
                </p>\
                <p class='fragment fade-in'>\
                    <iframe id='focalisation-concave-iframe' src='focalisation-concave.html' title='Trajet de la lumière dans télescope de type cassegrain'></iframe>\
                    <span style='font-size: 12px; position: absolute; top: 450px; left: 500px;'>Miroir sphérique</span>\
                </p>\
                <p class='fragment fade-in'>\
                    <iframe id='focalisation-schmidt-iframe' src='focalisation-schmidt.html' title='Trajet de la lumière dans télescope de type cassegrain'></iframe>\
                    <span style='font-size: 12px; position: absolute; top: 450px; left: 900px;'>Lame de Schmidt + miroir sphérique</span>\
                </p>\
            </section>"
        );

        $("#schmidt-cassegrain-zoom").click(function() {
            let scale=$("#schmidt-cassegrain-iframe").css("transform");

            if(scale=="matrix(1, 0, 0, 1, 0, 0)") {
                $("#schmidt-cassegrain-iframe").css("transform", "scale(1.5)");
                $("#schmidt-cassegrain-iframe").css("left", "135px");
                $("#schmidt-cassegrain-iframe").css("top", "70px");
            } else {
                $("#schmidt-cassegrain-iframe").css("transform", "scale(1)");
                $("#schmidt-cassegrain-iframe").css("left", "0px");
                $("#schmidt-cassegrain-iframe").css("top", "0px");
            }
        });
    }

    write() {
        this.intro();
        this.schema();
        this.focalisation();
    }
}