/*
function sayName (name) {
		var greeting = "Hello, "+name;
		alert (greeting);
}

sayName('Bob');


var result = 0;
function add(number) {
		var result = 0;
		result += number;
}

add(5);
add(15);
console.log (result);

function greet(who, text) {
		who = ", " + who + "!";
		alert(text + who);
}
 var who ="John";

greet(who, "hello");

alert(who);

function sum(a,b) {
		return a+b;
}

var res1 = sum (10,2);
var res2 = sum ("10","2");

console.log (res1, res2);


function checkAge (age){
	return (age<18)? false: "you are allowed";
}

var res = checkAge(prompt("hhhh"));

console.log (res);


function min (num1, num2, num3) {
	if (num1<num2 && num1<num3) {
			return num1;
	} else if (num2<num1 && num2<num3){
			return num2;
	}
	return num3;
}
var res = min (17, 4, 11);
console.log (res);



function pow () { 
		for (var i =0; i<3; i++);{
				 var r = i*i; 
				 return i;
		} 
}

var res = pow ();
console.log (res);
					

function pow (a,b) {
		for (var b=0; b<3; b++);
				var res = (a+b)*a;
		}
} 


function pow(base, power) {
		if (power === 0) {
				return 1;
		}
		if (power<0) {
				var negative = true;
				power = -power;
		}
}
var result = base;

for (var i=1 i<power; i++) {
		 result *=base;
		 }
return negative? 1/result: result;
}

console.log (pow(2,0));
console.log (pow (2,1));
console.log (pow (2,-2));


function argsTest() {
		console.log(arguments);
		console.log(arguments[0]);
}

argsTest ('a', 2, true, {a:5});


function min (num1, num2, num3) {
		var min = num1;
		for (var i=1; i<arguments.length; i++) {
				if (arguments[i]<min) {
						min = arguments[i];
				}
		}
		return min;
}
console.log(min(1,3,5,0,-5,35, -9));

var user = prompt ('who are you?');

if (user !== 'admin') {
	alert ("i don't know you");
} else if (user == null) {
	alert ('cancelled enter')
} else if (user == 'admin') {
	var pass = prompt ('password');
} if (pass == "qwerty") {
	alert ('you are welcome');
} else if (pass !== 'qwerty') {
	alert ('get out');
}  








if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result = (a + b < 4)? alert ('less'): alert ('too much');




var message;

if (login == 'Вася') {
  message = ;
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {''
  message = ;
}

var message = (login == 'Вася')? 'Привет' :
	(login == 'Директор') ? 'Здравствуйте' :
	(login == '') ? 'Нет логина' :
 '';


var age = prompt('num');
if (age>= 14 && age <= 90) {
	alert ('ok');
} else {
	alert ('shit');
}


if (age <14 && age >90 );

if (!(age >= 14 && age <= 90));


if ( null >= 0 && NaN == NaN || !(null == 0 || alert(4)) || alert(2) ) {
alert('TRUE');
}




var userName = prompt('Who are you?');

if (userName === 'admin') {

    var pass = prompt('password', '');

    if (pass === 'qwerty') {
        alert('you are welcome');
    } else if (pass == null) {
        alert('password cancelled')
    } else {
        alert('get out');
    }

} else if (userName == null) {
    alert('enter cancelled');
} else {
    alert('get out');
}



var greeting = prompt('say hello');
var name = prompt('your name');

function greet(greeting, name) {

    if (!greeting && !name) {
        console.log('warning');

    } else if (!name) {
        console.log(greeting + ', Stranger');

    } else if (!greeting) {
        console.log('Hi,' + name);
    } else {
        console.log(greeting, ',' + name, '!');
    }
}


greet(greeting, name);




function greet(greeting, name) {
    if (arguments.length < 2) {
        return 'not all arguments were provided'
    }
    greeting = greeting || 'hi';
    name = name || 'stranger';

    return greeting + ', ' + name;
}
var res = greet('hello', '');
console.log (res);


var a = {
    first: 1
}

function changeObj(obj) {
    obj.second = 5;
}

console.log(a);
changeObj(a);
console.log(a);



var arr = [1, 2, 3, 4, 5];

function changeObj(arr) {
    arr.push('new value');
}
console.log(arr);
changeObj(arr);
console.log(arr);



var arr = [1, 2, 3];

function my(arr) {
    for (var i = 1; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
}

my(arr, 'one', 'two', 'three');

console.log(arr);




var arr = [1, 2, 5, 8, 24, 12, 7, -67, 3];


var odd = [];
var even = [];

function mine(arr) {
    var obj = {
        odd: [],
        even: []
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            obj.even.push(arr[i]);
        } else {
            obj['odd'].push(arr[i]);
        }
    }
    return obj;
}

var res = mine(arr);
console.log(res);

//console.log(obj);
//console.log(odd);

function cube(number) {
  var res = Math.pow(number - 2, 3); {
    if (number <= 2) {
      return 0;
    }
  }
  return res;
}
cube();

console.log(cube(6));


console.log(a);
console.log(test());


var a = 2;
var b = 3;
var c = 5;

function sum(a, b) {
  return a + b;
}
var str = `the result of ${a} + ${b} is ${c}`;
var str = `the result of a + b is ${a+b}`;
var str = `the result of a + b is ${sum(a,b)}`;

console.log(str);



function test() {
  console.log('hello from function');
}


var arr = [1, 2, 3];
var arr1 = [4, 5, 6, ];
var str = `my beautiful string`;

var res = arr.concat(arr1);

console.log(res);


var arr = [1, 2, 3];
var arr1 = [4, 5, 6, ];
var str = `my beautiful string`;

var res = str.indexOf(`i`, 5);

console.log(res);

var arr = [1, 2, 3];
var arr1 = [4, 5, 6, ];
var str = `my beautiful string`;

var res = str.slice(0, 6);
var res = str.substring(8, 6);
var res = str.substr(3, 3);
var res = str.split ('u');
var a = res.join ('---');
console.log (a);

console.log(res);

var str = `my beautiful string`;

var res = str.slice(0, 6);
var res = str.substring(8, 6);
var res = str.substr(3, 3);
var res = str.split('u');
var a = res.join('---');
console.log(a);

function words(str) {
  return str.split(' ').length;
}

console.log(words(`my beautiful string`));



var str = `my beautiful string`;

function reverseString(string) {
  return string.split('').reverse().join('');
}
console.log(reverseString(str));




// zamikanie

function idGenerator() {
  var id = 1;
  return function () {
    return id++;
  }
}

var nextId = idGenerator();
console.log(nextId());
console.log(nextId());
console.log(nextId());
console.log(nextId());



function createGreeting(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  }
}
var sayHi = createGreeting('Hi');
console.log(sayHi);
sayHi('lol');
sayHi('kkk');
sayHi('rick');
//var sayHi = function (name) {
//  console.log(`${greeting}, $(name)`);
//}


//function callback olololololololo caaallllll fuuuucking baaack caalllllbaaackkk

var allFriends = ["Mike", "Ann", "Helen", "Bob"];

function greetFriends(friends) {
  for (var i = 0; i < friends.length; i++) {
    console.log('Hello,', friends[i]);
  }
}

function greet(friend) {
  console.log('Hello, ' + friend);
}
greetFriends(allFriends);

//same

var allFriends = ["Mike", "Ann", "Helen", "Bob"];

function greetFriends(friends) {
  for (var i = 0; i < friends.length; i++) {
    greet(friends[i]);
  }
}

function greet(friend) {
  console.log('Hello, ' + friend);
}
greetFriends(allFriends); * /


function getUserInput(firstName, lastName, gender, callback) {
  var name = firstName + lastName;
  callback(name, gender);

}


function genericPoemMaker(name, gender) {
  console.log(name + " text ");
  console.log("A " + gender + " text ");
}

getUserInput('nicolas', 'erfe', 'f', genericPoemMaker);



*/
//var arr = [1, 22, -44, 53, -12, 78, -14, 68];
//arr.forEach(function (elem, i) {
//  console.log(`there is ${elem} on the ${i} position`);
//  console.log(arr);
//});
//var newArray = arr.filter(function (elem) {
//  return elem > 0;
//});
//
//console.log(newArray);
//var arr2 = [1, 4, 5, 9, 55, 8, 81, 25, 87, 9];
//
//var newArr = arr2.filter(function (elem) {
//
//  if (Math.sqrt(elem) === Math.ceil(Math.sqrt(elem))) {
//    return true;
//  }
//
//});
//console.log(newArr);
//
//var arr = [1, 2, 3, 4, 5];
//
//var newArray = arr.map(function (number) {
//  return Math.pow(number, 3);
//});
//
//console.log(newArray);
//
//
//var arr2 = ['this', 'is', 'halloween'];
//
//var newArray2 = arr2.map(function (word) {
//  return word.length;
//});
//
//console.log(newArray2);
//var str = 'London is the capital if Great Britain';
//var arrStr = str.split('');
//
//var res = arrStr.map(function (letter, index) {
//
//  if (letter == letter.toUpperCase() && letter !== ' ') return index;
//});
//
//
//
//var finish = res.filter(function (letter, index) {
//  if (letter !== undefined) return true;
//});
//
//
//console.log(finish);
//
//var arr = [4, 76, 89, 9, 12, -5, -18];
//
//var resOfevery = arr.every(function (num) {
//  return num > 0;
//});
//console.log(resOfevery);
//
//var resOfsome = arr.some(function (num) {
//  return num > 0;
//});
//console.log(resOfsome);
//
//
//
//var arr = ['apple', 'orange', 'banana', 'lemon'];
//arr.reduce(function (previous, current, i) {
//  console.log(i + ':', previous, current);
//
//  return current;
//});
//
//var arr = [1, 2, 3, 4, 5, 6, 7, 8];
//
//var res = arr.reduce(function (previous, current, i) {
//  return previous + current;
//}, 10);
//
//console.log(res);
//
//
//var arr = ['one', 'two', 'three'];
//
//var res = arr.reduce(function (previous, current, i) {
//  return previous + current.split('').reverse().join('');
//}, '');
//
//console.log(res);
//var arr = [32, 4, -5, 78, -55, 11];
//
//var res = arr.reduce(function (previous, current) {
//  if (current > previous) {
//    return current;
//  } else {
//    return previous;
//  }
//});
//console.log(res);
//
//var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//
//var res = arr.reduce(function (prev, curr) {
//  return prev.concat(curr);
//});
//
//console.log(res);
//
//var obj = {
//  value: 5,
//  sayHi: function () {
//    console.log('hi');
//  }
//};
//obj.sayHi();
//function Planet(name, water) {
//  this.name = name;
//  this.isWaterPresent = water;
//};
//var earth = new Planet('Earth', true);
//var mars = new Planet('Mars', false);
//Planet.prototype.form = 'round';
//Planet.prototype.isInhabitable = function () {
//  return this.isWaterPresent;
//};
////{
////  name: 'Earth',
////  radius = 1000;
////}
//
//console.log(earth);
//console.log(earth.form);
//console.log(earth.isInhabitable());
//
//console.log(mars);
//console.log(mars.form);
//console.log(mars.isInhabitable());
//Object.prototype.sayHi = function () {
//  console.log('hi');
//}
//
//var a = {};
//var b = 5;
//a.sayHi();
//b.sayHi();
//console.log(a);
//var arr = [1, 2, 3];
//
//var prot = Object.getPrototypeOf(arr);
//console.log(prot);
//
//var objPrototype = Object.getPrototypeOf(prot);
//console.log(objPrototype);
//
//var matrix = {
//  year: 1996,
//  genre: 'fantactis'
//};
//
//var movie = {
//  getYear: function () {
//    return this.year;
//  },
//  getGenre: function () {
//    return this.genre;
//
//  }
//};
//Object.setPrototypeOf(matrix, movie);
//
//console.log(matrix.getYear());
////
//function Car(brand, country) {
//  this.brand = brand;
//  this._country = country;
//};
//
//Car.prototype.getBrand = function () {
//  return this.brand;
//};
//Car.prototype.country = function () {
//  return this._country;
//};
//
//var smart = new Car('smart', 'unknown');
//var audi = new Car('audi', 'hz');
//var bmw = new Car('bmw', 'germany?');
//
//console.log(smart.getBrand());
//console.log(smart.country());
//console.log(audi.getBrand());
//
//console.log(bmw.getBrand());
//
//
////
//var arr = [11, 3, 11, 11];
//
//var res = a1.map(function (elem, i) {
//  return elem * elem;
//});
//
//console.log(res);
//
//
//var unic = arr.reduce(function (prev, curr) {
//  if (arr.indexOf(prev) === arr.lastIndexOf(prev)) {
//    return prev;
//  } else {
//    return curr;
//  }
//});
//
//console.log(unic);
//
//
//var objects = [
//  {
//    name: 'kate',
//    pass: '123'
//  },
//  {
//    name: 'ann',
//    pass: '124'
//  },
//  {
//    name: 'mary',
//    pass: '133'
//  },
//  {
//    name: 'jane',
//    pass: '125'
//  },
//];
//
//var deleted = objects.map(function (elem) {
//  delete elem.pass;
//  return elem;
//})
//
//console.log(deleted);
////
//
//
//var a1 = [1, 3, -4, -9, 6, , 5, -8, 4, 2];
//
//var result = a1.filter(function (elem, i) {
//  return elem % 2 === 0 && elem > 0;
//});
//
//
//                                                   multifilter
//
//console.log(result);
//function multifilter() {
//  var outerArguments = arguments;
//  return function (el) {
//    var result = true;
//    for (i = 0; i < outerArguments.length; i++) {
//      result = result && outerArguments[i](el);
//    }
//    return result;
//  }
//}
//
//function isEven(el) {
//  return el % 2 === 0;
//}
//
//function isGTTen(el) {
//  return el > temp;
//}
//var result = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14].filter(multifilter(isEven, isGTTen));
//console.log(result);
//console.log(numbers(1234));
//
//
//
//
//
//
//
//                                       IIFE
//
//var test = 5;
////
//(function myFunc(innerVar) {
//  console.log('hello', innerVar)
//})(test);
//
//for (var i = 1; i < 5; i++) {
//
//  (function myfunc(i) {
//    setTimeout(function () { //setTimeout (function, timespan);
//      console.log(i);
//    }, 1000 * i);
//  })(i);
//
//}
//
//
//
//var idGenerator = (function () {
//  var id = 0;
//
//  function increment() {
//    return id++;
//  }
//
//  function reset() {
//    id = 0;
//  }
//  return {
//    increment: increment,
//    reset: reset
//  };
//})();
//console.log(idGenerator.increment());
//console.log(idGenerator.increment());
//console.log(idGenerator.increment());
//console.log(idGenerator.reset());
//
//console.log(idGenerator.increment());
//console.log(idGenerator.increment());
//console.log(idGenerator.increment());
//console.log(idGenerator.increment());
//
//function test() {                     //rekursiya
//  test();
////}
////test();
//
//
//function pow(x, p) {
//  if (p === 1) {
//    return x;
//  } else {
//    return x * pow(x, p - 1);
//  }
//}
//var res = pow(2, 4);
//console.log(res);
//
//
//
//function factorial(n) {
//  if (n === 1) {
//    return n;
//  } else {
//    return n * factorial(n - 1);
//  }
//}
//var n = factorial(4)
//console.log(n);
//
////
////
/////                                                      ERRORS
//
//
//
//
//function MyOwnError(message) {
//  this.name = 'MyOwnError';
//  this.message = message;
//  this.stack = (new Error).stack;
//}
//
//function randomNumber() {
//  if (Math.random() > 0.5) {
//    return true;
//  } else {
//    throw new MyOwnError('value is too low');
//  }
//}
////function foo() {
////  bar();
////}
////
////function bar() {
////  JSON.parse('d');
////}
//try {
//  randomNumber();
//  foo();
//  console.log(obj.value) // mistake obj is not defind will stop other code
//} catch (error) {
//  console.log(error.name);
//  console.log(error.message); // try catch() - code will work after this
//  console.log(error.stack)
//} finally {
//  console.log('hidden spiden');
//}
//
//console.log('hi');
////
////
////
////
//function primitiveMultiply(a, b) {
//  if (Math.random() < 0.5) {
//    return a * b;
//  } else {
//    throw new Error();
//  }
//}
//
//function reliableMultiply(a, b) {
//
//  try {
//    return primitiveMultiply(a, b);
//  } catch (Error) {
//    console.log(Error.name)
//    return reliableMultiply(a, b)
//  }
//
//}
//
//
//console.log(reliableMultiply(8, 2))



//var arr1 = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8];
//var arr2 = [1, 11, 45, 110, 55, 23]
//var sorted = arr2.sort(function (a, b) {
//      //  if (a < b) {
//    return -1;
//  } else if (a > b) {  //   ==   return a-b;
//    return 1;
//  } else {
//    return 0;
//  }
//});

//
//
//var now = new Date();
////year, month( 0-11), date, hour, minute
//var then = new Date(2005, 6, 5);
//console.log(now.getFullYear()); //getDay - 0-sunday, 1 - monday
////
////
//
//////////////////////////////////////////////MULTIFILTER
//function multifilter() {
//  var outerArguments = arguments;
//  return function (el) {
//    var result = true;
//    for (var i = 0; i < outerArguments.length; i++) {
//      result = result && outerArguments[i](el);
//    }
//    return result;
//  }
//}
////function multifilter() {
////var allFilters = Array.prototype.slice.call(arguments);
////return function (el) {
////  var key = true;
////  allFilters.forEach(function (filterFunction) {
////    if (!filterFunction(n)) {
////      key = false;
////    }
////  });
////  return key;
////}
////}
//
//function isEven(el) {
//  return el % 2 === 0;
//}
//
//function isGTTen(el) {
//  return el > temp;
//}
//var result = [1, 2, 3, 4, 5, 10, 11, 12, 13, 14].filter(multifilter(isEven, isGTTen));
//console.log(result);




//function getDayOfTheWeek(year, month, date) {
//
//
//  var day = new Date(year, month - 1, date - 1);
//  return ['m', 't', 'w', 'e', 'f', 's', 'h'][day.getDay()];
//
//
//}
//console.log(getDayOfTheWeek(2016, 11, 15));
//
//
//
//
//var now = new Date();
//now.setMinutes(55);
//
//console.log(now)
//



//
//console.time('myLabel');
//for (var i = 0; i < 100; i++) {
//  var a = i + i;
//}
//
//console.timeEnd('myLabel');
//
//
//var parsed = Date.parse('2016-11-15');
//var parsed2 = Date.parse('2016-11-16');
//console.log(parsed, parsed2);


//                                TEST Shit
//var o = {
//    x: 8,
//    valueOf: function () {
//      return this.x + 2;
//    },
//    toString: function () {
//      return this.x.toString();
//    }
//  },
//  result = o < "9";
//console.log(result);



//var res = (function f() {
//  function f() {
//    return 1;
//  }
//  return f();
//
//  function f() {
//    return 2;
//  }
//})();
//console.log(res);


////////////////////////////// test shit ssssss


////////////////////////////////         DOM


//console.log(document);
//
//
//var myDiv = document.getElementById('main');
//var myParagraphs = document.getElementsByClassName('catalog');
//console.log(myDiv);
//console.log(myParagraphs);
//
//
//var myNameInForm = document.getElementsByTagName('form');
//var res = document.getElementsByName('data')
//console.log(res);
//
//
//
//
//var a = document.getElementById('main');
//console.log(a.getAttribute('class'));
//
//
//
//setTimeout(function () {
//  document.getElementsByClassName('button')[0].setAttribute('disabled', 'true')
//}, 2000);

//var button = document.getElementById('btn');
//var a = document.getElementById('block');
//a.style.backgroundColor = 'green';
//a.addEventListener('click', toTheTopRight);
//
//var clicks = 0;
//var pos = ['topLeft', 'topRight', 'rigthtBottom', 'bottomLeft', ]
//
//function toTheTopRight() {
//  a.classList.remove(pos[clicks % pos.length]);
//  clicks++;
//  a.classList.add(pos[clicks % pos.length]);
//
//}


//
//var button = document.getElementById('btn');
//button.addEventListener('click', mouseClick)



//var divs = document.getElementsByClassName('blocks');
//var divsArray = Array.prototype.slice.call(divs);
//
//
//divsArray.forEach(function (elem) {
//  elem.addEventListener('click', mouseHandler, true)
//})
//
//function mouseHandler(event) {
//  console.log(event.target);
//  console.log(event.currentTarget);
////}
//var obj = {
//  value: '',
//  setValue: function (newValue) {
//    this.value = newValue;
//  }
//};
//obj.setValue('123');
//console.log(obj.value);


//var myInput = document.getElementById('myInput');
//myInput.addEventListener('input', handler);
//
//function handler() {
//  console.log(this.value);
// console.log(myInput.value); // === this.value - same shit without previous iteration
//}

//var newInput = document.getElementById('myInput');
//
//myInput.addEventListener('input', inputHandler);
//
//
//
//var inputHandler = {
//  message: 'Wake up, Neo...',
//  currentPosition: 0,
//  getLetter: function (e) {
//    e.target.value = this.message.slice(0, ++this.currentPosition);
//  }
//
//}
//
//newInput.addEventListener('input', inputHandler.getLetter.bind(inputHandler));
//
//
//
/////////////////////////////////////////////////////////////////////////////////24 november

var list = document.getElementById('list');
list.addEventListener('click', handler);

function handler(event) {
  console.log(event.target.getAttribute('data-item'));
  console.log(event.currentTarget.getAttribute('data-item'));
}

var newLi = document.createElement('li');
//var text = document.createTextNode('new li');
//
//newLi.appendChild(text);
newLi.innerHTML = '<h3>my new li</h3>';

list.appendChild(newLi);

newLi.setAttribute('data-item', 'newItem');

list.insertBefore(newLi, list.children[0]);




//var img = document.getElementById('image');//////////////Delete
//img.addEventListener('click', function () {
//  img.parentElement.removeChild(img)
//});

//img.addEventListener('click', function () {///////////////replace
//  src = "../jsbrainacad/1280px-Star_Wars_Logo.svg.png"
//});
//
//
///////////////////////////////////////////////////////////MOVING
//var imgLeft = document.getElementById('source');
//var imgRight = document.getElementById('target');
//var image = document.getElementById('image');
//
//imgLeft.addEventListener('click', function () {
//  //imgLeft.removeChild(image);
//  imgRight.appendChild(image.cloneNode(true));
//});
//////////////////////////////////////////////////////////////6*7=
//var source = document.getElementById('source');
//var value = source.firstChild.nodeValue.trim();
//var numbers = value.match(/[0-9]/g);
//
//var answer = document.createTextNode(numbers[0] * numbers[1])
//source.appendChild(answer);
/////////////////////////////////////////////////////////////add text
//num.addEventListener('click', math);
//
//function math(event) {
//
//  var text = document.createTextNode('13');
//  num.appendChild(text);
//}

function sizedLetters(word, id) {
  var text = document.getElementById('text');
  var fontSize = 16;
  word.split('').forEach(function (letter, i) {
    var newSpan = document.createElement('span');
    newSpan.innerHTML = letter;
    newSpan.style.fontSize = fontSize + 'px';
    text.appendChild(newSpan);
    fontSize = (i < word.length / 2 - 1) ? fontSize + 5 : fontSize - 5;
  });
}
sizedLetters('whatever', 'text')

//var text = document.getElementById('text');
//
//var value = text.firstChild.nodeValue.trim().split('');
//
//var span = document.createElement('span');
//var e = text.appendChild(span);
//
//var Newspan = document.createElement('span');
//var l =
//  var e = text.appendChild(span);
//
//
//function letters(value) {
//  for (var i = 0; i < arr.length; i++) {
//
//  }
//}
//console.log(letters())

//makeRequest('GET', 'http://jsonplaceholder.typicode.com/posts');
//makeRequest('GET', 'https://yesno.wtf/api');


function makeRequest(method, url, data) {

  var xhr = new XMLHttpRequest();

  xhr.open(method, url, true);

  xhr.send(data);

  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
      alert(xhr.status + ':' + xhr.statusText);
    } else {
      console.log(xhr.getAllResponseHeaders());
      processAnswer(JSON.parse(xhr.responseText));
    }
  }
}



//var inputVal = document.getElementById('input').value;

var input = document.getElementById('input');
var table = document.getElementById('table');


input.addEventListener('blur', function () {
  var inputVal = input.value;
  if (inputVal.trim().endsWith('?')) {
    makeRequest('GET', 'https://yesno.wtf/api');
  } else {
    var questionRow = document.createElement('tr');
    questionRow.innerHTML = `<td> ${input.value} </td><td>-</td><td>-</td>`
    document.getElementById('table').appendChild(questionRow);
  };
});


function processAnswer(answer) {
  var imgSource = answer.image;
  //  var image = document.getElementById('img').setAttribute('src', imgSource)

  if (input.value !== '') {
    var questionRow = document.createElement('tr');
    questionRow.innerHTML = `<td> ${input.value} </td><td>${answer.answer}</td>`
    document.getElementById('table').appendChild(questionRow);
    var td = document.createElement('td');
    table.appendChild(td);
    td.innerHTML = '+';
    td.onclick = function () {
      var image = document.getElementById('img').setAttribute('src', imgSource);
    }
  } else {
    return;
  };


  var paragraph = document.getElementById('par');
  paragraph.innerHTML = '<p>' + answer.answer + '</p>';
}

function showImg() {

}

var myPromise = new Promise(function (resolve, reject) {
  //  setTimeout(function () {
  //    resolve([1, 2, 9, 3, 4, 5, 9, 6]);
  //  }, 2000)
});

myPromise
  .then(function (res) {
    console.log(res);
    return JSON.parse()
  })
  .then(function (parsed) {
    console.log(parsed);
  });
//function pushToTable() {
//  if (input.value !== '') {
//    var questionRow = document.createElement('td');
//    var questionText = document.createTextNode('input.value');
//    questionRow.appendChild(questionText);
//    document.getElementById('table').appendChild(questionRow);
//  } else {
//    return;
//  };
//}





var myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //resolve([1, 2, 9, 3, 4, 5, 9, 6]);
  }, 1000)
});

myPromise
  .then(function (res) {
    console.log(res);
    return res.sort()
  })
  .then(function (sorted) {
    console.log(sorted);
  });
//  console.log('resolve:', res);
//}, function (err) {
//  console.log('reject', err);
//});