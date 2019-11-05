"use strict";
function a(x, y) {
let n = x - y;
let m = x + y;
return b(n,m);
}
function b(x, y) {
let something = x / 2;
let other = y + 3;
let stuff = c(something + other);
return (stuff + something) / other;
}
function c(n) {
let m = n * 3;
debugger;
// what does the stack look like here?
return m - 1;
}
console.log(a(3,4));

/*
the stack format
c={
    m=-28.5
    n=-9.5;   
}
b={
    other=10;
    something=-0.5
    y=7
    x=-1  
}

a={
     m=7
    n=-1
    y=4
    x=3 
}
*/
//===============================================================================
function min(array) {
    if (array.length > 1) {
    let other = min(array.splice(1));
    if (other < array[0]) { // break here
    return other;
    }
    }
    return array[0];
    }
    console.log(min([3,5,2]));
//the stack for this solution
/*
min={
    other=[2]
    other=[5,2]
    other=[3,5,2]
}
*/