export default ():void=>{
	//Simple Tuple
	let myTuple = [10, "Hello"]; //create a tuple
	console.log(myTuple[0]);
	console.log(myTuple[1]);


	//Empty Tuple
	let tup = [];
	tup[0] = 12;
	tup[1] = 23;
	console.log(tup[0]);
	console.log(tup[1]);



	//Tuple Operations
	let mySecondTup = [10, "Hello", "World", "typeScript"];
	console.log(`Items before push ${mySecondTup.length}`);

	mySecondTup.push(12);
	console.log(`Items after push ${mySecondTup.length}`);
	console.log(`Items before pop ${mySecondTup.length}`);
	console.log(`${mySecondTup.pop()} popped from the tuple`);

	console.log(`Items after pop ${mySecondTup.length}`);


	
	//Updating Tuples
	let myThirdTuple = [10, "Hello", "World", "typeScript"]; //create a tuple

	//update a tuple element
	myThirdTuple[0] = 121;
	console.log(`Tuple value at index 0 changed to ${myThirdTuple[0]}`);



	//Destructuring a Tuple
	let a = [10, "hello"];
	let [b,c] = a;
	console.log(b);
	console.log(c);
};