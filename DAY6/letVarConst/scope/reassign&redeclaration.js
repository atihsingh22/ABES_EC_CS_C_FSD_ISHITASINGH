var a=30;
var a=60;//redeclaration is possible in var global scope
console.log(a);//reassignment is possible
let b=56;
//let b=36; //will generate error. we can't redeclare 'let' block scope
b=54;
console.log(b);
const pi=3.14;
console.log(pi);

//inside the function we can get the variables only inside the func
