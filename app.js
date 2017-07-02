//hier werden die Fragen für die funktion Question in Question.js erstellt. Danach mit add zum QuestionArray hinzugefügt

var quiz = new Quiz();
var question1 = new Question("Which city has the most clubs competing in its country's top division?",1,"Toyko", "London","Moscow", "Rome");

var question2 = new Question("In which country would you find the world's largest football stadium (by capacity)?",0,"North Korea", "Spain", "Mexico", "China");

var question3 = new Question("Which club have won the most Serie A titles? ",3,"Roma","Milan","Internazionale","Juventus");

var question4 = new Question("In what year did a Dutch team last win a European club competition? ",2,"1978","1997","2002","2013");

var question5 = new Question("Who are the only international team to have retained the European Championship? ",2,"West Germany","Holland","Spain","Germany");

var question6 = new Question("Who is the only goalkeeper to have won the Ballon d'Or?",1,"Peter Shilton","Lev Yashin","Iker Casillas"," Gianluigi Buffon");

var question7 = new Question("Which country finished fourth in the World Cup in 2014? ",3,"Italy","Holland","Argentina","Brazil");

var question8 = new Question("Who is the European Championship's all-time top scorer?",2,"Marco van Basten","Thierry Henry","Michel Platini","Alan Shearer");
quiz.add(question1);
quiz.add(question2);
quiz.add(question3);
quiz.add(question4);
quiz.add(question5);
quiz.add(question6);
quiz.add(question7);
quiz.add(question8);

//ersterButton 
var firstButton = document.getElementById("guess0");
if( currentQuestion < 7) {
  Name();
  
  

firstButton.onclick = function () {
quiz.choice0();
  


}
}
else {
  alert("You have answered all those 3 questions already");
}
//Zweiter Button, öffnet choice1 

var secondButton = document.getElementById("guess1");
if( currentQuestion < 7) {
  Name();
  
secondButton.onclick = function () {
quiz.choice1();
}
}
else {
  alert("You have answered all those 3 questions already");
}


//Dritter Button, öffnet choice2 
var dritterButton = document.getElementById("guess2");
if( currentQuestion < 7) {
  Name();
dritterButton.onclick = function () {
quiz.choice2();
  
  

 // quiz.renderInElement(questionElement);
}
}
else {
  alert("You have answered all those 3 questions already");
}
//Vierter Button, öffnet choice3 

var fourthButton = document.getElementById("guess3");
if( currentQuestion < 7) {
  Name();
fourthButton.onclick = function () {
quiz.choice3();
  
  

 // quiz.renderInElement(questionElement);
}
}
else {
  alert("You have answered all those 3 questions already");
}





function Name() {
  document.getElementById("question").innerHTML= this.quizs[currentQuestion].quest;
   document.getElementById("guess1").innerHTML= this.quizs[currentQuestion].choiceB;  
 document.getElementById("guess0").innerHTML= this.quizs[currentQuestion].choiceA;
   document.getElementById("guess2").innerHTML= this.quizs[currentQuestion].choiceC;
   document.getElementById("guess3").innerHTML= this.quizs[currentQuestion].choiceD;



}
