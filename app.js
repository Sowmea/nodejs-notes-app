// const add = require('./utils');
const chalk = require('chalk');

// console.log(add(2, 3));
const print = require('./notes');
const msg = print();
console.log(msg);

const greenMessage = chalk.green.bold.bgYellowBright.inverse;
console.log(greenMessage('Success!'));

console.log(process.argv[2]);
