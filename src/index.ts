//import { TestClass1 } from "./example1";
// import { TestClass2 } from "./example2";
 import { TestClass3 } from "./example3";
//import { TestClass4 } from "./example4";
//import { TestClass5 } from "./example5";

// Class decorator example 1
//console.log("Example 1: ", new TestClass1().id);

// Class decorator example 2 : factory decorator
//console.log("Example 2: ", TestClass2.id);


const testCase3 = new TestClass3();
testCase3.id = 500;
console.log(testCase3.printId('ID_'));

// Function decorator example
// console.log("Example 4:");
//  const tc = new TestClass4();
// tc.id = 400;
//  console.log(tc.id);


//console.log("Example 5: ", new TestClass5().printId("ID_"))