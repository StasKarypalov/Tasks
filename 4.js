function camelCases(arr1, arr2) {
  let set1 = new Set(arr1);
  let commonElements = arr2.filter(function (element) {
    return set1.has(element);
  });
  return commonElements;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [10, 5, 12, 8, 9, 16];

let intersection = camelCases(arr1, arr2);

console.log(intersection);
