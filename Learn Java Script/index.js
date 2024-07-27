const readline = require('readline');
const prompt = require('prompt');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age >> ", function(answer) {
  let a = parseInt(answer);

  if (a > 10 && a <= 20) {
    console.log("Your age lies between 10 and 20");
  } else {
    console.log("Your age does not lie between 10 and 20");
  }

  rl.close();
  
  prompt.start();
  prompt.get(['age'], function (err, result) {
    if (err) { return onErr(err); }

    let age = parseInt(result.age);

    if (age > 10 && age <= 20) {
      console.log("The age you entered lies between 10 and 20");
    } else {
      console.log("The age you entered does not lie between 10 and 20");
    }
  });
});

function onErr(err) {
  console.error(err);
  return 1;
}
