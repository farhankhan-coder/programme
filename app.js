console.log("eachAlphabateCount", eachAlphabateCount("vardan")); // Output: [{f:1},{a:2},{r:1},{h:1},{n:1}]
console.log("factorial", factorial()); //Output: 5*4*3*2*1
console.log("nestedArray", nestedArray([1, [3, [5, [89]]]])); //Output: [1,3,5,89]
console.log("getIncludesElement", getIncludesElement()); // Output: ['javascriptdata', 'typescript', 'Scriptjava']
console.log("objectMethods", objectMethods());
console.log("variableHoisting", variableHoisting());
console.log("findUnique", findUnique());
console.log("findUniqueNumber", findUniqueNumber());
console.log("array-reduce", arrayReduceMethod());
console.log("numberToWord", numberToWord(954));
console.log("reverseString", reverseString("abc"));
console.log("swapingValue", swapingValue(10, 20));
console.log("categorizeNumber", categorizeNumber(100000)); // Output: "Million"
console.log("single Degit RepeateString", repeateString("a1b3h5")); // abbbhhhhh
console.log(
  "getMaximumNumber",
  getMaximumNumber([
    [5, 7, 85, 500, 21],
    [8, 85, 55, 2, 89],
    [14, 52, 11, 25],
  ])
); //[500,89,52]
console.log(
  "getMinimumNumber",
  getMinimumNumber([
    [5, 7, 85, 500, 21],
    [8, 85, 55, 2, 89],
    [14, 52, 11, 25],
  ])
); //[5,2,11]
console.log("extractNumbers", extractNumbers("a15b210")); // Output: [15, 210]
console.log(
  "assendingOrder",
  assendingOrder([5, 69, 9, 8, 11, 2, 1, 4, 6, 3, 7])
);
console.log("misssingAlphabate", misssingAlphabate("abcdf"));
console.log("repeatedString", repeatedString("a15b210"));
console.log("oddEven", oddEven(2));
console.log("restOperator", restOperator(2, 5, 6, 4, 8, 9));
console.log("alphabateAssending", alphabateAssending("farhan"));
// console.log("One Line Solution", oneLineSolution());
 oneLineSolution()

function getTargetElement(str) {
  let spltData = str.split("");
  let target = "f";
  let filterData = spltData.filter((item) => {
    return item == target;
  });
  let arr = "";
  for (let i = 0; i < spltData.length; i++) {
    if (spltData[i] == target) {
      // arr.push(spltData[i]);
      arr += spltData[i];
    }
  }
  return arr;
}

function factorial() {
  var fact = 5;
  for (let i = fact - 1; i > 0; i--) {
    fact *= i;
  }
  return fact;
}

function eachAlphabateCount(str) {
  let strng = "vardan";
  let arr1 = [];
  let obj = {};

  // Loop through each character in the string
  for (let i = 0; i < strng.length; i++) {
    let char = strng[i];
    // If the character is already in the object, increment its count
    if (obj[char]) {
      obj[char]++;
    } else {
      // If the character is not in the object, add it with a count of 1
      obj[char] = 1;
    }
  }

  // Create individual objects for each character count and push them into the array
  for (let key in obj) {
    let individualObj = {};
    individualObj[key] = obj[key];
    arr1.push(individualObj);
  }
  return arr1;
}

function nestedArray(arr) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...nestedArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
  // let updateArr = arr + "";
  // return updateArr
}

function getIncludesElement() {
  let arr = ["jsx", "javascriptdata", "typescript", "Scriptjava", "xml"];

  // let updateData = arr.filter((item) => item.toLowerCase().includes("script"));
  // console.log(updateData);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let splData = arr[i].toLowerCase().split("script");
    if (splData.length > 1) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Object Method
function objectMethods() {
  let obj1 = {
    name: "obj 1",
    email: "obj1@gmail.com",
    city: "mumbai",
    contact: "9865412645",
  };
  let obj2 = { name: "obj 2", email: "obj2@gmail.com", city: "mumbai" };

  // copy object sorce to target
  let assignObj = Object.assign(obj1, obj2);
  console.log("assignObj", assignObj); // assignObj {name: 'obj 2', email: 'obj2@gmail.com', city: 'mumbai', contact: '9865412645'}

  // each key value convert in array
  let entriesObj = Object.entries(obj1);
  console.log("entriesObj", entriesObj); // entriesObj (4) [Array(2), Array(2), Array(2), Array(2)]

  // The fromEntries() method creates an object from a list of key/value pairs.

  let fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500],
  ];

  let fromEntriesObj = Object.fromEntries(fruits);
  console.log("romEntriesObj", fromEntriesObj); // romEntriesObj {apples: 300, pears: 900, bananas: 500}

  // Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:

  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };

  let valueObj = Object.values(person);
  console.log("valueObj", valueObj); // valueObj (4) ['John', 'Doe', 50, 'blue']
}

function variableHoisting() {
  return (test1 = 9);

  // var test1 = 6;
}

function findUnique() {
  let array = [5, 4, 6, 5, 5, 4, 6, 4, 8, 9, 6, 8];
  let unique = array.filter((item, index) => array.indexOf(item) == index);
  return unique;
}

function findUniqueNumber() {
  let arr = [5, 4, 6, 5, 5, 4, 6, 4, 8, 9, 6, 8];
  let unicArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < unicArr.length; j++) {
      if (arr[i] === unicArr[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      unicArr.push(arr[i]);
    }
  }
  return unicArr;
}
// findUniqueNumber()
function arrayReduceMethod() {
  let arr = [5, 4, 6, 5, 5, 4, 6, 4, 8, 9, 6, 8];
  let add = arr.reduce((a, b) => {
    return a + b;
    // console.log(888, b);
  }, 20);

  return add;
}

function numberToWord(num) {
  let oneToNine = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let  = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let twentyToNinety = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let spltNum = num.toString().split("");

  if (num.toString().length == 1) {
    return oneToNine[num];
  } else if (num.toString().length > 1 && num < 20) {
    return tenToNieteen[spltNum[1]];
  } else if (num.toString().length > 1 && num >= 20 && num < 100) {
    return `${twentyToNinety[spltNum[0] - 2]} ${oneToNine[spltNum[1]]}`;
  } else if (num >= 100 && num.toString().length == 3) {
    return `${oneToNine[spltNum[0]]} hundred ${
      twentyToNinety[spltNum[1] - 2]
    } ${oneToNine[spltNum[2]]}`;
  } else {
    return "Number out of range";
  }
}

function reverseString(str) {
  // let revStr = str.split("").reverse().join("")
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}

function categorizeNumber(number) {
  if (number >= 1e12) {
    return "Trillion";
  } else if (number >= 1e9) {
    return "Billion";
  } else if (number >= 1e6) {
    return "Million";
  } else if (number >= 1e3) {
    return "Thousand";
  } else {
    return "Less than Thousand";
  }
}

function swapingValue(a, b) {
  var a = 10;
  var b = 20;
  [a, b] = [b, a];
  console.log("swapingValue of a", a);
  console.log("swapingValue of b", b);
}

function repeateString(input) {
  var otpStr = "";

  for (let i = 0; i < input.length; i++) {
    if (Number(input[i])) {
      for (let j = 0; j < input[i]; j++) {
        otpStr += input[i - 1];
      }
    }
  }
  return otpStr;
}

function getMaximumNumber(arr) {
  let max = 0;
  let maxArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (max < arr[i][j]) max = arr[i][j];
    }

    maxArr.push(max);
    max = 0;
  }
  return maxArr;
}

function getMinimumNumber(arr) {
  let min = 0;
  let minArr = [];
  for (let i = 0; i < arr.length; i++) {
    min = Math.max(...arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      if (min > arr[i][j]) {
        min = arr[i][j];
      }
    }
    minArr.push(min);
  }
  return minArr;
}

function extractNumbers(input) {
  let numbers = input.match(/\d+/g);
  return numbers ? numbers.map(Number) : [];
}

function misssingAlphabate() {
  let str = "vardan"
  let res = [];
  let abcd = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < abcd.length; i++) {
    if (!str.includes(abcd[i])) {
      res.push(abcd[i]); 
    }
  }
  return res; 
}

function repeatedString(input) {
  var otpStr = "";
  for (let i = 0; i < input.length; i++) {
    // if(Number(input[i])){
    if (Number(input[i])) {
      if (input[i] == NaN) {
        console.log(2222, input[i]);
        break;
      }
    } else {
      return input[i]
    }

    // for(let j=0; j < input[i]; j++){
    //   otpStr += input[i-1]
    // }
    // }
  }
  return otpStr;
}

function assendingOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // for decending if(arr[j] < arr[j+1])
        let ass = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = ass;
      }
    }
  }
  return arr;
}

function oddEven(num) {
  for (let i = 0; i < num; i++) {
    if (num / 1 == 0 && num / num == 0 && num / i == 0) {
      console.log("not primery");
    } else {
      console.log("primery");
    }
  }
}

function restOperator(...arr) {
  return arr;
}

function alphabateAssending(str) {
  let alphabate = "abcdefghijklmnopqrstuvwxyz";
  let ass = "";
  for (let i = alphabate.length; i >= 0; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] == alphabate[i]) {
        ass += str[j];
      }
    }
  }
  return ass;
}

function oneLineSolution(){
    // return ![]
  console.log("not Object", !{} ); // false
  console.log("not Array", ![] );// false
  console.log("typeof Object", typeof [] );// object
  console.log("typeof Array", typeof [] );// object
  console.log("string + string", "a"+"5" );// a5
  console.log("integer + string", "a"+ 5 );// a5
  console.log("integer - string", 5- "a" );// NaN
  console.log("string - string", "v"- "a" );// NaN
  console.log("string * string", "v" * "a" );// NaN
  console.log("string * integer", "v" * 5 );// NaN
}




// function count(){

//   const str = "khdfkhdjkfghfjkdghfjdgh";
  
//   // Create an object to store character counts
//   const charCount = {};
  
//   for (const char of str) {
//     return char
    
//     // Increment the count for the character or initialize it to 1
//     // charCount[char] = (charCount[char] || 0) + 1;
//   }
  
//   // console.log(charCount);
// }


// console.log(99999, count())