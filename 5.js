function removeDuplicates(array, getProperty) {
    let uniqueElements = [];
    let seen = new Set();
  
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      let property = getProperty(element);
  
      if (!seen.has(property)) {
        seen.add(property);
        uniqueElements.push(element);
      }
    }
  
    return uniqueElements;
  }

const array = [{name: "Pavel", surname: "Pushkin"}, {name: "Pavel", surname: "Ptushkin"}]
const uniquesByName = removeDuplicates(array, x => x.name); 
const uniquesBySurname = removeDuplicates(array, x => x.surname); 

console.log(uniquesByName);
console.log(uniquesBySurname);