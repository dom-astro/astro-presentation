function initPrez() {
    addLascaux();

    Reveal.initialize({
        hash: true,
        width: 1300,
        height: 800,
        slideNumber: true,

        // Learn about plugins: https://revealjs.com/plugins/
        plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
    });
}

function addLascaux() {

    /* Introduction */
    $("#lascaux").append("\
    <section>\
        L'astronomie est, parmi l'ensemble des sciences, celle qui est considérée comme la plus ancienne\
        <img src='img/nuage.png'>\
    </section>"
    );

    $("#lascaux").append("\
    <section style='text-align: left; position: relative !important; top 0px !important;'>\
        L'humanité, en regardant le ciel, s'est petit à petit aperçu que plusieurs cycles régissaient le passage du temps:\
        <p class='fragment fade-right'><img src='img/jour-nuit.gif' width='150px'>L'alternance jour / nuit</p>\
        <p class='fragment fade-right'><img src='img/lune.gif' width='150px'>Le cycle lunaire</p>\
        <p class='fragment fade-right'>La ronde des saisons</p>\
        <p class='fragment fade-right'>Je vous propose de les voir à travers le site <a href='https://stellarium-web.org/' target='_blank'>stellarium-web.org</a><br>\
        en faisant défiler une année entière jour par jour à 8h00 du matin</p>\
    </section>"
    );

    // Cycles astronomiquesPréhistoire (3 cycles: journée, lune, année. La grotte de Lascaux)
    $("#lascaux").append("\
    <section>\
        La grotte de Lascaux, située dans la vallée de la Vézère en Dordogne, est l’une des plus importantes grottes ornées du Paléolithique supérieur\
        par le nombre et la qualité esthétique de ses peintures et gravures, principalement des représentations d’animaux.\
        Les peintures rupestres de Lascaux témoignent d’une longue tradition d’observation du ciel.\
        Les scientifiques ont découvert que les peintures rupestres représentent des constellations telles que le Taureau, Orion et les Pléiades.\
        Les hommes préhistoriques utilisaient probablement ces constellations pour suivre le temps et les saisons en observant les mouvements des étoiles.\
    </section>"
    );
    $("#lascaux").append("\
    <section>\
        C’est ensuite au Néolithique que de nouvelles preuves de l’intérêt de l’Homme pour l’étude du ciel apparaissent avec les mégalithes. Ces monuments constitués d’une ou plusieurs pierres de grande taille érigées sans mortier ni ciment auraient un rôle multiple : social et culturel, mais aussi astronomique.\
    </section>"
    );

}