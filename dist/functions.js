export default (id, name, mail_id) => {
    const disp_details = (id, name, mail_id) => {
        console.log("ID: ", id);
        console.log("Name: ", name);
        if (mail_id != undefined) {
            console.log("Email Id: ", mail_id);
        }
    };
    disp_details(id, name, mail_id);
    //Lambda Expressions
    let foo = (x) => 10 + x;
    console.log(foo(100)); //outputs 110
    let foo2 = (x) => {
        x = 10 + x;
        console.log(x);
    };
    foo2(100);
    //Syntactic Variations
    const func = (x) => {
        if (typeof x == "number") {
            console.log(x + " is numeric");
        }
        else if (typeof x == "string") {
            console.log(x + " is a string");
        }
    };
    func(12);
    //Optional parentheses for a single parameter
    const display = (x) => {
        console.log("The function got " + x);
    };
    display(12);
    function disp(x, y) {
        console.log(x);
        console.log(y);
    }
    disp("abc");
    disp(1, "xyz");
};
export const addNumbers = (...nums) => {
    let i;
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
};
export const calculate_discount = (price, rate = 0.50) => {
    let discount = price * rate;
    console.log("Discount Amount: ", discount);
};
//Using the Function constructor for functions
export const myFunction = new Function("a", "b", "return a * b");
//Recursion and TypeScript Functions
export function factorial(number) {
    if (number <= 0) { // termination case
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
}
;
//# sourceMappingURL=functions.js.map