
// once i click start quiz the timer should start and the quiz starts to 
// need function for question to show up
// need function for timer to countdown
// need function to start quiz
// once button clicked the page should hide

//global tags
var startButton = document.getElementById('startButton');
var startPage = document.getElementById('startpage');
var timer= document.getElementById('timer');
var highScore= document.querySelector("#score")
var correct= document.getElementsByClassName('correct')
var wrong=document.getElementsByClassName("wrong")
//tags for quiz section
var section= document.createElement('section');
var questionTitle= document.createElement('h2');
var ul=document.createElement('ul');
var choice1=document.createElement('button');
var choice2=document.createElement('button');
var choice3=document.createElement('button');
var choice4=document.createElement('button');
//tags for gameover
var title = document.createElement('section');
var gameOverTitle= document.createElement('h2');
var scoreWord = document.createElement('div');
var restart=document.createElement('button');
var save=document.createElement('button');
// tags for logic
var timeLeft= 5;
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
          gameOver();
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

function gameOver(){
   questionTitle.className=("hide")
   ul.className=("hide")

   document.body.appendChild(title);
   title.appendChild(gameOverTitle);
   title.appendChild(scoreWord);
   title.appendChild(restart);
   title.appendChild(save);

   gameOverTitle.textContent=('Its Game Over Man');
   scoreWord.textContent=('Score: ', score );
   restart.textContent=('Restart')
   save.textContent=('Save Score')

  
   restart.addEventListener('click',function(event){
     var event= event.target;
     window.location.reload();
   })
  


}

// how do i get each item out of the array
function getAndShowAQuestion(){
    
    
    document.body.appendChild(section);
    section.appendChild(questionTitle);
    section.appendChild(ul);
    ul.appendChild(choice1);
    ul.appendChild(choice2);
    ul.appendChild(choice3);
    ul.appendChild(choice4);
    
    if (amount < questions.length){
      questionTitle.textContent=questions[amount].questionText;
      choice1.textContent=questions[amount].choices[0];
      choice2.textContent=questions[amount].choices[1];
      choice3.textContent=questions[amount].choices[2];
      choice4.textContent=questions[amount].choices[3];
    } else {
      gameOver();
    }   

  ul.addEventListener('click',function(event){
      var event = event.target;
      answers(event.textContent.trim());
    })
}
// need funtion to check if answer is right or wrong
function answers(event){
  if (amount >= questions.length){
    gameOver();
    clearInterval(timeInterval);
  } else {
    if (event === questions[amount].choices){
      correct.textContent=("Correct!");
    } else{
      timeLeft-=10;
      wrong.textContent=("Wrong!");
    }
    score=timeLeft;
    amount++;
    getAndShowAQuestion();
  }
}


startButton.addEventListener('click',startQuiz);

var questions =[
  {
    questionText: 'good to have as a pet',
    choices:['god','cat','unicorn','poiz'] ,
    rightAwnswer:'cat' 
  },
  {
    questionText: 'who willi you eat',
    choices:['pig','dog','hoires','people'] ,
    rightAwnswer:'people'
  },

]


    