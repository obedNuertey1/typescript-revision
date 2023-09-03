export default ():void=>{
	//Interface and Objects example
	interface IPerson{
		firstName:string,
		lastName:string,
		sayHi:()=>string
	};

	let customer:IPerson = {
		firstName:"Tom",
		lastName:"Hanks",
		sayHi:():string=>{return "Hi there"}
	};
	
	console.log("Customer Object ");
	console.log(customer.firstName);
	console.log(customer.lastName);
	console.log(customer.sayHi());


	let employee:IPerson = {
		firstName: "Jim",
		lastName: "Blakes",
		sayHi: ():string => ("Hello!!!")
	};

	console.log("Employee Object");
	console.log(employee.firstName);
	console.log(employee.lastName);



	//######Union Type and Interface#######
	interface samplelist{
		[index:number]:string
	};
	interface RunOptions{
		program:string;
		commandline:string[]|string|(()=>string)|samplelist;
	};

	
	//commandline as string
	let options:RunOptions = {
		program:"test1",
		commandline:"Hello"
	};
	console.log(options.commandline);

	//commandline as a string array
	options = {
		program:"test1",
		commandline: ["Hello", "World"]
	};
	let {commandline} = options;
	console.log(commandline[0]);
	console.log(commandline[1]);

	//commandline as a function expression
	options = {
		program:"test1",
		commandline:()=>("**Hello World**")
	};

	const fn:any = options.commandline;
	console.log(fn());



	//Interfaces and Arrays - Interface can define both the kind of key an array uses and the type of entry it contains. Index can be of type string or type number.
	interface namelist{
		[index:number]:string
	};

	let list2:namelist = ["John",1,"Bran"];
	interface ages{
		[index:number]:any
	};

	let agelist:ages = [];

	//agelist["John"] = 15; //Ok
	agelist[2] = "nine"; //Error
	console.log(agelist);

	//Interface Inheritance

	//Simple Interface Inheritance
	interface Person{
		age:number;
	};

	interface Musician extends Person{
		instrument:string;
	};

	let drummer = <Musician>{};
	drummer.age = 27;
	drummer.instrument = "Drums";
	console.log(`Age: ${drummer.age}`);
	console.log(`Instrumen: ${drummer.instrument}`);

	//Multiple Interface Inheritance
	interface Parent1{
		v1:number;
	};
	interface Parent2{
		v2:number;
	}

	interface Child extends Parent1, Parent2{};
	let obj:Child = {v1:12, v2:23};
	console.log(`value 1: ${obj.v1} value 2: ${obj.v2}`);
};