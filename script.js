var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        select: ["<script>", "<javascript>", "<scripting>", "<js>"],
        answer: "<script>"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        select: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        select: ["alert('Hello World')", "msg('Hello World')", "alertBox('Hello World)"],
        answer: "alert('Hello World')"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        select: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        select: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];
// variables counter
var score = 0;
var choiceInd = 0;

// coding 
var starQuiz = document.querySelector("#frame");
var starTimer = document.querySelector("#startButton");
var content = document.querySelector("#content");
var section = document.querySelector("#section");

// 10 seconds per question:
var timeLeft = 50;
var timerInterv = 0;
var sanction = 10;

var ulQuest = document.createElement("h3");

starTimer.addEventListener("click", function () {

    if (timerInterv === 0) {
        timerInterv = setInterval(function () {
            timeLeft--;
            starQuiz.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerInterv);
                allDone();
                starQuiz.textContent = "Time is over";
                
            }
        }, 1000);
    }
    render(choiceInd);
});

// Renders questions 
function render(choiceInd) {
    // Clear data 
    content.innerHTML = "";
    ulQuest.innerHTML = "";

    // For loops arrays
    for (var i = 0; i < questions.length; i++) {
        
        var userQuestion = questions[choiceInd].question;
        var userChoices = questions[choiceInd].select;
        content.textContent = userQuestion;
    }
    // New for each for question select
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        content.appendChild(ulQuest);
        ulQuest.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare select with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[choiceInd].answer) {
            score++;
            createDiv.textContent = "Correct!";
            // Correct condition 
        } else {
            // penalty
            timeLeft = timeLeft - sanction;
            createDiv.textContent = "Wrong!";
        }

    }
    // determines number question user is on
    choiceInd++;

    if (choiceInd >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "Quiz is over!" + " " + "You got  " + score + "/" + questions.length + " Corrects!";
    } else {
        render(choiceInd);
    }
    content.appendChild(createDiv);

}
// All done will append last page
function allDone() {
    content.innerHTML = "";
    starQuiz.innerHTML = "";

    
    var textDone = document.createElement("h1");
    textDone.setAttribute("id", "textDone");
    textDone.textContent = "CONGRATULATIONS YOU DID IT!!"

    content.appendChild(textDone);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    content.appendChild(createP);

    // time remaining and score
    if (timeLeft >= 0) {
        var timeRemaining = timeLeft;
        var createP2 = document.createElement("p");
        clearInterval(timerInterv);
        createP.textContent = "Your score is: " + timeRemaining;

        content.appendChild(createP2);
    };

    // Label
    var newLabel = document.createElement("label");
    newLabel.setAttribute("id", "newLabel");
    newLabel.textContent = "Enter your Initials: ";

    content.appendChild(newLabel);

    // input
    var inputDone = document.createElement("input");
    inputDone.setAttribute("type", "text");
    inputDone.setAttribute("id", "userInitials");
    inputDone.textContent = "";

    content.appendChild(inputDone);

    // submit score 
    var sendIt = document.createElement("button");
    sendIt.setAttribute("type", "submit");
    sendIt.setAttribute("id", "submit");
    
    sendIt.textContent = "submit";

    content.appendChild(sendIt);

    //UserInitials and local storage for score Save high school
    sendIt.addEventListener("click", function () {
       //saving the value of the INitials in  a variable
        var userInitials = inputDone.value;
//make sure it is not empty
        if (userInitials !== null) { 
            
            console.log("No value entered!");
        
//get saved socres from the loval storage
    var highScore = JSON.parse(window.localStorage.getItem("HighScore")) || [];

    var finalScore = {
        userInitials: userInitials,
        score: timeRemaining
    };
        
        highScore.push(finalScore);

        console.log(highScore)

        window.localStorage.getItem("HighScore", JSON.stringify(highScore))

        var textScore = document.createElement("div");
        textScore.setAttribute("id", "div");
        textScore.textContent = "HIGH SCORES!!:" + " " + userInitials + "" + timeRemaining;
    
        content.appendChild(textScore);
    

    };

       
});

};