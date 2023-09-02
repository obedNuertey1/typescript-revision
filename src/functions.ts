export default (id:number, name:string, mail_id?:string):void => {

	const disp_details = (id:number, name:string, mail_id?:string):void =>{
		console.log("ID: ", id);
		console.log("Name: ", name);
		
		if(mail_id != undefined){
			console.log("Email Id: ", mail_id);
		}
	};
	disp_details(id, name, mail_id);

	//Lambda Expressions
	let foo = (x:number) => 10 + x;
	console.log(foo(100)); //outputs 110

	let foo2 = (x:number) => {
		x = 10 + x;
		console.log(x);
	};
	foo2(100);

	//Syntactic Variations
	const func = (x:any):void => {
		if(typeof x == "number"){
			console.log(x+" is numeric");
		}else if(typeof x == "string"){
			console.log(x + " is a string");
		}
	};
	func(12);

	//Optional parentheses for a single parameter
	const display = (x:number):void => {
		console.log("The function got " +x);
	};
	display(12);

	//Optional braces for a single statement, Empty parentheses for no parameter
	//const disp = () => {
	//	console.log("Function invoked");
	//};
	//disp();



	//Function Overloading example
	function disp(s1:string):void;
	function disp(n1:number, s1:string):void;

	function disp(x:any, y?:any):void{
		console.log(x);
		console.log(y);
	}
	disp("abc");
	disp(1, "xyz");
};

export const addNumbers = (...nums:number[]):void => {
	let i;
	let sum:number = 0;

	for(i = 0; i < nums.length; i++){
		sum = sum+nums[i];
	}
	console.log("sum of the numbers", sum);
};

export const calculate_discount = (price:number, rate:number = 0.50):void => {
	let discount = price * rate;
	console.log("Discount Amount: ", discount);
};


//Using the Function constructor for functions
export const myFunction = new Function("a", "b", "return a * b");


//Recursion and TypeScript Functions
export function factorial(number:any):any{
	if(number <= 0){ // termination case
		return 1;
	}else{
		return (number * factorial(number - 1));
	}
};
