# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
// using let inside the function created a scoped variable accessible only by the function
// variable with the same name in the global scope is unchanged as global scope does not have access to function scoped  

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
// 
- 10 logged to the console
- local scope varialbe is defined and set with a value 20
- undefined loged to the console //returned value of function as it was not set 
- refrence error // y is not defined

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);          
console.log(x); 

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;  // increase the value of the propety by one 
  return val;
}

f2(y);   // increase the value of property with key y
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

// in js objects are passed by value and primatives are passed by refrence 
