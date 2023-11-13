class Mesopotamie {
    constructor() {
        this.class=".mesopotamie";
        this.write();
    }

    /* Introduction */
    intro() {
        $(this.class).append("\
        <section style='text-align: center;'>\
            <div class='card border-dark mb-100'>\
                <div class='card-header'><h2 class='card-title'>Partie III</h2></div>\
                <div class='card-body text-dark'>\
                    <h3 class='card-title'>La Mésopotamie</h3>\
                    <p class='card-text'>La base sexagésimale, premières observations et constellations</p>\
                </div>\
            </div>\
            <!-- span style='font-size: var(--r-heading1-size); position: relative; top: -200px;'>Partie III</span><br><br>\
            <span style='font-size: var(--r-heading2-size); position: relative; top: -200px;'>La Mésopotamie</span -->\
        </section>"
        );
    }

    /* Calendrier */
    calendrier() {
        $(this.class).append("\
        <section class='egypte-calendrier'>\
            <span style='font-size: 50px;'>Le calendrier égyptien est le premier calendrier solaire connu.\
            Les égyptiens le définissaient comme le temps nécessaire pour une récolte.\
            Ils se basaient sur le lever héliaque de l'étoile Sirius qui annonçait la crue du Nil.</span>\
            <figure class='figure'>\
                <img src='img/sirius.jpg' class='figure-img img-fluid rounded' width='100%' alt='Lever héliaque de Sirius'>\
                <figcaption class='figure-caption'>Simulation du lever héliaque de Sirius le 15 juillet 3000 avant J.C. Crédit - S&T, Stellarium</figcaption>\
            </figure>\
        </section>"
        );
    }    


    /* Nout divinité du ciel */
    nout() {
        $(this.class).append("\
        <section class='egypte-nout'>\
            <div class='row'>\
                <div class='col-4'>\
                    <figure class='figure'>\
                        <img src='img/nout.jpg' class='figure-img img-fluid rounded' width='100%' alt='Divinité Nout'>\
                        <figcaption class='figure-caption'>Nout, une représentation de la voie lactée?</figcaption>\
                    </figure>\
                </div>\
                <div class='col-8'>\
                    <span>En Egypte, la voûte céleste est représentée par la divinité Nout.</span><br>\
                    <span>Son rire est le tonnerre et ses larmes la pluie.</span><br>\
                    <span>Chaque soir elle avale le soleil pour le faire naitre chaque matin.</span>\
                    </section>\
                </div>\
            </div>\
        </section>"
        );
    }    

    write() {
        this.intro();
    }
}
    /*					L'Egypte (Création de la journée de 24 heures)
					https://www.bbc.com/afrique/articles/ce9klpz577vo
*/

 function addLascaux() {

    /* Introduction */

    $(".lascaux").append("\
    <section class='lascaux-intro'>\
        <span style='font-size: 50px;'>L'astronomie est, parmi l'ensemble des sciences, celle qui est considérée comme la plus ancienne.</span>\
        <p class='fragment fade-up'><img src='img/nuage.png'></p>\
    </section>"
    );

    /* Cycles astronomiques */
    $(".lascaux").append("\
    <section class='lascaux-cycles'>\
        L'humanité, en regardant le ciel, s'est petit à petit aperçu que plusieurs cycles régissaient le passage du temps.\
        <p class='fragment fade-up lascaux-cycles-stellarium'><span>Je vous propose de les découvrir à travers le site <a href='https://stellarium-web.org/' target='_blank'>stellarium-web.org</a><br>\
        en faisant défiler une année entière jour par jour à 8h00 du matin.</span></p>\
        <p class='fragment fade-right lascaux-cycles-soleil'><img src='img/jour-nuit.gif'><span>L'alternance jour / nuit.</span></p>\
        <p class='fragment fade-left lascaux-cycles-lune'><span>Le cycle lunaire.</span><img src='img/lune.gif' width='150px'></p>\
        <p class='fragment fade-right lascaux-cycles-saisons'><video muted data-autoplay src='video/saisons.mp4'></video><span>La ronde des saisons.</span></p>\
    </section>"
    );

    // La grotte de Lascaux
    $(".lascaux").append("\
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

    // Stonehenge
    $(".lascaux").append("\
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