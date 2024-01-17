//Boolean
let isBoolean: boolean;
let isDone: boolean = false;

//Number
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;

//String
let str: string;
let red: string = 'Red';
let green: string = "Green";
let myColor: string = `My color is ${red}.`;
let yourColor: string = 'Your color is' + green;

//Array
// 문자열만 가지는 배열
let fruits: string[] = ['Apple', 'Banana', 'Mango'];
let Arrfruits: Array<string> = ['Apple', 'Banana', 'Mango'];

// 숫자만 가지는 배열
let oneToSeven: number[] = [1, 2, 3, 4, 5, 6, 7];
let ArroneToSeven: Array<number> = [1, 2, 3, 4, 5, 6, 7];

//Tuple
let tuple: [string, number];
tuple = ['a', 1];
// tuple = ['a', 1, 2]; // Error - TS2322
// tuple = [1, 'a']; // Error - TS2322