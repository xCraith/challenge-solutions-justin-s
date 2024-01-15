import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Wie ist dein Name?: ", (answer: string) => {
  console.log("Hallo", answer);
});
