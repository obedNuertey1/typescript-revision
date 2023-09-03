export default ():void=>{
	//Bitwise Operators
	let A:number = 2;
	let B:number = 3;
	//Bitwise AND (&) example
	console.log(A & B); //prints the lowest number

	//Bitwise Or (|) example
	console.log(A | B);//prints the highest number

	//Bitwise XOR (^) example
	console.log(A ^ B); //Performs subtraction on the numbers with the absolute value printed

	//Bitwise Not (~) example
	console.log(~B); //negates the operand and subtracts 1

	//Left Shift (<<)
	console.log(A<<4); //returns operand A * 2^n
	console.log(B<<3); //returns operand B * 2^n

	//right shift (>>)
	console.log(A>>1); //returns log(2) base operand

	//right shift with zero
	console.log(A >>> 1);


	//Miscellaneous Operators
	let x:number = 4;
	let y = -x;
	console.log("value of x: ",x); //outputs 4
	console.log("value of y: ",y); //outpust -4

	

	//String Operators: Concatenation operator(+)
	let msg:string = "hello"+"world";
	console.log(msg);
};

