// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
    // your code here
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(Math.pow(arr[i], 2));
    }
    return newArray;
}
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// Take an array of numbers and make them strings
function stringItUp(arr) {
    // your code here
    let newStr = "";
    for (let i = 0; i < arr.length; i++) {
        newStr += arr[i] + " ";
    }
    return newStr;
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names
function capitalizeNames(arr) {
    // your code here
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let newStr = (arr[i].charAt(0)).toUpperCase();
        for (let j = 1; j < arr[i].length; j++) {
            newStr += (arr[i].charAt(j)).toLowerCase();
        }
        newArray.push(newStr);
    }
    return newArray;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4) Make an array of strings of the names
function namesOnly(arr) {
    // your code here
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i].name)
    }
    return newArray
}
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80,
    },
    {
        name: "Eric Jones",
        age: 2,
    },
    {
        name: "Paris Hilton",
        age: 5,
    },
    {
        name: "Kayne West",
        age: 16,
    },
    {
        name: "Bob Ziroll",
        age: 100,
    },
]))

// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr) {
    // your code here
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        let newStr = arr[i].name
        if (arr[i].age < 18) {
            newStr += " is under age!!"
        }
        else {
            newStr += " can go to The Matrix"
        }
        newArray.push(newStr)
        newStr = ""
    }
    return newArray
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

/*
  Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
   
  Examples:
      doubleValues([1,2,3]) // [2,4,6]
      doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
   
  */
function doubleValues(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i] * 2)
    }
    return newArray
}
console.log(doubleValues([1, 2, 3]));
/*
  Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
   
  Examples:
      onlyEvenValues([1,2,3]) // [2]
      onlyEvenValues([5,1,2,3,10]) // [2,10]
   
  */
function onlyEvenValues(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArray.push(arr[i])
        }
    }
    return newArray
}
console.log(onlyEvenValues([1, 2, 3, 4, 5, 7, 8, 9, 10, 11]));

// console.log(filteredNumbers);F

// console.log(`Initial array ${numbers}`);

// numbers.pop();
// console.log(`Popped array ${numbers}`);

// numbers.push(123);
// console.log(`Pushed array ${numbers}`);

// numbers.shift();
// console.log(`shifted array ${numbers}`);

// numbers.unshift(1234123);
// console.log(`Unshifted array ${numbers}`);

// const string = "string";
// console.log(string.split(""));
// const arrayOfStings = string.split("");

const originalFlavors = [
    "Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond",
];

/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:
   
  (1) an array
   
  Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.
   
   
   
  To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31.
   
  i.e. is31Flavors(originalFlavors) will return TRUE.*/

function is31Flavors(arr) {
    if (arr.length === 31) {
        return true
    }
    else {
        return false
    }
}
/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor.
   
  Your function should accept:
   
  (1) an array
  (2) a flavor
   
   
   
  Your function should add the flavor to the front of the array and console.log the resulting array.
   
  For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */

function addFlavor(array, flavor) {
    return flavor.unshift(array);
}
//addFlavor("Rainbow Sherbert", originalFlavors)

/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array.
   
  Your function should accept:
   
  (1) an array
   
  Your function should remove a flavor from the end of the array and console.log the resulting array.
   
   
   
  For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/
function removeLastFlavor(originalFlavors) {
    return originalFlavors.pop()
}

/* Task 4: Write a function that returns a flavor at a given index in the array.
   
  Your function should accept:
   
  (1) an array
  (2) an index
   
  For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */
function getFlavorByIndex(originalFlavors, index) {
    return originalFlavors[index]
}
//console.log(getFlavorByIndex(originalFlavors, 2))

/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array.
   
  Your function should accept:
   
  (1) an array
  (2) a string (flavor)
   
  For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla.
   
  Hint: You can use .splice() for this
   
  */
function removeFlavorByName(originalFlavors, nameOfFlavor) {
    let newArray = []
    let j = 0
    for (let i = 0; i < originalFlavors.length; i++) {
        if (originalFlavors[i] !== nameOfFlavor) {
            newArray.splice(j++, 0, originalFlavors[i])
            // newArray.push(originalFlavors[i])
        }
    }
    return newArray
}
const result = removeFlavorByName(originalFlavors, "Vanilla")
console.log(result)

/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array.
   
  Your function should accept:
   
  2 arguments 1 for your new array and one for your original array
   
  and should return a new array that is identical to the old array. You can name the new array however you'd like. */
function saveOldArray(newArray, originalArray) {
    for (let i = 0; i < originalArray.length; i++) {
        newArray.push(originalArray[i])
    }
    return newArray;
}
const newArray = saveOldArray([], originalFlavors)
console.log(newArray)

/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray 
with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.
   
  Your function should accept:
   
  (1) an Array
  (2) a string (i.e. "chocolate")
   
  and return a new array.
   
  For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].
   
  DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.
   
  hint - you can use the .includes method to help you solve this */

// function filterByWord(array, word) {
//   const filteredArray = [];
//   array.forEach(function (flavor) {
//     if (flavor.includes(word)) {
//       console.log(flavor);
//     }
//   });
//   //   return filteredArray;
// }

// console.log(filterByWord(originalFlavors, "chocolate"));
/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/
function filteredArray(arr,str){
    let newArray=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i].include(str)===true){
            newArray.push(arr[i]);
        }
    }
    return newArray
}
/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.
   
  Your function should accept:
   
  (1) an array
   
  and should return the average number of words per item in the array.
   
  For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */

function getAverageWordLength(/*code here*/) {
    /*code here*/
}
