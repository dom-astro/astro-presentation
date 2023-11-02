function initTimeline() {

    $(".timeline__items").empty();
    addPrehistoire();
    addEgypte();
    addMesopotamie();
    addAntiquite();
    addAgeDor();
    addRevCopernic();

    jQuery('.timeline').timeline({
        mode: 'horizontal',
        visibleItems: 4,
        forceVerticalMode: 800,
        startIndex: 0,
        moveItems: 4
    });

    /*setInterval(() => {
        if( location.href.split("#/").pop()=="1" ) {
            Reveal.sync();
        }
    }, 100);*/
}

function addPrehistoire() {
    $(".timeline__items").append(
       '<div class="timeline__item"> \
            <div class="timeline__content" style="display: grid; gap: 5px; /*background-color: #0a467ea8;*/">\
                <div style="grid-column: 1 / 3; grid-row: 1;">\
                    <img src="img/Lascaux-Taureau.jpg" width="100px">\
                </div>\
                <div style="grid-column: 5 / 12; grid-row: 1;">\
                    <h2>Préhistoire</h2>\
                    <span>Lascaux</span>\
                    <p>-18.000  av. J.C.</p>\
                </div>\
            </div>\
        </div>'
    );
}

function addEgypte() {
    $(".timeline__items").append(
       '<div class="timeline__item">\
            <div class="timeline__content" style="display: grid; gap: 5px;">\
                <div style="grid-column: 1 / 3; grid-row: 1;">\
                    <img src="img/deesse_nout.png" width="100px" height="75px">\
                </div>\
                <div style="grid-column: 5 / 12; grid-row: 1;">\
                    <h2>Egypte</h2>\
                    <span>Déesse Nout</span>\
                    <p>-2.000 av. J.C.</p>\
                </div>\
            </div>\
        </div>'
    );
}
    
function addMesopotamie() {
    $(".timeline__items").append(
       '<div class="timeline__item">\
            <div class="timeline__content" style="display: grid; gap: 5px;">\
                <div style="grid-column: 1 / 3; grid-row: 1;">\
                    <img src="img/Mesopotamie-tablette.jpg" width="100px" height="75px">\
                </div>\
                <div style="grid-column: 5 / 12; grid-row: 1;">\
                    <h2>Mésopotamie</h2>\
                    <span>Les constellations</span>\
                    <p>-1.000 av. J.C.</p>\
                </div>\
            </div>\
        </div>'
    );
}
    
function addAntiquite() {
    $(".timeline__items").append(
       '<div class="timeline__item">\
            <div class="timeline__content" style="display: grid; gap: 5px;">\
                <div style="grid-column: 1 / 3; grid-row: 1;">\
                    <img src="img/Antiquite-sphere-armillaire.png" width="75px" height="75px">\
                </div>\
                <div style="grid-column: 5 / 12; grid-row: 1;">\
                    <h2>Antiquité</h2>\
                    <span>Géocentrisme</span>\
                    <p>-600 -> -100  av. J.C.</p>\
                </div>\
            </div>\
        </div>'
);
}
    
function addAgeDor() {
    $(".timeline__items").append(
       '<div class="timeline__item">\
            <div class="timeline__content" style="display: grid; gap: 5px;">\
                <div style="grid-column: 1 / 3; grid-row: 1;">\
                    <img src="img/grande-ourse.jpg" width="100px" height="75px">\
                </div>\
                <div style="grid-column: 5 / 12; grid-row: 1;">\
                    <h2>Age d\'or arabe</h2>\
                    <span>Etoiles et mesures</span>\
                    <p>IXème -> XIIème siècle</p>\
                </div>\
            </div>\
        </div>'
    );
}
    
function addRevCopernic() {
    $(".timeline__items").append(
       '<div class="timeline__item">\
            <div class="timeline__content" style="display: grid; gap: 5px;">\
                <div style="grid-column: 1 / 3; grid-row: 1;">\
                    <img src="img/heliocentrisme.jpg" width="100px" height="75px">\
                </div>\
                <div style="grid-column: 5 / 12; grid-row: 1;">\
                    <h2>Révolution copernicienne</h2>\
                    <span>Héliocentrisme</span>\
                    <p>XVIème -> XVIIIème siècle</p>\
                </div>\
            </div>\
        </div>'
    );
}
    

/*

*/