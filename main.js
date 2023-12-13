const argv = require('yargs')
  .option('num1', {
    describe: 'First number',
    demandOption: true,
    type: 'number',
  })
  .option('num2', {
    describe: 'Second number', 
    demandOption: true,
    type: 'number',
  })
  .option('operation', {
    describe: 'calculation',
    demandOption: true,
    choices: ['+', '-', '*', '/'],
  })
  .help()
  .argv;

const { num1, num2, operation } = argv;

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      console.log('Wrong calculation');
      process.exit(1);
  }
};

const result = calculateResult(num1, num2, operation);

console.log(`${num1} ${operation} ${num2} = ${result}`);