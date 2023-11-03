function initPrez() {
    addLascaux();

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