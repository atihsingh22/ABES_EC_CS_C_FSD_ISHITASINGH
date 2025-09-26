const sum=(...args)=>{
    console.log(args);
    let sum=0;
    args.forEach(
        (ele)=>{
            sum+=ele;
        }
    )
    return sum;
}
const op=sum(1,2,3,4,5,6,7,8,9,10);
console.log(op);
const op=sum(1,2,3,4,5,6,7,8,9);
console.log(op);
const isDiv=(...args)=>{
    console.log(args);
    let arr=[];
    args.forEach(
        (ele)=>{
            if(ele%2==0){
                arr.push(ele);
            }
        }
    )
    return arr;
    
}
const divisible=isDiv(1,2,3,4,5,6,7,8,9);
console.log(divisible);



