function Intersection(arr1,arr2){
    let result=[];
    for(let i = 0; i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                result.push(arr2[j]);
            }
        }
    }
    return result;
}

let arr1 = [1,2,3,4,5,6,7,8];
let arr2 = [10,5,12,8,9,16];

let intersection = Intersection(arr1,arr2);

console.log(intersection);