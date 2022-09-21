
// once i click start quiz the timer should start and the quiz starts to 
// need function for question to show up
// need function for timer to countdown
// need function to start quiz 


// once button clicked the page should hide

var currentscore=0;
var secondsRemaining=120;
var startButton = document.getElementById('startButton');
var startPage = document.getElementById('startpage');

startButton.addEventListener('click',startQuiz);


function startQuiz(){
    console.log('Started');
    startButton,startPage.classList.add('hide');
    showAQuestion();
}



// how do i get each item out of the array
function showAQuestion(){
    
    var section= document.createElement('section');
    var questionTitle= document.createElement('h2');
    var ul=document.createElement('ul');
    var choice1=document.createElement('li');
    var choice2=document.createElement('li');
    var choice3=document.createElement('li');
    var choice4=document.createElement('li');

    document.body.appendChild(section);
    section.appendChild(questionTitle);
    section.appendChild(ul);
    ul.appendChild(choice1);
    ul.appendChild(choice2);
    ul.appendChild(choice3);
    ul.appendChild(choice4);
    
    questionTitle.textContent=questions[0].questionText
    choice1.textContent=questions[0].choices[0]

    

    
    
}




var questions =[
  {
  
    questionText: 'Placeholder question number one',
    choices:['god','cat','unicorn','poiz'] ,
    rightAwnswer:1 
  },
  {
    questionText: 'Placeholder question number sjdfkjs',
    choices:['god','cat','unicorn','poiz'] ,
    rightAwnswer:1 
  },

]
console.log(questions[1].questionText)


    function countdownTimer(){
        var countdown=setInterval(function(){
            secondsLeft--;
            if (secondsLeft===0){
                clearInterval(secondsLeft)
                // functino for the end of quiz here
            }
        },1000)
    }
    
    
    
    