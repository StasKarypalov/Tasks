function curriedSum(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(curriedSum(2)(4)(6));
