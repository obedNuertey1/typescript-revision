export default ():void=>{
	//Simple Array
	let alphas:string[];
	alphas = ["1", "2", "3", "4"];
	console.log(alphas[0]);
	console.log(alphas[1]);


	//Single statement declaration and initialization
	let nums:number[] = [1, 2, 3, 3];
	console.log(nums[0]);
	console.log(nums[1]);
	console.log(nums[2]);
	console.log(nums[3]);


	//Array Object example
	let arr_names:number[] = new Array(4);

	for(let i = 0; i < arr_names.length; i++){
		arr_names[i] = i * 2;
		console.log(arr_names[i]);
	}


	//Array Constructor accepts comma separated values
	let names:string[] = new Array("Mary", "Tom", "Jack", "Jill");

	for(let i = 0; i < names.length; i++){
		console.log(names[i]);
	}



	//Array Destructuring Example
	let arr:number[] = [12, 13];
	let [x, y] = arr;
	console.log(x);
	console.log(y);



	//Array Traversal using for...in loop
	let j:any;
	let nums2:number[] = [1001, 1002, 1003, 1004];

	for(j in nums2){
		console.log(nums2[j]);
	}



	//Declaring a Two-Dimensional array
	let multi:number[][] = [[1, 2, 3],[23, 24, 25]];
	console.log(multi[0][0]);
	console.log(multi[0][1]);
	console.log(multi[0][2]);
	console.log(multi[1][0]);
	console.log(multi[1][1]);
	console.log(multi[1][2]);


	
	
	//Passing Arrays to Functions
	let names2:string[] = new Array("Mary", "Tom", "Jack", "Jill");

	function disp(arr_names:string[]):void{
		for(let i = 0; i < arr_names.length; i++){
			console.log(names[i]);
		}
	};
	disp(names2);



	//Function Returning an Array
	function disp2():string[]{
		return new Array("Mary", "Tom", "Jack", "Jill");
	};
	let nums3:string[] = disp2();
	for(let i in nums3){
		console.log(nums3[i]);
	};

};