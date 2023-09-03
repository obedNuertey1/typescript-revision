export default () => {
    ;
    let customer = {
        firstName: "Tom",
        lastName: "Hanks",
        sayHi: () => { return "Hi there"; }
    };
    console.log("Customer Object ");
    console.log(customer.firstName);
    console.log(customer.lastName);
    console.log(customer.sayHi());
    let employee = {
        firstName: "Jim",
        lastName: "Blakes",
        sayHi: () => ("Hello!!!")
    };
    console.log("Employee Object");
    console.log(employee.firstName);
    console.log(employee.lastName);
    ;
    ;
    //commandline as string
    let options = {
        program: "test1",
        commandline: "Hello"
    };
    console.log(options.commandline);
    //commandline as a string array
    options = {
        program: "test1",
        commandline: ["Hello", "World"]
    };
    let { commandline } = options;
    console.log(commandline[0]);
    console.log(commandline[1]);
    //commandline as a function expression
    options = {
        program: "test1",
        commandline: () => ("**Hello World**")
    };
    const fn = options.commandline;
    console.log(fn());
    ;
    let list2 = ["John", 1, "Bran"];
    ;
    let agelist = [];
    //agelist["John"] = 15; //Ok
    agelist[2] = "nine"; //Error
    console.log(agelist);
    ;
    ;
    let drummer = {};
    drummer.age = 27;
    drummer.instrument = "Drums";
    console.log(`Age: ${drummer.age}`);
    console.log(`Instrumen: ${drummer.instrument}`);
    ;
    ;
    let obj = { v1: 12, v2: 23 };
    console.log(`value 1: ${obj.v1} value 2: ${obj.v2}`);
};
//# sourceMappingURL=interfaces.js.map