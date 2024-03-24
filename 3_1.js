function Factorial(n){
    if (n==1){
        return n;
    }else{
        return n*Factorial(n-1);
    }
}

let n = 4;
factorial = Factorial(n);

console.log(factorial);