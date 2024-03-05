function Grandparent(){
    this.name = "Grandparent";
    this.secondname = "Smith";
    this.age = 65;
}

function Parent(){
    this.name="Parent";
    this.age=35;
}

Parent.prototype=new Grandparent();

function Child(){
    this.name="Baby";
    this.age=10;
}

Child.prototype = new Parent();

const parent = new Parent();
console.log(parent.name);
console.log(parent.secondname);
console.log(parent.age);
console.log("--------------------");

const child = new Child();

console.log(child.name);
console.log(child.secondname);
console.log(child.age);