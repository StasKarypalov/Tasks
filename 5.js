function RemoveDuplicates(arr){
    let cleararr = arr.filter((index,item) => arr.indexOf(index)===item);
    return cleararr;
    }

let arr = [1,2,2,3,3,4,4,5,7,8,9,9];
let dubl = RemoveDuplicates(arr);

const predicat = (arr)=>dubl.includes(arr);

console.log(dubl);
let pr=predicat(arr);
if(pr==false){
    console.log("не содержит дубликаты");
}else{
    console.log("содержит дубликаты");
}