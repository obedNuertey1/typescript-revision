//Example: Declaring a class
/*
class Car{
    //field
    private engine:string;

    //constructor
    constructor(engine:string){
        this.engine = engine;
    }

    //Function
    disp():void{
        console.log(`Engine is : ${this.engine}`);
    };
};
*/
//Example: Putting them together
class Car {
    //Constructor
    constructor(engine) {
        this.engine = engine;
    }
    getEngine() {
        return this.engine;
    }
    ;
    setEngine(engine) {
        this.engine = engine;
    }
    disp() {
        console.log(`Function displays Engine is : ${this.engine}`);
    }
    ;
}
;
//Example: Class Inheritance
class Shape {
    constructor(a) {
        this.Area = a;
    }
}
;
class Circle extends Shape {
    constructor(a) {
        super(a);
    }
    disp() {
        console.log(`Area of the circle: ${this.Area}`);
    }
}
;
//Multi-level inheritance
class Root {
    constructor() {
        this.str = "";
    }
}
;
class Child extends Root {
}
;
class Leaf extends Child {
}
; //indirectly inherits from Root by virtue of inheritance
//TypeScript - Class inheritance and Method Overriding
class PrinterClass {
    constructor() { }
    ;
    doPrint() {
        console.log(`doPrint() from Parent called...`);
    }
    ;
}
;
class StringPrinter extends PrinterClass {
    constructor() {
        super();
    }
    doPrint() {
        super.doPrint();
        console.log("doPrint() is printing a string...");
    }
    ;
}
;
//The static Keyword Example
class StaticMem {
    static disp() {
        console.log("The value of num is " + StaticMem.num);
    }
    ;
}
;
StaticMem.num = 12; // initialize the static variable
//Example - 
class Encapsulate {
    constructor() {
        this.str = "hello";
        this.str2 = "world";
    }
}
;
//The instanceof operator example
class Person {
}
;
const personObj = new Person();
let isPerson = personObj instanceof Person;
;
class AgriLoan {
    constructor(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
}
;
export default () => {
    const carObj = new Car("V8");
    console.log(`Reading attribute value Engine as : ${carObj.getEngine()}`);
    carObj.disp();
    const circleObj = new Circle(223);
    circleObj.disp();
    const leafObj = new Leaf();
    leafObj.str = "Hello";
    console.log(leafObj.str);
    const stringPrinterObj = new StringPrinter();
    stringPrinterObj.doPrint();
    StaticMem.disp(); // invoke the static method
    console.log(`obj is an instance of Person ${isPerson}`);
    let agriLoan = new AgriLoan(10, 40);
    console.log(`Interest is : ${agriLoan.interest} Rebate is : ${agriLoan.rebate}`);
};
//# sourceMappingURL=classes.js.map