function fun(){
var a=20;
let b=30;
const c=3.14;
console.log("function Scope:");
console.log("Value of a in global scope",a);
console.log("Value of b in global scope",b);
console.log("Value of c in global scope",c);
}
fun();
console.log("outside function:");
console.log("Value of a in global scope",a);
console.log("Value of b in global scope",b);
console.log("Value of c in global scope",c);
