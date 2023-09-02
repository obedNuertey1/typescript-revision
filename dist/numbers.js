//Numbers
export default (num) => {
    let var_name = new Number();
    console.log(var_name);
    ////Example
    //console.log(`TypeScript Number Properties: `);
    //console.log(`Maximum value that a number variable can hold: ${Number.MAX_VALUE}`);
    //console.log(`The least value that a number variable can hold: ${Number.MIN_VALUE}`);
    //console.log(`Value of Negative Infinity: ${Number.NEGATIVE_INFINITY}`);
    //console.log(`Value of Positive Infinity: ${Number.POSITIVE_INFINITY}`);
    ////Example of NaN
    //let month:number = 0;
    //if(month <= 0|| month > 12){
    //	month = Number.NaN;
    //	console.log(`Month is ${month}`);
    //}else{
    //	console.log(`Value Accepted..`);
    //}
    ////Example: prototype
    //function Employee(id:number, name:string){
    //	this.id = id;
    //	this.name = name;
    //};
    //let emp:any = new Employee(123, "Smith");
    //Employee.prototype.email = `smith@abc.com`;
    //console.log(`Employee's Id: ${emp.id}`);
    //console.log(`Employee's name: ${emp.name}`);
    //console.log(`Employee's Email ID: ${emp.email}`);
    //Example Number methods
    let numerator = 41231;
    let divisor = 7;
    let result = numerator / divisor;
    console.log(`toExponential ${result.toExponential(3)}`);
    console.log(`toFixed() ${result.toFixed(3)}`);
    console.log(`toLocaleString() ${result.toLocaleString()}`);
    console.log(`toPrecision() ${result.toPrecision(2)}`);
    console.log(`toString() ${result.toString(32)}`);
    console.log(`valueOf() ${result.valueOf()}`);
};
//# sourceMappingURL=numbers.js.map