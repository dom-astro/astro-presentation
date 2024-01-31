class Question {
    constructor() {
        this.class=".question";
        this.references=[];
        this.write();
    }
    
    /* Introduction */
    intro() {
        $(this.class).append("\
        <section style='text-align: center;'>\
            <img src='img/question-saturne.jpg' class='rounded' style='position: relative; width: 650px; top: -50px;'>\
        </section>"
        );
    }

    write() {
        this.intro();
    }
}