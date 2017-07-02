 var score =0;
var i=0;
var quizs = [];
var currentQuestion = 0;

function Quiz() {
   document.getElementById("progress").innerHTML= "Question " + 1 +" out of " + 8;
this.quizs = quizs;


Quiz.prototype.add = function(quiz) {
this.quizs.push(quiz);
  Name();
};


//zählt die Fragen hoch.



//antwort A mit evaluation und Punkte hochzählen
Quiz.prototype.choice0 = function() {

 
  if(currentQuestion <= 6) {
     
    
    Name();
    
  
  if(this.quizs[currentQuestion].answer == 0)   {
        Name();
    currentQuestion++;
    Name();
      
      document.getElementById("progress").innerHTML= "Question " + (currentQuestion+1) +" out of " + quizs.length;
    score++;
    console.log("Answer A"+ currentQuestion + " out of " + this.quizs.length +  "is correct" + " you now have " + score +" points");
  }
    
    else {
          currentQuestion++;
    Name();
    document.getElementById("progress").innerHTML= "Question " + (currentQuestion+1) +" out of " + quizs.length;}
  }
 else {
        if(this.quizs[currentQuestion].answer == 0) {
          score++;}
      
      alert("You have finished the quiz and you have scored " + score + " out of " + quizs.length);
    }
  
}

  
          
//antwort b
  Quiz.prototype.choice1 = function() {
    
    if(currentQuestion <= 6) {
        
  

    Name();
    
  if(this.quizs[currentQuestion].answer == 1) {
    currentQuestion++;
    Name();
      document.getElementById("progress").innerHTML= "Question " + (currentQuestion+1) +" out of " + quizs.length;
    Name();
   score++;
 
               
     }   else {
          currentQuestion++;
     Name();
     document.getElementById("progress").innerHTML= "Question " + (currentQuestion+1) +" out of " + quizs.length;}      
    }
     else {
        if(this.quizs[currentQuestion].answer == 1) {
          score++;}
      
      alert("You have finished the quiz and you have scored " + score + " out of " + quizs.length);
    }
  }
}

  Quiz.prototype.choice2 = function() {
    
    if(currentQuestion <= 6) {
   

  Name();

    
  if(this.quizs[currentQuestion].answer == 2) {
        currentQuestion++;
      document.getElementById("progress").innerHTML= "Question " + (currentQuestion+1) +" out of " + quizs.length;
    Name();
   score++;
 
               
     }  else {
          currentQuestion++;
     Name();
     document.getElementById("progress").innerHTML= "Question " + (currentQuestion+1) +" out of " + quizs.length;}       
    }
     else {
        if(this.quizs[currentQuestion].answer == 2) {
          score++;}
      
      alert("You have finished the quiz and you have scored " + score + " out of " + quizs.length);
    }
  }

  Quiz.prototype.choice3 = function() {
    
    if(currentQuestion <= 6) {
 

  Name();

    
  if(this.quizs[currentQuestion].answer == 3) {
        currentQuestion++;
      document.getElementById("progress").innerHTML= "Question " + (currentQuestion+1) +" out of " + quizs.length;
    Name();
   score++;
 
               
     }     else {
          currentQuestion++;
     Name();
     document.getElementById("progress").innerHTML= "Question " + (currentQuestion+1) +" out of " + quizs.length;}    
    }
    else {
        if(this.quizs[currentQuestion].answer == 3) {
          score++;}
      
      alert("You have finished the quiz and you have scored " + score + " out of " + quizs.length);
    }
  }





