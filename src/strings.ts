export default (str:string):void=>{
	let myString = new String(str);

	////String Constructor Property
	//console.log(`myString.constructor is ${str.constructor}`);

	////String Length Property
	//console.log(myString);
	//console.log(`Length ${myString.length}`);

	////Prototype Property Example
	//function Employee(id:number, name:string){
	//	this.id = id;
	//	this.name = name;
	//}
	//let emp = new Employee(123, "Smith");
	//Employee.prototype.email = "smith@abc.com";
	//console.log("Employee's Id: ",emp.id);
	//console.log(`Employee's name: ${emp.name}`);
	//console.log("Employee's Email ID: %s", emp.emain);

	////     String Methods
	//console.log(`myString.charAt(0): ${myString.charAt(0)}`);
	//console.log(`myString.charAt(1):${myString.charAt(1)}`);
	//console.log(`myString.charAt(2):${myString.charAt(2)}`);
	//console.log(`myString.charAt(3):${myString.charAt(3)}`);
	//console.log(`myString.charAt(4):${myString.charAt(4)}`);
	//console.log(`myString.charAt(5):${myString.charAt(5)}`);
	//console.log(`myString.charAt(6):${myString.charAt(6)}`);
	//console.log(`myString.charAt(7):${myString.charAt(7)}`);
	//console.log(`myString.charAt(8):${myString.charAt(8)}`);
	//console.log(`myString.charAt(9):${myString.charAt(9)}`);



	////String charCodeAt()
	//console.log(`${myString.charAt(0)} is myString.charCodeAt(0): ${myString.charCodeAt(0)}`);
	//console.log(`${myString.charAt(1)} is myString.charCodeAt(1): ${myString.charCodeAt(1)}`);


	////String concat()
	//let str1 = new String("This is string one");
	//let str2 = new String("This is string two");
	//let str3 = str1.concat(str2.toString());
	//console.log(`str1 + str2 : ${str3}`);


	////string indexOf()
	//let index:number = str1.indexOf("string");
	//console.log(`indexOf found String : `+index);


	////string lastIndexOf()
	//let index2:number = str1.lastIndexOf("string");
	//console.log(`lastIndexOf found String : ${index2}`);

	

	////string localeCompare()
	//str1 = new String("This is beautiful string");
	//let index3:number = str1.localeCompare("This is beautiful string");
	//console.log(`localeCompare first : ${index3}`)


	////String Search()
	//let re = /apples/gi;
	let appleStr = "Apples are round, and apples are juicy.";
	//if(appleStr.search(re) == -1){
	//	console.log("Does not contain Apples");
	//}else{
	//	console.log("Contains Apples");
	//}


	////String substr() - syntax; string.substr(start[,length]);
	//let subStrString:string = "Apples are round, and apples are juicy.";
	//console.log(`(1,2): ${subStrString.substr(1,2)}`);
	//console.log(`(-2,2): ${subStrString.substr(-2,2)}`);
	//console.log(`(1): ${subStrString.substr(1)}`);
	//console.log(`(-20,2): ${subStrString.substr(-20,2)}`);
	//console.log(`(20,2): ${subStrString.substr(20,2)}`);


	//String substring() - Syntax: string.substring(indexA, [indexB]);
	console.log(`(1,2) : ${appleStr.substring(1,2)}`);
	console.log(`(0,10) : ${appleStr.substring(0,10)}`);
	console.log(`(5) : ${appleStr.substring(5)}`);


	//String toLocaleLowerCase()
	console.log(appleStr.toLocaleLowerCase());
	console.log(appleStr.toLowerCase());



	//String valueOf() - Returns primitive value of String Object.
	let helloStr = new String("Hello World");
	console.log(str.valueOf());



};