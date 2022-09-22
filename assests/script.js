
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
var correct= document.querySelector('.correct')
var wrong=document.querySelector(".wrong")
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
var timeLeft= 100;
var amount= 0;
var s =0;
var score=[];
var timeInterval;

var questions =[
  {
    questionText: 'Javascript is an _______ language?',
    choices:['Object-Oriented','Object-Based','Procedural','None of the above'] ,
    rightAnswer:'Object-Oriented' 
  },
  {
    questionText: 'Which of the following keywords is used to define a variable in Javascript?',
    choices:['pig','dog','var','None of the above'] ,
    rightAnswer:'var'
  },
  {
    questionText:'Upon encountering empty statements, what does the Javascript Interpreter do?',
    choices:['Throws an error','Ignores the statement','Gives a warning','None of the above'],
    rightAnswer:'Ignores the statement',
  },
  {
    questionText:'Which of the following methods can be used to display data in some form using Javascript?',
    choices:['document.write()','console.log()','window.alert()','All of the above'],
    rightAnswer:'All of the above',
  },
  {
    questionText:'How can a datatype be declared to be a constant type?',
    choices:['const','var','let','constant'],
    rightAnswer:'const',
  },
  {
    questionText:'What keyword is used to check whether a given property is valid or not?',
    choices:['is in','in','exist','lies'],
    rightAnswer:'in',
  },
  {
    questionText:'What is the use of the <noscript> tag in Javascript?',
    choices:['The contents are displayed by non-JS-based browsers','Clears all the cookies and cache','Both A and B','None of the above'],
    rightAnswer:'The contents are displayed by non-JS-based browsers',
  },
  {
    questionText:'When an operator value is NULL, the typeof returned by the unary operator is:',
    choices:['Boolean','Undefined','Object','Integer'],
    rightAnswer:'Boolean',
  },
  {
    questionText:'What does the Javascript “debugger” statement do?',
    choices:['it will debug all the errors in the program at runtime','It acts as a breakpoint in a program','It will debug error in the current statement if any', 'All of the above'],
    rightAnswer:'It acts as a breakpoint in a program',
  },
  {
    questionText:'Which function is used to serialize an object into a JSON string in Javascript?',
    choices:['stringify()','parse()','convert()','None of the above'],
    rightAnswer:'stringify()',
  },


]

// function so highscore is always on screen after refreash
window.onload=function(){
  let score= localStorage.getItem('highscore');
  highScore.textContent=score;
};

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
// game over function 
function gameOver(){
   questionTitle.className=("hide")
   ul.className=("hide")

   document.body.appendChild(title);
   title.appendChild(gameOverTitle);
   title.appendChild(scoreWord);
   title.appendChild(restart);
   title.appendChild(save);

   gameOverTitle.textContent=('Its Game Over Man');
   scoreWord.textContent=("Score:"+ score);
   
   restart.textContent=('Restart');
   save.textContent=('Save Score');

  //  correct.className=('hide')

   restart.addEventListener('click',function(event){
     var event= event.target;
     window.location.reload();
   })
  
   save.addEventListener('click', function(event){
    localStorage.setItem('highscore', score)
    localStorage.getItem('highscore')
    highScore.textContent=score;
    

   })


}

// how do i get each item out of the array
// get and show question function
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

 
}


// need funtion to check if answer is right or wrong
function answers(event){
  if (amount >= questions.length){
    gameOver();
    clearInterval(timeInterval);
  } else {
    if (event === questions[amount].rightAnswer){
      correct.textContent="Correct!";
    } else{
      timeLeft-=10;
      correct.textContent="Wrong!";
    }
    score=timeLeft;
    amount++;
    getAndShowAQuestion();
  }
}

ul.addEventListener('click',function(event){
  var event = event.target;
  answers(event.textContent.trim());
})

startButton.addEventListener('click',startQuiz);



    