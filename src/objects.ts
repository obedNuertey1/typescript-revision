export default ():void => {
	//TypeScript Type templage
	//Wrong way
	let person = {
		firstname: "Tom",
		lastname: "Hanks"
	};
	person.sayHello = function(){return "hello"}; //Throws an error
	console.log(person);


	//Right way
	let person2 = {
		firstName: "Tom",
		lastName: "Hanks",
		sayHello:function(){}
	};
	person2.sayHello = function(){
		console.log(`hello ${person2.firstName}`);
	};
	person2.sayHello();


	//Objects as function parameters
	let person3 = {
		firstname: "Tom",
		lastname: "Hanks"
	};

	const invokeperson = function(obj: {firstname:string, lastname: string}){
		console.log(`first name : ${obj.firstname}`);
		console.log(`last name : ${obj.lastname}`);
	};
	invokeperson(person3);

	

	//Duck Typing in typescript
	interface IPoint{
		x:number;
		y:number;
	};

	function addPoints(p1:IPoint, p2:IPoint):IPoint{
		var x = p1.x + p2.x;
		var y = p1.y + p2.y;
		return {x:x, y:y};
	};

	//Valid
	var newPoint = addPoints({x:3,y:4}, {x:5,y:1});

	//Error
	var newPoint2 = addPoints({x:1},{x:4,y:3});
};