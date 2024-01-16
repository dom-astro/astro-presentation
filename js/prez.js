

function initPrez() {
    const oeil = new Oeil();
    const lunette = new Lunette();
    const lunette2 = new Lunette2();
    const lunette3 = new Lunette3();
    const telescope = new Telescope();
    const newton = new Newton();
    const cassegrain = new Cassegrain();
    const schmidtCassegrain = new SchmidtCassegrain();

    Reveal.initialize({
        hash: true,
        width: 1300,
        height: 800,
        slideNumber: true,
        autoPlayMedia: true,

        // Learn about plugins: https://revealjs.com/plugins/
        plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
    });
}