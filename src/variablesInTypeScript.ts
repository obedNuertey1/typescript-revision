export default():void=>{
	let name:string = "John";
	let score1:number = 50;
	let score2:number = 42.50;
	let sum = score1 + score2;
	console.log("name %s", name);
	console.log("first %s score: ", score1);
	console.log("second score: %s",score2);
	console.log("sum of the scores: ",sum);
	
	//Type Assertion - Changing a variable from one type to another with <>
	let str = "1";
	let str2:number = <number><any>str; //Str is now of type number
	console.log(typeof(str2));


	//Inferred Typing -
	let num = 2; //data type inferred as number
	console.log("value of num %d",num);
	//num = "12"; //commented this part out to prevent errors.
	console.log(num);


	//Variable Scope
	var global_num = 12;
	class Numbers {
		num_val = 13;
		static sval = 10;

		storeNum():void{
			var local_num = 14;
		}
	};

	
	console.log("Global num: "+global_num);
	console.log("Numbers.sval: ",Numbers.sval) //static variable can be accessed using className
	var obj = new Numbers();
	console.log("Global num: "+obj.num_val);
	//console.log("static sval: "+obj.sval);//wrong will throw an error
};