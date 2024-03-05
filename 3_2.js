function Factorial(n){
    let result=1;
    if(n==1){
        return n;
    }else{
        for(let i = n; i>0;i--){
            result *=i;
        }
        return result;
    }
}

let n = 4;

let factorial = Factorial(n);

console.log(factorial);