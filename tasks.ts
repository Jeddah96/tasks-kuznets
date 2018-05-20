/*1. Define a function, that takes string as argument and prints "Hello, %arg%!"*/

function hello(arg: string): string {
      return `hello, %${arg}%!`;
}

/*2. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1, 2, 3, 4]) should return 10, and multiply([1, 2, 3, 4]) should return 24.*/

function sum(arg: number[]): number {
      return arg.reduce((prevCur, curVal) => prevCur + curVal);
}

function mul(arg: number[]): number {
      return arg.reduce((prevCur, curVal) => prevCur * curVal);
}

/*3. Define a function reverse() that computes the reversal of a string. For example, reverse("I am testing") should return the string "gnitset ma I".*/

function rev(str: string): boolean {
      return str == str.split('').reverse().join('');
}

/*4. Define a function isPalindrome() that recognizes palindromes (i.e. words that look the same written backwards). For example, isPalindrome("radar") should return True.*/

function isPalindrome(str: string): boolean {
      return str == str.split('').reverse().join('');
}

/*5. Define a procedure histogram() that takes an array of integers and prints a histogram to the screen. For example, histogram([4, 9, 7]) should print the following*/

function histogram(arg: number[]): any {
      arg.forEach(val => {
            console.log("*".repeat(val));
      })
}

/* 6. */
function ceasarCipher(str: string, key: number): string {
      if (key <= 0) return "";
      if (key > 26) key = key % 26;
      let res = str.split('');
      return res.map(val => val.charCodeAt(0) + key > 122 ?
            String.fromCharCode(val.charCodeAt(0) + key - 26) : String.fromCharCode(val.charCodeAt(0) + key)).join('');
}

/*7.*/

function diagonalReverse(num: number[]): number[] {
      let result = [];
      for (let i in num) {
            let lengthRow = 0;
            let newArray = [];
            while (lengthRow < num.length) {
                  newArray.push(num[lengthRow][i]);
                  lengthRow++;
            }
            result.push(newArray);
      }
      return result;
}


/*8. Write a function game() number-guessing game, that takes 2 int parameters defining the range. Using some kind of random function to generate random int from the range. While user input isn't equal that number, print "Try again!". If user guess the number, congratulate him and exit.*/

function game(guess: number) {
      function getRandom(min: number, max: number): number {
            return Math.random() * (max - min) + min;
      }
      var secretNumber = 11;
      var stringGuess = prompt("Guess a number");
      if (guess === secretNumber) {
            alert("YOU GOT IT RIGHT!");
      }
      else if (guess > secretNumber) {
            alert("Too high.  Guess again!");
      }
      else {
            alert("Too low.  Guess again!");
      }
}

/*9.*/
function bracketValidator(str: string): boolean {
      let splited = str.split('');
      while (splited[0] !== ']' && splited[splited.length - 1] !== '[' && splited.length > 1) {
            splited.splice(0, 1);
            splited.splice(splited.indexOf("]"), 1);
      }
      return splited.length == 0;
}

/*10*/
function charFreq(str: string) {
      let arr_len = {};
      for (let i = 0; i < str.length; i++) {
            let val = str[i];
            if (val in arr_len) {
                  arr_len[val]++;
            } else {
                  arr_len[val] = 1;
            }
      }
      return arr_len;
}

/*11. Write a function decToBin() that taces decimal integer and outputs its binary representation.*/

function decToBin(num: any): any {

      if (num != Math.floor(num)) {
            console.log("Please enter a number");

      } else if (num < 0) {
            console.log("Please enter a positive number");

      } else {
            var binary = parseInt(num, 10);
            console.log(binary.toString(2));

      }
}

