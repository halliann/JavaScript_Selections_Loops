console.log("Hello World!\n==========\n");


// Exercise 1 Section -- Ignore Even
console.log("EXERCISE 1:\n==========\n");

for(let i = 1; i <= 100; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
};



// Exercise 2 Section -- FIZZBUZZ
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i, 'FIZZBUZZ');
    } else if(i % 3 == 0) {
        console.log(i, 'FIZZ');
    } else if(i % 5 == 0) {
        console.log(i, 'BUZZ');
    }
};



// Exercise 3 Section -- Repeat with While and Do/While
console.log("EXERCISE 3 - Part I :\n==========\n");

// Ignore Even (while)
let j = 1

while(j < 100) {
    if(j % 2 !== 0) {
        console.log(j);
    }

    j++;
};


// Ignore Even (do/while)
let k = 1

do {
    if(k % 2 !== 0) {
        console.log(k);
    }

    k++
} while(k < 100);



// Exercise 3 Section -- Repeat with While and Do/While
console.log("EXERCISE 3 - Part II :\n==========\n");


// FIZZBUZZ (while)
let l = 1;

while(l <= 100) {
    if(l % 3 == 0 && l % 5 == 0) {
        console.log(l, 'FIZZBUZZ');
    } else if(l % 3 == 0) {
        console.log(l, 'FIZZ');
    } else if(l % 5 == 0) {
        console.log(l, 'BUZZ');
    }

    l++;
};


// FIZZBUZZ (do/while)
let m = 1;

do {
    if(m % 3 == 0 && m % 5 == 0) {
        console.log(m, 'FIZZBUZZ');
    } else if(m % 3 == 0) {
        console.log(m, 'FIZZ');
    } else if(m % 5 == 0) {
        console.log(m, 'BUZZ');
    }

    m++;
} while (m < 100);



// Exercise 4 Section -- Find Value
console.log("EXERCISE 4 :\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let i = 1; i <= n; i++) {
    if(i == value) {
        console.log(i, 'Found value!');
        break;
    } 
    
    if(i == n) {
        console.log(i, 'Did not find value!');
    }
};



// Exercise 5 Section -- BONUS: Customized FIZZBUZZ
console.log("EXERCISE 5 (BONUS) :\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for(let i = start; i <= end; i++) {
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log(i, 'FIZZBUZZ');
    } else if(i % fizzDivisor == 0) {
        console.log(i, 'FIZZ');
    } else if(i % buzzDivisor == 0) {
        console.log(i, 'BUZZ');
    }
};