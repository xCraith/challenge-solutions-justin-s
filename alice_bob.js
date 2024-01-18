const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Wie ist dein Name?: ", (input) => {
  const answer = input.toLowerCase();
  if (answer !== "bob" && answer !== "alice") console.log("Guten Tag");
  else console.log("Hallo", answer);
  rl.close();
});
