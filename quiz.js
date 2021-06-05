const readline = require("readline");
const chalk=require("chalk");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("Welcome to Nupur's quiz on Vitamins");


/**
 * list of something is an array
 */

const queBank = [
	{
    question: " Which vitamin does Spinach have? 1)Vitamin A  2)Potassium ",
    answer: "2"
  },
  {
    question: "Which vitamin does peas have? 1)Magnesium 2)Vitamin E ",
    answer: "1"
  },
  {question: "Which vitamin does kiwi have? 1)Vitamin C 2)Vitamin D ",
    answer: "1"
  }
];

let questionIndex = 0;

function question() {
	rl.question(queBank[questionIndex].question, (answer) => {
		console.log(`You answered: ${answer}`);

		if (answer.toLowerCase() == queBank[questionIndex].answer.toLowerCase()) {
			console.log(chalk.green("right answer"));
			questionIndex++;
			serve();
		} else {
			console.log(chalk.red("wrong answer"));
			console.log(chalk.red("try again"));
			question();
		}
	}
  );
}

function serve() {
	if (isQuestionBankExhausted()) {
		console.log("thanks for playing....");
		rl.close();
	} else {
		rl.question("what do you want to do? \n Press e to exit, any other key to continue....  ", (choice) => {
			console.log(`You selected ${choice}`);

			if (choice.toLowerCase() !== "e") {
				question();
			} else {
				console.log("thanks for playing....");
				rl.close();
			}
		});
	}
}

/**
 * checks array length with index and exits game
 */
function isQuestionBankExhausted() {
	if (queBank.length == questionIndex) {
		return true;
	}
}

serve();