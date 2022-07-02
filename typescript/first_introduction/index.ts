// Create variables typed with the following types: any, boolean, string, number.

let personName: string = "joe";
let personAge: number = 34;
let hasPet: boolean = true;
let productInfo: any[] = ["processors", 67, false];

// Create an array that can hold only boolean values.
let booleanArray: boolean[] = [true, false];

// Create an array that can hold either string or number values.

let stringOrArray: (string | number)[] = ["string", 45];

// Create an a tuple with the following types: string, number.

let tuple: [string, number];
tuple = ["hello", 32];

// Create a function with two parameters. The first accepts either a string or boolean value, the second accepts either a number or string value.

function parameters(par1: string | boolean, par2: number | string) {}
