import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inputNumber() {
  rl.question("Gebe eine Zahl an: ", (answer) => {
    const input = parseInt(answer)
    if (isNaN(input) || input === 0) {
      console.log(answer, "ist keine Zahl oder 0")
      inputNumber()
    } else {
      for(let i = 1; i <= input; i++) {
        console.log(i)
        rl.close()
      }
    };
  });
}

inputNumber()