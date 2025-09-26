var a=20;
let b=30;
const c=3.14;
console.log("Global Scope:");
console.log("Value of a in global scope",a);
console.log("Value of b in global scope",b);
console.log("Value of c in global scope",c);
function callvalues(a,b,c){
console.log("Global Scope:");
console.log("Value of a in global scope",a);
console.log("Value of b in global scope",b);
console.log("Value of c in global scope",c);
}
callvalues(a,b,c);
