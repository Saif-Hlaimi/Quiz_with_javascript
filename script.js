// Questions et réponses
// Questions et réponses
var questions = [
    {
        question: "Qu'est-ce que Scrum ?",
        choices: ["Une méthode agile", "Un langage de programmation", "Un outil de gestion de projet"],
        correctAnswer: 0
    },
    {
        question: "Qui est le propriétaire du produit dans Scrum ?",
        choices: ["Scrum Master", "Product Owner", "Développeur"],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'un sprint dans Scrum ?",
        choices: ["Une course rapide", "Une période de développement", "Un type de bug"],
        correctAnswer: 1
    },
    {
        question: "Quel rôle le Scrum Master joue-t-il ?",
        choices: ["Gérer l'équipe", "Supprimer les obstacles", "Écrire le code"],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'un backlog produit dans Scrum ?",
        choices: ["Une liste de bugs", "Une liste de fonctionnalités à développer", "Un rapport de fin de projet"],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'une mêlée quotidienne dans Scrum ?",
        choices: ["Une réunion de planification", "Une pause café", "Une réunion de statut quotidienne"],
        correctAnswer: 2
    },
    {
        question: "Qu'est-ce qu'une revue de sprint dans Scrum ?",
        choices: ["Une réunion pour planifier le prochain sprint", "Une réunion pour discuter des problèmes du sprint actuel", "Une réunion pour présenter le travail accompli pendant le sprint"],
        correctAnswer: 2
    },
    {
        question: "Qu'est-ce qu'un tableau Scrum ?",
        choices: ["Un tableau pour suivre le progrès", "Un tableau pour noter les bugs", "Un tableau pour noter les idées"],
        correctAnswer: 0
    },
    {
        question: "Qu'est-ce qu'un incrément dans Scrum ?",
        choices: ["Une augmentation du budget", "Une version utilisable du produit", "Une augmentation de la taille de l'équipe"],
        correctAnswer: 1
    },
    {
        question: "Qu'est-ce qu'un propriétaire de produit dans Scrum ?",
        choices: ["La personne qui écrit le code", "La personne qui teste le code", "La personne qui définit les fonctionnalités du produit"],
        correctAnswer: 2
    }
];

// Le reste du code reste le même


// Variables pour suivre les questions et le score
var currentQuestion = 0;
var score = 0;

// Affiche la question actuelle
function displayQuestion() {
    var q = questions[currentQuestion];
    var questionElement = document.getElementById('question');
    questionElement.textContent = q.question;

    // Affiche les choix
    var choicesElement = document.getElementById('choices');
    choicesElement.innerHTML = '';
    for (var i = 0; i < q.choices.length; i++) {
        var choice = document.createElement('button');
        choice.textContent = q.choices[i];
        choice.onclick = checkAnswer.bind(null, i);
        choicesElement.appendChild(choice);
    }
}

// Vérifie la réponse
function checkAnswer(i) {
    var q = questions[currentQuestion];
    if (q.correctAnswer === i) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
        displayScore();
    } else {
        displayQuestion();
    }
}

// Affiche le score
function displayScore() {
    var scoreElement = document.getElementById('score');
    scoreElement.textContent = 'Votre score est ' + score + '/' + questions.length;
}

// Commence le quiz
displayQuestion();
