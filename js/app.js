'use strict';
// DONE Must contain a 'use strict' declaration at the top
// DONE javascript file must be linked in your html file as an external script file.

// DONE -Ask the user their name through a prompt()
// DONE Display that name back to the user through a custom greeting welcoming them to your site.

// DONE - ask 5 y/n questions
// DONE - user input for the answer must accept either y/n or yes/no responses
// DONE - user input must be normalized for case sensitivity so that it can be validated (hint: look into the .toUpperCase() or .toLowerCase() functions)
// DONE - let the user know if they answered the question correctly by alerting them with a response.
// DONE - answer via console.log in string concatenation to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.
// DONE Display the user’s name back to them in your final message to the user.

// DONE Make sure that all code is cleanly written with correct indentation and syntax. Look at examples online and in your textbook. Note that your JS must pass the rules in the linter that we installed.

// DONE Follow the Add, Commit, Push process. It should be evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.

// LAB 03

// DONE Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever top ten list that you wish. (top ten goals dreams aspirations)
// DONE Convert your work experience and education summary into an unordered list using HTML
// DONE Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// DONE Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

// In addition to the user stories stated above, continue to use console.logs throughout the code to track the questions that are being asked to the user, and add addtional CSS to style your HTML page.

// Stay within scope of what was taught so far in class. Do not write functions within your application. Avoid the use of “helper” methods such as .includes() and .join(). Work with the instructional staff directly if you have questions about this requirement.
// Stretch Goals

// After completing all of the requirements listed above, you may optionally challenge yourself further by implementing some or all of the following into your application.

// Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
// Make the number-guessing question use a random number as its correct answer.

// ----previous lab
var questionsLeft = 7;
var totalScore = 0;
var userName = prompt('Hi! Welcome to this About Me guessing game. Before we load the page, would you tell me the name you\'d like to be called?');
if (userName === '' || userName === null) {
  alert("OK. Then I'll call you Phil");
  userName = "Phil";
}
alert('Please accept this as my warm welcome, ' + userName);

var question1 = prompt('Am I wearing a tophat right at this moment? (Answer y/n or yes/no)').toLowerCase();
if (question1 === 'no' || question1 === 'n') {
  alert('That\'s Correct!');
  totalScore += 1;
} else {
  alert('Actually, no, but I would like to someday.')
}
questionsLeft--;
var question2 = prompt('Is my favorite color gamboge? (Answer y/n or yes/no)').toLowerCase();
// thinking of another way to do this, check if it's in an array rather than typing out || for each IF
// var validYes = ['yes', 'y'];
// var validNo = ['no', 'n'];

if (question2 === 'yes' || question2 === 'y') {
  alert('That\'s Correct!');
  totalScore += 1;
} 

if (totalScore > 1) {
  alert(`Awesome, ${userName}. That's two in a row!`);
}
questionsLeft--;
var question3 = prompt('Did I grow up in rural Oklahoma?').toLowerCase();
if (question3 === 'yes' || question3 === 'y') {
  alert('That\'s Correct!');
}
questionsLeft--;
var question4 = prompt('Did I go to graduate school in southern New Mexico?').toLowerCase();
if (question4 === 'yes' || question4 === 'y') {
  alert('That\'s Correct!');
  totalScore += 1;
}
questionsLeft--;
var question5 = prompt('Am I working to become a future Java developer?').toLowerCase();
if (question5 === 'yes' || question5 === 'y') {
  alert('That\'s Correct!');
  totalScore += 1;
}
questionsLeft--;

if (totalScore >=5) {
  alert(`Awesome! Thus far, you have discovered my secret pattern of answering "yes" to everything. Let's see if you can keep up your perfect score with these ${questionsLeft} final questions`)
} else {alert(`Thank you for tolerating my series of popup messages, ${userName}. However, there are still two more to go. Take a deep breath. Thus far, you have earned ${totalScore} points.`);
}

// --end previous lab

// // QUESTION 6
var secretNumber = "3"; // i'd be interested to have this be a variable based on a random number function.
for (var i = 4; i > 0; i--) {
  var question6 = prompt(`Guess a number from one to ten. You have ${i} tries left.`);
    if (question6 === secretNumber) {
      alert(`You nailed it!`);
      totalScore += 1;
      break;
    } else if (question6 === '') {
      alert(`Please enter a number.`);
      i++;
    } else if (question6 < Number(secretNumber)) {
      alert(`Too low. Try again.`);
    } else if (question6 > Number(secretNumber)) {
      alert(`Too high. Try again.`);
    } else { 
      alert(`Number must be entered in numerical form, between 1 and 10`)}
}
alert(`The correct number was ${secretNumber}`);

// QUESTION 7
questionsLeft--;
var guessingGameAnswers = ['Las Cruces', 'Stillwater', 'Sebastopol', 'Berkeley', 'Denver'];
var guessingGameTries = 6;

alert(`For our next game, I'll ask you to guess a city I have lived in. You have ${guessingGameTries} tries to get one right.`);
for (var k = 0; k < guessingGameTries; k++) {
  var guessingGameGuess = prompt(`Enter your guess: `);
  for (var j = 0; j < guessingGameAnswers.length; j++) {
    if (guessingGameGuess.toLowerCase() === guessingGameAnswers[j].toLowerCase()) {
      totalScore += 1;
      alert(`That's correct!`);
      break;
      }
    } break;
}

alert(`Here were the possible correct answers: ${guessingGameAnswers}`) //improve this by iterating through the array in a single alert.

if (totalScore > 0) {
  alert(`Awesome, ${userName}! Your final score: ${totalScore} out of 7.`); 
} else {alert(`You didn't get any answers right, ${userName}, but I still think you're a great person.`);
}


      // giving multiple correct tries may only work if there's a function, not a for loop (I think)
      // var continueGuessing = prompt(`You got it right! Would you like to quit... or try for more? You have ${i} guesses left. (Enter y/n)`);
      // if (continueGuessing.toLowerCase() === 'y' || continueGuessing.toLowerCase() !== 'yes') {