$("#start").on("click", function () {
    game.begin();
})

var Questions = [{
    question: "Which Character can't speak to woman without drinking alcochol?",
    answers: ["Sheldon", "Howard", "Rajish", "Stewart"],
    correctAnswer: "Rajish"
}, {
    question: "What astronaut nickname was Howard given by the other Astronauts?",
    answers: ["Howie", "Rocket Man", "Froot Loops", "Toilet-Man"],
    correctAnswer: "Froot Loops"

}, {
    question: "For Halloween the guys all accidentally dressed as which super hero?",
    answers: ["Super Man", "Green Lanter", "Batman", "The Flash"],
    correctAnswer: "The Flash"
}, {
    question: "Who does Sheldon refer to as 'The Oompa Loompa of Science '?",
    answers: ["Astronomers", "Engineers", "Geologist", "Scientist"],
    correctAnswer: "Engineers"
}, {
    question: "Which of these characters always has to be driven everywhere?",
    answers: ["Penny", "Leonard", "Sheldon", "Bernadette"],
    correctAnswer: "Sheldon"
}, {
    question: "Which Cast Member has a PhD in real life?",
    answers: ["Sheldon", "Leonard", "Amy", "Bernadette"],
    correctAnswer: "Amy"
}, {
    question: "What does Sheldon's Meemaw call him ?",
    answers: ["Moon Pie", "Honeybun", "Little Genious", "Mr. spock"],
    correctAnswer: "Moon Pie"
}, {
    question: "Which character dressed up as sheldon for holloween?",
    answers: ["Leonard", "Howard", "Stewart", "Kripke"],
    correctAnswer: "Howard"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Times up!");
            game.finished();
        }
    },
    begin: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend("<h2> Time Remaining: <span id= 'counter'> 30 </span> Seconds </h2>");
        $("#start").remove();
        for (var i = 0; i < Questions.length; i++) {
            $("#subwrapper").append("<h2>" + Questions[i].question + "</h2>");
            for (var j = 0; j < Questions[i].answers.length; j++) {
                $("#subwrapper").append(" <input type = 'radio' name = 'question- " + i + " ' value= '" + Questions[i].answers[j] + " '> " + Questions[i].answers[j]);
            }
        }
    },
    finished: function () {
        $.each($("input[name = 'question-0']:checked "), function () {
            if ($(this).val() == Questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question-1']:checked "), function () {
            if ($(this).val() == Questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question- 2']:checked "), function () {
            if ($(this).val() == Questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question- 3']:checked "), function () {
            if ($(this).val() == Questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question- 4']:checked "), function () {
            if ($(this).val() == Questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question- 5']:checked "), function () {
            if ($(this).val() == Questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name = 'question- 6']:checked "), function () {
            if ($(this).val() == Questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name = 'question- 7']:checked "), function () {
            if ($(this).val() == Questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;

            }

        });
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $("subwrapper h2").remove();
        $("#subwrapper").html("<h2> Finished! </h2>");
        $("#subwrapper").append("<h3> Correct Answers : " + this.correct + "</h3>");
        $("#subwrapper").append("<h3> Incorrect Answers : " + this.incorrect + "</h3>");
    }

}







































