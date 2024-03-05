class Grandparent{
constructor(){
    this.name="Grandpa";
    this.secondname = "Shelbe"; 
    this.age = 65;
}
}

class Parent extends Grandparent{
constructor(){
    super();
    this.name = "Parent";
    this.age = 35;
}
}

class Child extends Parent{
constructor(){
    super();
    this.name = "Baby";
    this.age = 10;
}
}

const child = new Child();

console.log(child.name);
console.log(child.secondname);
console.log(child.age);