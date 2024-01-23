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
        <section style='text-align: center;'>\
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
                A peu près au même moment que le télescope de Newton est apparu le télescope de Cassegrain. \
                <p class='fragment fade-in'>On utilise aussi deux miroirs, mais cette fois-ci disposés sur le même axe.</p>\
                <p class='fragment fade-in'>L'image est renvoyée par le miroir primaire concave puis par le miroir secondaire convexe.</p>\
                <p class='fragment fade-in-then-out' style='display: flex; justify-content: center;'>\
                    <img src='img/cassegrain1.jpg' class='rounded img-cassegrain''>\
                    <span class='text-cassegrain'>Le télescope est de longueur réduite</span>\
                    <span class='cassegrain-figure'>Télescope Cassegrain C 203/2436</span>\
                </p>\
                <p class='fragment fade-in-then-out' style='display: flex; justify-content: center;'>\
                    <img src='img/cassegrain2.jpg' class='rounded img-cassegrain''>\
                    <span class='text-cassegrain'>Le télescope est de longueur réduite</span>\
                    <span class='cassegrain-figure'>Télescope Cassegrain C 203/2436</span>\
                </p>\
                <p class='fragment fade-in-then-out' style='display: flex; justify-content: center;'>\
                    <img src='img/cassegrain3.jpg' class='rounded img-cassegrain''>\
                    <span class='text-cassegrain'>Le télescope est de longueur réduite</span>\
                    <span class='cassegrain-figure'>Télescope Cassegrain C 203/2436</span>\
                </p>\
            </span>\
        </section>"
        );
    }

    write() {
        this.intro();
    }
}