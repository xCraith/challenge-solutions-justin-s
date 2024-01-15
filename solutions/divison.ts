import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function divideNumber() {
  rl.question("Gebe die erste Ganzzahl ein: ", (answer) => {
    const input = parseInt(answer);

    if (isNaN(input) || input === 0) {
      console.log(answer, "ist keine Ganzzahl oder 0");
      divideNumber();
      return;
    }

    rl.question("Gebe die zweite Ganzzahl ein: ", (answer2) => {
      const input2 = parseInt(answer2);

      if (isNaN(input2) || input2 === 0) {
        console.log(answer2, "ist keine Ganzzahl oder 0");
        divideNumber();
        return;
      }

      const solution = Math.floor(input / input2);
      const rest = input % input2;

      console.log(
        "Ergebnis der ganzzahligen Division:",
        solution,
        "\nRest:",
        rest
      );
      rl.close();
    });
  });
}

divideNumber();
