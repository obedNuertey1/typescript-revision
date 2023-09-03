export default () => {
    //Union Type Variable Example
    let val;
    val = 12;
    console.log("numeric value of val " + val);
    val = "This is a string";
    console.log(`string value of val ${val}`);
    //Union Type function parameter
    function disp(name) {
        if (typeof name == "string") {
            console.log(name);
        }
        else {
            let i;
            for (i = 0; i < name.length; i++) {
                console.log(name[i]);
            }
        }
    }
    ;
    disp("mark");
    console.log("Printing names array...");
    disp(["Mark", "Tom", "Mary", "John"]);
    //Union Type and Arrays
    let arr;
    let i;
    arr = [1, 2, 4];
    console.log("**numeric array**");
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    arr = ["Mumbai", "Pune", "Delhi"];
    console.log("**string array**");
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
//# sourceMappingURL=unions.js.map