const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-test'));

let theQuestion = {};
let rightAnswers = true;
let score = 0;
let qCounter = 0;
let allAnswers = [];

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
const