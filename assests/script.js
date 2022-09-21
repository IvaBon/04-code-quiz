
// once i click start quiz the timer should start and the quiz starts to 
// need function for question to show up
// need function for timer to countdown
// need function to start quiz 


// once button clicked the page should hide

var currentscore=0;
var secondsRemaining=120;
var startButton = document.getElementById('startButton');
var startPage = document.getElementById('startpage');
// var currQuestionObj = questions[i]
var h2
startButton.addEventListener('click',startQuiz);


function startQuiz(){
    console.log('Started');
    startButton,startPage.classList.add('hide');
    
}
// how do i get each item out of the array
function showAQuestion(){
    
    
    console.log("quesiton would appear")
}


function countdownTimer(){
    var countdown=setInterval(function(){
        secondsLeft--;
        if (secondsLeft===0){
            clearInterval(secondsLeft)
            // functino for the end of quiz here
        }
    },1000)
}


    



var questions = [
    {
        question: "Placeholder question number one",
        answers:[
           a = "answer1",
           b = "asnwer2",
           c = "asnwer",
           d = "asndwer",
        ]
        , correctAnswer: 'b'
    },

    {
        question: "Question placeholder number two",
        answers:[
            a="answr",
            b="asnwer",
            c="asnwerd",
            d="andkl",
        ]
        , correctAnswer:'a'
    }
]




