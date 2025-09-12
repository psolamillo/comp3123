//Exercise 1
const greeter = (myArray) => {
    let greetText = 'Hello ';

    for (let name of myArray){
        
        console.log(`${greetText}${name}`);
        
    }
}
console.log("Exercise 1");
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);
console.log();


//Exercise 2
function capitalize(word){
    const [first, ...rest] = word;
    let p1 =first.toUpperCase();
    let p2 =rest.join('').toLowerCase();

    const wordArray =[p1,...p2];

    console.log(wordArray.join(''));

    
}
console.log("Exercise 2");
capitalize('fooBar');
capitalize('nodeJs');
console.log();

//Exercise 3
const colors = ['red','green', 'blue'];
function capitalizedColors(arr){
    return arr.map(capitalize);
}

console.log("Exercise 3");
capitalizedColors(colors);
console.log();

//Exercise 4
var values = [1,60,34,30,20,5];
const result = values.filter(values => values < 20);
console.log("Exercise 4");
console.log(result);
console.log();

//Exercise 5
var numArray = [1,2,3,4];

const calculateSum = numArray.reduce((accumulator, currentValue) => accumulator +currentValue);
const calculateProduct = numArray.reduce((accumulator,currentValue) => accumulator * currentValue);

console.log("Exercise 5");
console.log(calculateSum);
console.log(calculateProduct);
console.log();

//Exercise 6
class Car{
    constructor(model,year){
        this.model = model;
        this.year = year;
    }
    details(){
        return (`Model: ${this.model} ${this.year}`);
    }
}

class Sedan extends Car{
    constructor(model,year,balance){
        super(model,year);
        this.balance=balance;
    }
    info(){
        return (`${this.model} has a balance of $${this.balance}`);
    }
}

console.log("Exercise 6");
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018 , 30000);
console.log(sedan.info());
console.log();
