function ClearArr(array){
let clarr = array.filter((item,index)=> array.indexOf(item)===index);
console.log(clarr)
}

var arr=[1,2,2,5,7,9,9,3];

ClearArr(arr);