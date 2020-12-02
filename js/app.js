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


var userName = prompt('Hi! Welcome to this About Me guessing game. Before we load the page, would you tell me the name you\'d like to be called?');
if (userName === '') {
  alert("OK. Then I'll call you Phil");
  userName = "Phil";
}
alert('Please accept this as my warm welcome, ' + userName);

var question1 = prompt('Am I wearing a tophat right at this moment? (Answer y/n or yes/no)').toLowerCase();
if (question1 === 'no' || question1 === 'n') {
  alert('That\'s Correct!');
} else {
  alert('Actually, no, but I would like to someday.')
}

var question2 = prompt('Is my favorite color gamboge? (Answer y/n or yes/no)').toLowerCase();
// thinking of another way to do this, check if it's in an array rather than typing out || for each IF
// var validYes = ['yes', 'y'];
// var validNo = ['no', 'n'];

if (question2 === 'yes' || question2 === 'y') {
  alert('That\'s Correct!');
} 

// could increment a points value as well here, giving different messages if the previous one was also correct "TWO in a ROW" etc.

var question3 = prompt('Did I grow up in rural Oklahoma?').toLowerCase();
if (question3 === 'yes' || question3 === 'y') {
  alert('That\'s Correct!');
}
var question4 = prompt('Did I go to graduate school in southern New Mexico?').toLowerCase();
if (question4 === 'yes' || question4 === 'y') {
  alert('That\'s Correct!');
}
var question5 = prompt('Am I working to become a future Java developer?').toLowerCase();
if (question5 === 'yes' || question5 === 'y') {
  alert('That\'s Correct!');
}

alert('Thank you for tolerating my series of popup messages, ' + userName);







