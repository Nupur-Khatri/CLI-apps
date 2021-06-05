var readlineSync = require("readline-sync");
var score =0;
var username = readlineSync.question("What is your name?");
console.log("Welcome "+ username +" to DO YOU KNOW NUPUR ?");
console.log("Give your answer in a single number chosing from the options")

// play function 

function play(question,answer) {
  var useranswer = readlineSync.question(question);

  if(useranswer == answer){
    console.log("Right");
    score = score + 1;
  }
  else {
    console.log("Wrong")
  }

  console.log("current score: ",score);
  console.log("-------------------------------")
}

//array of objects
var questions = [ {
  question: "What is my Nickname in college? 1)Sezuka 2)chakli",
  answer: "2"
},{
  question: "What is my favourite Timepass? 1)Whatsaap or 2)Instagram",
  answer: "2"
},{
  question: "Which is the best place to me if i am given an optin for vacation at 1)Darjeeling 2)Kerala 3)Sikkim GIVE YOUR ANSWER BY TYPING THE NAME OF PLACE",
  answer: "1"
},{
  question: "Which is my Favourite ICE CREAM? 1)Chocolate 2)butterscotch 3)Rajbhog",
  answer: "2"
},{
  question: "Do I consume most milk products or not? 1)YES 2)NO",
  answer: "2"
},{
  question: "My favourite person? no options write by yourself",
  answer: "jj"
}];

// loop

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("YAY! You scored : ",score);