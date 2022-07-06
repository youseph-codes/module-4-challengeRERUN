const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'));

let theQuestion = {};
let rightAnswers = true;
let points = 0;
let qCounter = 0;
let allQuestions = [];

let questions = [
    {
        question: 'What does "HTML" stand for?' ,
        choice1: 'hypertext markup link' ,
        choice2: 'hypertext markup language' ,
        choice3: 'hyperspeed text markup language' ,
        choice4: 'hypertext markup lingo' ,
        answer: 2
    },
    {
        question: 'Which of these is the correct sequence of HTML tags for starting a webpage?' ,
        choice1: 'HTML, head, title, body' ,
        choice2: 'HTML, head, body, title' ,
        choice3: 'HTML, body, head, title' ,
        choice4: 'head, title, body, HTML' ,
        answer: 1
    },
    {
        question: 'Which of these are the correct <tag> to create a paragraph?' ,
        choice1: '<paragraph>' ,
        choice2: '<par>' ,
        choice3: '<p-graph>' ,
        choice4: '<p>' ,
        answer: 4
    },
    {
        question: 'What does "CSS" stand for?' ,
        choice1: 'creative style sheet' ,
        choice2: 'cascading spread sheet' ,
        choice3: 'cascading style sheet' ,
        choice4: 'cascading standard stylelink' ,
        answer: 3
    },
    {
        question: 'Which of these is the correct character when referring to a class from an HTML to CSS?' ,
        choice1: '#' ,
        choice2: '$' ,
        choice3: '.' ,
        choice4: '*' ,
        answer: 3
    },
    {
        question: 'Which of these is NOT a CSS style component?' ,
        choice1: 'Estimate' ,
        choice2: 'Selector' ,
        choice3: 'Value' ,
        choice4: 'Property' ,
        answer: 1
    },
    {
        question: 'Which CSS property is used to make a text appear in bold?' ,
        choice1: 'style: bold' ,
        choice2: 'font: bold' ,
        choice3: 'text-decoration: bold' ,
        choice4: 'font-weight: bold' ,
        answer: 4
    },
    {
        question: '"padding: 10px 50px" will apply to which sides?' ,
        choice1: 'top and bottom' ,
        choice2: 'vertical and horizontal' ,
        choice3: 'top and right' ,
        choice4: 'left and right' ,
        answer: 2
    },
    {
        question: 'Which of these is not a primitive value?' ,
        choice1: 'boolean type' ,
        choice2: 'undefined tyoe' ,
        choice3: 'number type' ,
        choice4: 'list type' ,
        answer: 4
    },
    {
        question: 'What are arrays in JavaScript?' ,
        choice1: 'an ordered list of values' ,
        choice2: 'an unordered list of values' ,
        choice3: 'an ordered list of functions' ,
        choice4: 'an unordered list of functions' ,
        answer: 1
    },
    {
        question: 'What tag accurately links the HTML file to a JavaScript file?' ,
        choice1: '<javascript src=" " >' ,
        choice2: '<script src=" " >' ,
        choice3: '<java src=" " >' ,
        choice4: '<script url=" " >' ,
        answer: 2
    },

]

const correctPoints = 10;
const maxQuestions = 11;

startGame = () => {
    qCounter = 0;
    points = 0;
    allQuestions = [...questions];
    // console.log(allQuestions);
    newQuestion();
}

newQuestion = () => {

    if(allQuestions.length == 0 || qCounter > maxQuestions){
        return window.location.assign('/end.html')
    }
    qCounter++;
    const questionOptions = Math.floor(Math.random() * allQuestions.length);
    theQuestion = allQuestions[questionOptions];
    question.innerText = theQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = theQuestion['choice' + number];
    });

    allQuestions.splice(questionOptions, 1);

    rightAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!rightAnswers) return;

        rightAnswers = false;
        const pickedChoice = e.target;
        const pickedAnswer = pickedChoice.dataset['number'];

        const classApply = pickedAnswer ==theQuestion.answer ? 'correct' : 'incorrect';

        console.log(classApply)

        pickedChoice.parentElement.classList.add(classApply);
        pickedChoice.parentElement.classList.remove(classApply);

        newQuestion();

        
    });
});

startGame();