function palindrom(str){
    let strr = ""
    for(let i = str.length-1; i >=0;i--){
        strr+=str[i];
    }
    console.log(strr);
    if (strr==str){
        console.log("palindrom");
    }else{
        console.log("no palindrom");
    }
}

let str = 'mom ana sis sis ana mom';

palindrom(str);