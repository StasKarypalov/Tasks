function Grandparent(){
    this.name="Grand";
    this.secondname="Shelbe";
    this.age=65;
}

function Parent(){
    Grandparent.call(this);
    this.name="Parent";
    this.age=40;
    
}

function Child(){
    Parent.call(this);
    this.name = "Baby";
    this.age = 10;
    
}

let child = new Child();

console.log(child.name);
console.log(child.secondname);
