let x = 12;
var name = "Gilbert McJohnson";
console.log();

/*
to run js in vscode, use node [filename] but make sure you are in the right directory

JS uses curly brackets like java instead of colons and indentation (make sure to include all closing brackets)

console.log() for js
console.writeline() for java

semicolon after each thing

javascript has strict equality operator (===)
js performs type conversion so 3 and "3" are the same if conditionals don't use === which is strictly not equal
!= is not equal and !== is strictly non equal

&& for "and" in conditionals, || for "or"
*/

function strict(x) {
    if (x === 3) {
        return true;
    } else {
        return false;
    }
}

console.log(strict(3));

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return "Go Home!";
  }
  // Only change code above this line
}

/*js uses switch statements for many options
remember to include break
*/

function switchTest(x) {
    switch (x) {
        case "cheese":
            console.log("dairy");
            break;
        case "salt":
            console.log("seasoning");
            break;
        case "kiwi":
            console.log("fruit");
            break;
        default: 
            console.log("other food");
    }
}

console.log(golfScore(5, 4));
switchTest("kiwi");

/* once return is called, the function is exited*/

let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;
    case 7:
    case 8: 
    case 9:
    count = count;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;
  }
  
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

console.log(cc(2)); 
cc(3); cc(7); cc('K'); cc('A');

const dog = [
    {"name": "tim",
    "age": 12,
    "month": "april",
    "weight": 25,
    "friends": ["dexter", "max", "oreo"]},

      {"name": "scoob",
      "age": 18,
      "weight": 75, 
      "friends": ["shaggy", "velma", "daphne"]}
];

console.log(dog.name);
console.log(dog["name"]);
const dogFriends = "friends";
console.log(dog[dogFriends]);
dog["color"] = "tan";
delete dog["month"];

function phoneticLookup(val) {
  let result = "";

    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    }
    result = lookup[val];

  return result;
}

console.log(phoneticLookup("alpha"));
console.log(phoneticLookup("bravo"));
console.log(phoneticLookup("charlie"));

boolVal = dog.hasOwnProperty("name");
console.log(boolVal);

const backpack = {
  "black": {
    "front": {
      "writing": "pens",
      "misc": "lighter"
    },
    "back": {
      "machine": "laptop",
      "tools": "charger"
    }
  }
}

/*use = to create an object
use : for attributes
use [] when creating multiple instances of an object*/

const contents = backpack.black.back["machine"];
console.log(contents);

const myPlants = [
  {
    type: "indoor",
    list: [
      "pothos",
      "palm",
      "small"
    ]
  },
  {
    type: "outdoor",
    list: [
      "fig tree",
      "spider"
    ]
  }
]

const fastGrower = myPlants[1].list[1];
console.log(fastGrower);

/*push(add to end), pop(remove and return from end), shift(remove and return first), unshift(add to beginning*/

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop == "artist" && id.hasOwnProperty(prop) == false && value != "") {
    records[id].artist = value;
  }
  if (prop == "tracks" && records[id].hasOwnProperty("tracks") == true) {
    records[id].tracks.push(value);
  }   
  if (prop == "tracks" && records[id].hasOwnProperty("tracks") == false) {
    records[id].tracks = [];
    records[id].tracks.push(value);
  }
  if (prop == "albumTitle") {
    records[id].albumTitle = value;
  }
  if (value == "" && prop == "artist") {
    delete records[id].artist;
  }
  if (value == "" && prop == "tracks") {
    delete records[id].tracks;
  }
  return records;
}

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 2468, "tracks", "Free");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

let whileVar = 5;
const loopArray = [];
while (whileVar >= 0) {
  loopArray.push(whileVar);
  whileVar--;
}
console.log(loopArray);

for (let i = 6; i <= 10; i++) {
  loopArray.push(i);
}
console.log(loopArray);

/*specify exact index (arr[i][j]) when iterating through iterables
for loop above, while loop below, do while below while*/

function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

let u = 14;
const doWhileArray = [];

do {
  doWhileArray.push(u);
  u++;
} while (u < 15);

console.log(doWhileArray);

/*lil bit of recursion
this adds each value in the array*/

function sum(arr, n) {
  let sumNum = 0;
  if (n <= 0) {
    return sumNum;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

console.log(sum([3, 5, 9], 3));

/* */

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop) == true) {
      switch(prop) {
        case "lastName":
        return contacts[i].lastName;
        break;
        case "number":
        return contacts[i].number;
        break;
        case "likes":
        return contacts[i].likes;
        break;
      }
    } else if (contacts[i].firstName == name && contacts[i].hasOwnProperty(prop) == false) {
      return "No such property";
    }
  }
  return "No such contact";
  // Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Akira", "address"));
console.log(lookUpProfile("Bob", "potato"));

function between(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(between(3, 7));

function numToStr(x) {
  return parseInt(x);
} 
console.log(numToStr("12"));

/*parseInt() can use a radix to specify the base (2 is binary)*/
binaryNum = parseInt("1101", 2);
console.log(binaryNum);

/*ternary operator for one line conditional in this case, or multiple line*/
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);

function checkSign(num) {
  return (num > 0) ? "positive"
  : (num < 0) ? "negative"
  : "zero";
}
checkSign(10);

/*lil more recursion */

function countdown(n){
  if (n <= 0) {
    return [];
  } else {
    const numList = countdown(n - 1);
    numList.unshift(n);
    return numList;
  }
}
console.log(countdown(10));

function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [endNum];
  } else {
    const temp = rangeOfNumbers(startNum + 1, endNum);
    temp.unshift(startNum);
    return temp;
  }
};
console.log(rangeOfNumbers(5, 10));

/*can use Object.freeze([objectname]) to prevent data mutation
use the syntax below for arrow functions
for default parameters, use syntax for strConcat3*/

const sampleConcat = (strConcat1, strConcat2, strConcat3 = [6, 7]) => strConcat1.concat(strConcat2.concat(strConcat3));
console.log(sampleConcat([1, 2, 3], [4, 5]));

/*rest parameter is ...[variable]*/

const restSum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(restSum(2, 4, 5, 3));

/*... is the spread operator, returning separated values*/

const spreadArr1 = [2, 8, 6, 9, 3];
let spreadArr2;
spreadArr2 = [...spreadArr1];
console.log(spreadArr2);

const shirts = {
  white: 100, 
  black: 200, 
  green: 20,
  red: 50
};
/*destructuring or creating variables from object attributes*/
const {white, black, green, red} = shirts;

const shirts1 = {
  blue: 100, 
  pink: 200, 
  yellow: 20,
  orange: 50
};

const {blue: blue1, pink: pink1, yellow: yellow1, orange: orange1} = shirts1;

function palindrome(str) {
  let newStr = "";
  let str1 = str.toLowerCase().replace('_', '').replace(/\W/g, '').replaceAll(' ', '');
  for (let i = 0; i < str1.length; i++) {
    newStr = str1[i] + newStr;
  }
  if (newStr == str1) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("w *o_w"));

/*reassigning variables with deconstruction requires brackets*/

let firstD = 8, secondD = 12;
[firstD, secondD] = [secondD, firstD];
console.log(firstD);

/*convert numbers to roman numerals*/
const numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
let ans = "";

function convertToRoman(num) {
    
  for (let i = numbers.length-1; i >= 0; i--) {
      let temp = 0;
      if (num/numbers[i] >= 1) {
          temp = num%numbers[i];
          ans += roman[i].repeat(num/numbers[i]);
          num = temp;
      }
  }
  return ans;
}

console.log(convertToRoman(2014));

/*split returns a string in an ordered list of substrings, splice, slice*/

const splitString = "whoops";
const splitList = splitString.split("o", );
console.log(splitList);

function chunkArrayInGroups(arr, size) {
  let arr2 = [];
  let sub = [];
  for (let i = 0; i < arr.length/size; i++) {
    sub = arr.slice(i*size, (i*size)+size);
    arr2.push(sub);
  }
  console.log(arr2);
  
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/*regular expressions - in first example, .test method is called on the regex value with the string as input
the .match method is the opposite: called on the string with the regex as the input*/
let myRegex = /dhe|Over|dog/i;
let myString = "The 123 dog jumped over the fence, the dog flew off of a mountain, then the hog ate a pineapple, poneapple, peneapple";
console.log("test regex output is: " + myRegex.test(myString).toString());

let myMatch = myString.match(myRegex);
console.log("match regex output is: " + myMatch)

/*used more than one flag here (g and i)*/

let repeatRegex = /dog/gi;
console.log("repeated match is: " + myString.match(repeatRegex));

//dot expression (wildcard) to match with any character in a particular string

let dotRegex = /.og/g
console.log(dotRegex.test(myString));
console.log(myString.match(/p[aeiou]neapple/gi)); //includes any char in []
console.log(myString.match(/[a-v]/ig)); // includes any char in range in []
console.log(myString.match(/[^a-z ]/gi)); // ^ doesn't include specified chars in []
console.log(myString.match(/p+/gi)); // +includes repetitions of specified char
console.log(myString.match(/ap*/g)); //*includes any char

console.log(myString.match(/^The/gi))
console.log(/peneapple$/.test(myString))

console.log(myString.match(/T.*h/g)); //greedy
console.log(myString.match(/T.*?h/g)); //lazy with ?

//shortcuts: \w for all alphanumeric, \W for all non alphanumeric, \d for all numeric, 
// \D for non numeric, \s for whitespace, \S for all non whitespace

console.log(myString.match(/\w/g).length);
console.log(myString.match(/\w/g));
console.log(myString.match(/\W/g));
console.log(myString.match(/\d/g));

// username validator
function usernameVal(username) {
  let userCheck = /^[a-z][a-z]+\d*$|^[a-z]+\d+\d+$/i;
  let result = userCheck.test(username);
  console.log(result)
}

const usernames = ["JackOfAllTrades", "A54", "J1", "CB573JJ"];

for (let i = 0; i < usernames.length; i++) {
  usernameVal(usernames[i]);
}

// {x,y} for range of specified chars, {x,} for atleast, {x} for exact amount

console.log("\n" + /yo{4,8} yo/.test("yoooooo yo"));

//? indicates 0 or 1 of specified chars

console.log(/te?ster/.test("tster"));

let checker1 = /(\w\D)(?=\w{2,})(?=\d{2})/.test("12345");
console.log(checker1);

//capture groups

let capGroup = /^(\d+) \1 \1$/.test("42 42 42");
console.log(capGroup)

console.log("one two three".replace(/(\w+)\s(\w+)\s(\w+)/, "$3 $2 $1")); //outputs three two one

let hello = "   Hello, World!  ";
let wsRegex = /(\s{2,})/; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result);

//Data structures (basic)
//push adds to the end, unshift adds to the beginning, shift, pop
//Splice: remove any number of consecutive elements in an array // array.splice([start index], [num chars], replacement chars)

unsplicedArr = [2, 3, 6, 5, 7, 1];
console.log(unsplicedArr.splice(1, 3));
arrSplice = unsplicedArr.splice(0, 1, 3, 7, 3, 12)
console.log(arrSplice);
console.log(unsplicedArr);

//slice: extract a copy from an array // arr.slice(start index, end index [not included])
console.log(unsplicedArr.slice(0, 3));

//arr.indexOf(char)

let activities = {
  chess: 2000,
  work: "developer",
  music: "guitar",
  hobby: function() {return "My chess rank will be " + this.chess + "."}
};

activities.sport = "wrestling";
activities["cooking"] = "master"
console.log(activities)

let cooking = "cooking";

console.log(activities[cooking]);
delete activities.cooking;

//can use obj.hasOwnProperty(var) // var in obj

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let i = 0;
  for (let user in usersObj) {
    if (usersObj[user].online == true) {
      i++;
    }
  }
  return i;
}

console.log(countOnline(users));

console.log(activities.hobby());

function doge() {
  this.name = "tim",
  this.color = "tan",
  this.age = 12
}

let timsBrother = new doge();

timsBrother.name = "chauncy";

function vehicle(wheels, color, engine) {
  this.wheels = wheels;
  this.color = color;
  this.engine = engine; // OWN PROPERTY ---- hasOwnProperty() only applies to own properties
}

vehicle.prototype = {
  constructor: vehicle,
  hp: 350
}

let acuraRSX = new vehicle("enkai", "blue", "k20");
console.log(acuraRSX);

let audiQuattro = new vehicle("BBS", "white", "turbo inline 5");
vehicle.prototype.type = "car"; //   PROTOTYPE PROPERTY
console.log(audiQuattro);
console.log(audiQuattro.type);

function joinDogFraternity(candidate) {
  if (candidate.constructor == doge) {
    return true;
  } else {
    return false;
  }
}

console.log(joinDogFraternity(timsBrother));
console.log(audiQuattro.hp)

// representation of inheritance with animal supertype

function Animal() {}
Animal.prototype = {
  constructor: Animal,
  describe: function() {
    console.log("My name is " + this.name)
  }
}

//cat instance of animal

function cat(name) {
  this.name = name;
}

cat.prototype = {
  constructor: Animal
}

console.log(cat.name)

//better syntax for instantiating an object
function bear() {}
bear.prototype = Object.create(Animal.prototype);
bear.prototype.roar = function() {
  console.log("Roar!");
}
bear.prototype.constructor = bear; //changes the constructor of the bear object to bear from animal
//can do types of bears by creating instances with bear prototype

let runMixin = function(obj) {
  obj.run = function() {
    return "Running!"
  }
}

runMixin(bear);
runMixin(cat);

//including any variables or functions in the constructor allows for closure (can only be changed from within the constructor)

//immediately invoked anonymous function
(function() {
  console.log("this is logged from an anonymous function");
})();

//combines two mixins into a immediately invoked function expression (IIFE)

let funModule = (function() {
  return {
    danceMixin: function(obj) {
      obj.dance = function() {
        console.log("Dancing right now");
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();

funModule.danceMixin(bear);
console.log(bear.dance);

//functional recap

const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const teaForFam = getTea(prepareGreenTea, 27);
const teaForFriends = getTea(prepareBlackTea, 13);

console.log(
  teaForFam,
  teaForFriends
);

/*
callbacks are functions that are passed into another function to decide its invocation
first class functions vs. higher order functions
lambda functions are passed in to or returned from another function
*/

//slice vs slice vs split

const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
"Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/*use parameters in functions as to not adjust the state of global variables, 
  create copies of inputted variables since since changing the parameter would 
  reference the same variable as the global variable
*/

function addBook(arr, bookName) {

  let newArr = [...arr]

  newArr.push(bookName);
  return newArr;
}

function removeBook(arr, bookName) {

  let newArr = [...arr]
  const book_index = arr.indexOf(bookName);

  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;
    }
}

addBook(bookList, "The Hound of the Baskervilles");
console.log(bookList);


//using arrow function to create a json object with map function


const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

const ratings = watchList.map(movie => ({
  title: movie.Title,
  rating: movie.imdbRating
}));

console.log(JSON.stringify(ratings));



Array.prototype.myMap = function(callback) {
  const newArray = [];
  this.forEach((val, index, arr) => 
  newArray.push(callback(val, index, arr)));
  return newArray;
};

let funcArr = ["yo", "the", "dog"];
console.log(funcArr.myMap(word => (console.log(word))));
console.log(funcArr.map(word => (console.log(word))));

const filteredList = (watchList.map(movie => ({
  title: movie.Title,
  rating: movie.imdbRating
}))).filter(function(movie) {
  let rating = movie.rating;
  if (parseInt(rating) >= 8) {
    return {
      title: movie.Title,
      rating: movie.rating
    }
  }
});

console.log(filteredList);

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) == true) {
      newArray.push(this[i])
    }
  }
  return newArray;
};

console.log([2, 5, 4, 7, 9].myFilter(val => val >= 3));

/*additional topics for the future:
node: npm is just a package manager and node allows for js code to be run server side instead of in the browser

promises (es6): wrapper for a variable that doesn't have a value, but will in the future

json: just js objects - also a widely used format when accessing data through the web - wget from a host, it may return json

DOM: document object model - guide for js code to access html/css tags
  document is the most important object when working under the DOM system
  query selector method allows access to an individual html element by using a css element:
    window.document.querySelector('.button')
  this can be used when "listening" to events:
    btn.addEventListener('click', () => {
      console.log("You clicked the button");

      document.body.style.backgroundColor = 'red';
    })
  event listening is common in front-end and can be used, for example, to update the ui according to the users actions
  however, this mutates the ui (imperative) since js is run line-by-line in the browser. js libraries solve this issue
  with declarative code - ui is a function of input (non-mutating)

  typescript
*/

//make json file with many values, use regexp to create an array with all values

const arrow = (arr => console.log(arr))
arrow([1, 2, 3, 4])