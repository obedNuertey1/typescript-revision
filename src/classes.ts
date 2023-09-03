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
class Car{
	//field
	private engine:string;

	//Constructor
	constructor(engine:string){
		this.engine = engine;
	}

	getEngine():string{
		return this.engine;
	};

	setEngine(engine:string):void{
		this.engine = engine;
	}

	disp():void{
		console.log(`Function displays Engine is : ${this.engine}`);
	};
};



//Example: Class Inheritance
class Shape{
	public Area:number;

	constructor(a:number){
		this.Area = a;
	}
};

class Circle extends Shape {
	constructor(a:number){
		super(a);
	}

	disp():void{
		console.log(`Area of the circle: ${this.Area}`);
	}
};

//Multi-level inheritance
class Root{
	public str:string = "";
};
class Child extends Root{};
class Leaf extends Child{}; //indirectly inherits from Root by virtue of inheritance



//TypeScript - Class inheritance and Method Overriding
class PrinterClass{
	constructor(){};

	protected doPrint():void{
		console.log(`doPrint() from Parent called...`);
	};
};

class StringPrinter extends PrinterClass{

	constructor(){
		super();
	}

	doPrint():void{
		super.doPrint();
		console.log("doPrint() is printing a string...");
	};
};


//The static Keyword Example
class StaticMem{
	public static num:number;

	public static disp():void{
		console.log("The value of num is "+StaticMem.num)
	};
};
StaticMem.num = 12 // initialize the static variable

//Example - 
class Encapsulate{
	str:string = "hello";
	private str2:string = "world";
};


//The instanceof operator example
class Person{};
const personObj = new Person();
let isPerson = personObj instanceof Person;


//Classes and Interfaces Example
interface ILoan {
	interest:number;
};

class AgriLoan implements ILoan{
	public interest:number;
	public rebate:number;

	constructor(interest:number, rebate:number){
		this.interest = interest;
		this.rebate = rebate;
	}
};


export default ():void=>{
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

	StaticMem.disp() // invoke the static method
	
	console.log(`obj is an instance of Person ${isPerson}`);

	let agriLoan = new AgriLoan(10, 40);
	console.log(`Interest is : ${agriLoan.interest} Rebate is : ${agriLoan.rebate}`);
};
