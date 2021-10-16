
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function getNumner() {
    readline.question("type in a number or 'stop': ", num => {
        if (num === 'stop') {
            console.log(numbers.reduce((a1, a2) => a1 + a2));
            readline.close();
        } else {
            numbers.push(Number(num));
            getNumner();
        }
    });
}

getNumner();