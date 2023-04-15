// try{
//     const converToNumber = "123";
//     console.log(converToNumber)
// }
// catch{
//     const converToNumber = "ABC";
//     console.log(converToNumber)

// }
// finally{
//     console.log("undefine")
// }

class getPerson{
    constructor(n, a){
        console.log("calling the constructor");
        this.name = n;
        this.age = a;
    }
    display(){
        console.log("display the currect name")
    }
}
const p = new getPerson("mithun", 22);
// console.log(p);
// p.display();
class car{
    constructor(c, m, y){
        this.company = c;
        this.model = m;
        this.year = y;
    }
    display(){
        console.log("this ia car")
    }

}
const getDexcription = new car("this is a 2023 model", "new", 2023);
// console.log(getDexcription)

class Empolay{
    constructor(n, p, s){
        this.name = n;
        this.position = p;
        this.salary = s;
    }
    display(){
        console.log("this a salary")
    }
}
// const getSlary = new Empolay("badal", "web", 80000);
// console.log(getSlary)

class person{
    constructor(n, a){
        this.name = n;
        this.age = a;
    }

    static costam(){
       let a = 10;
       let b = 5;
       console.log(a + b)
    }

    display(){

    }
}
// const person1 = new person("mithun", 21);
// const person2 = new person();
// console.log(person1);
// console.log(person2)
// person.costam();

const student = {
    name1: "hello",
    name: "the name is mithun"
}
const allnane = {
    makeAssigment: "badal",
    
    __proto__:student
}
console.log(allnane.name1)
console.log(allnane.name)
function numberCheck(){
const arr = [1, 2, 3, 4, 5];
const chekNum = numberCheck(arr);

console.log(chekNum(3));
console.log(chekNum(4));
}