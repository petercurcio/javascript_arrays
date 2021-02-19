// https://codeplayground.app/?s=XsYPfwMQcxuJtUNBmUBUPc

//  - Remove last element if empty

// get maxNumCol
// get last element index by using arr.length
// if maxNumCol < last element && last element === "" then remove last element with pop?


// So, the simplest way to clear the array is: arr.length = 0;.

let arr1 = [
    [
        "red",
        "green",
        "blue",
        ""
    ]
]

let arr2 = [
    [
        "yellow",
        "orange",
        ""
    ]
]

let arr3 = [
  [
    "red",
    "green",
    "blue",
    ""
  ],
  [
    "yellow",
    "orange",
    ""
  ],
  [
    "turquoise",
    "cobalt",
    "navy blue",
    "",
  ],
  [
    "lavendar",
    "purple",
    "",
    "sunflower",
    "periwinkle",
    ""
  ],
]

// set maxNumCol at 0
let maxNumCol = 0;

//console.log(arr3);

//let arr3Map = arr3.map(r => r.length);

// get max array length to establish maxNumCol
maxNumCol = Math.max(...arr3.map(r => r.length));
console.log("maxNumCol is: " + maxNumCol);

// compare lengths of arrays, and if one is less than maxNumCol, adjust maxNumCol to that smaller length (expected to only be one less and not more)
// arr3.forEach(function(r) {
//   maxNumCol = r.length < maxNumCol ? r.length : maxNumCol;
//   //console.log("This maxNumCol for the first forEach at r[" + index + "] is " + maxNumCol);
// });

// remove the last element from any array that exceeds length past the adjusted maxNumCol
// arr3.forEach(function(r) {
//   if ( r[maxNumCol] === "" ) {
//     //console.log("This maxNumCol for the second forEach at r[" + index + "] is " + maxNumCol);
//     r.pop();
//   }
// });
arr3.forEach((r, index) => {
  while ( r.length < maxNumCol ) {
    console.log("r[" + index + "] is < maxNumCol");
    r.push("");
  }
});


// arr3.forEach(function(r, index) {
//   maxNumCol = r.length < maxNumCol ? r.length : maxNumCol;
//   if ( r[maxNumCol] === "" ) {
//     console.log("r[maxNumCol] is " + r[maxNumCol]);
//     r.pop();
//   }
// });
console.log("maxNumCol is: " + maxNumCol);
console.log("Max length in array is: " + maxNumCol);
console.log(arr3);

// let maxLen = function(arr) {
//    return Math.max(...arr.map(el => el.length));
// }
//
// console.log("maxLen is: " + maxLen(arr3));
