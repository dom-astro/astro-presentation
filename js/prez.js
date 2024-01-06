

function initPrez() {
    const oeil = new Oeil();
    const lunette = new Lunette();
    //const cassegrain = new Cassegrain();

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