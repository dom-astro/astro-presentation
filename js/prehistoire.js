class Prehistoire {
    constructor() {
        this.class=".prehistoire";
        this.write();
    }
    
    /* Introduction */
    intro() {
        $(this.class).append("\
        <section style='text-align: center;'>\
            <span style='font-size: var(--r-heading1-size); position: relative; top: -200px;'>Partie I</span><br><br>\
            <span style='font-size: var(--r-heading2-size); position: relative; top: -200px;'>La préhistoire</span>\
        </section>"
        );

        $(this.class).append("\
        <section class='lascaux-intro'>\
            <span style='font-size: 50px;'>L'astronomie est, parmi l'ensemble des sciences, celle qui est considérée comme la plus ancienne.</span>\
            <p class='fragment fade-up'><img src='img/nuage.png'></p>\
        </section>"
        );
    }

    /* Cycles astronomiques */
    cycles() {
        $(this.class).append("\
            <section class='lascaux-cycles'>\
                L'humanité, en regardant le ciel, s'est petit à petit aperçu que plusieurs cycles régissaient le passage du temps.\
                <p class='fragment fade-up lascaux-cycles-stellarium'><span>Je vous propose de les découvrir à travers le site <a href='https://stellarium-web.org/' target='_blank'>stellarium-web.org</a><br>\
                en faisant défiler une année entière jour par jour à 8h00 du matin.</span></p>\
                <p class='fragment fade-right lascaux-cycles-soleil'><img src='img/jour-nuit.gif' class='img-fluid rounded'><span>L'alternance jour / nuit.</span></p>\
                <p class='fragment fade-left lascaux-cycles-lune'><span>Le cycle lunaire.</span><img src='img/lune.gif' width='150px' class='img-fluid rounded'></p>\
                <p class='fragment fade-right lascaux-cycles-saisons'><video muted data-autoplay src='video/saisons.mp4'></video><span>La ronde des saisons.</span></p>\
            </section>"
        );
    }

    // La grotte de Lascaux
    lascaux() {
        $(this.class).append("\
            <section class='lascaux-peintures'>\
                <span style='font-size: var(--r-heading3-size);'>La grotte de Lascaux </span>\
                <span style='font-size: 30px;'>(entre -20.000 et -18.000 ans av. J.-C.)</span>\
                <p class='fragment fade-down lascaux-peintures-taureau'>\
                    <img src='img/Lascaux-Taureau.jpg' class='rounded border border-danger-subtle' alt='Lascaux'>\
                    <span>L'une des toutes premières représentations du ciel se trouve dans la grotte de Lascaux\
                    située dans la vallée de la Vézère en Dordogne.<br>\
                    D'après les scientifiques, certaines peintures rupestres\
                    représentent des constellations telles que le Taureau, Orion et les Pléiades.</span>\
                    <span class='fig-caption'>Crédit : Ministère de la Culture/Centre National de la Préhistoire</span>\
                </p>\
                <p class='fragment fade-up lascaux-peintures-end'>\
                    <span>Faisons la comparaison avec la constellation du taureau à travers le site <a href='https://stellarium-web.org/' target='_blank'>stellarium-web.org</a>\
                    </span>\
                </p>\
            </section>"
        );
    }

    // Stonehenge
    stonehenge() {
        $(this.class).append("\
        <section>\
            <span style='font-size: var(--r-heading3-size);'>Les mégalithes de Stonehenge </span>\
            <span style='font-size: 30px;'>(entre 3.700 et 1.600 av. J.-C.)</span>\
            <p class='fragment fade-down lascaux-stonehenge'>\
                <img src='img/stonehenge.jpg' class='rounded border border-danger-subtle' alt='Stonehenge'>\
                <span>Cette architecture est représentative de l'architecture de certains monuments mégalithiques qui\
                répondrait à des critères d'orientation astronomique, leur permettant d'être utilisés comme calendriers solaires (solstice, équinoxe)\
                ou pour la prévision d'évènements astraux réguliers.</span>\
                <span class='fig-caption'>Soltice d'été à Stonehenge</span>\
            </p>\
        </section>"
        );
    }

    write() {
        this.intro();
        this.cycles();
        this.lascaux();
        this.stonehenge();
    }
}