
// once i click start quiz the timer should start and the quiz starts to 
// need function for question to show up
// need function for timer to countdown
// need function to start quiz
// once button clicked the page should hide


var startButton = document.getElementById('startButton');
var startPage = document.getElementById('startpage');
var timer= document.getElementById('timer');
var highScore= document.querySelector("#score")


var timeLeft= 100;
var amount= 0;
var s =0;
var score=[];
var timeInterval;


// countdown timer
function countdownTimer(){
  timeInterval=setInterval(function(){
      timeLeft--;
      timer.textContent= timeLeft;
      if (timeLeft===0 || amount >= questions.length){
          clearInterval(timeInterval)
          // functino for the end of quiz here
      }
  },1000)
}



// one you start the quiz the start page should hide
// a question should show up
// timer should start counting down

function startQuiz(){
    console.log('Started');
    startButton,startPage.classList.add('hide');
    getAndShowAQuestion();
    countdownTimer();
}



// how do i get each item out of the array
function getAndShowAQuestion(){
    
    var section= document.createElement('section');
    var questionTitle= document.createElement('h2');
    var ul=document.createElement('ul');
    var choice1=document.createElement('button');
    var choice2=document.createElement('button');
    var choice3=document.createElement('button');
    var choice4=document.createElement('button');

    document.body.appendChild(section);
    section.appendChild(questionTitle);
    section.appendChild(ul);
    ul.appendChild(choice1);
    ul.appendChild(choice2);
    ul.appendChild(choice3);
    ul.appendChild(choice4);
    
    if (amount < questions.length){
      questionTitle.textContent=questions[amount].questionText
      choice1.textContent=questions[amount].choices[0];
      choice2.textContent=questions[amount].choices[1];
      choice3.textContent=questions[amount].choices[2];
      choice4.textContent=questions[amount].choices[3];
    } else{
      // gameover funciotn here
    }   
}
// need funtion to check if answer is right or wrong
function answers(event){
  if (amount >= questions.length){
    // game over funcion here
    clearInterval(timeInterval);
  } else {
    if (event === questions[amount].choices){
      alert("Correct!");
    } else{
      timeLeft-=10;
      alert("Wrong!");
    }
    score=timeLeft;
    amount++;
    getAndShowAQuestion();
  }
}
//game over funciton 
function gameOver(){
   
}
 
startButton.addEventListener('click',startQuiz);

var questions =[
  {
    questionText: 'Placeholder question number one',
    choices:['god','cat','unicorn','poiz'] ,
    rightAwnswer:'cat' 
  },
  {
    questionText: 'Placeholder question number sjdfkjs',
    choices:['god','cat','unicorn','poiz'] ,
    rightAwnswer:'unicorn'
  },

]


    