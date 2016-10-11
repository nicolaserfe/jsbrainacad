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

var str = "на18с свяще8нным и14 све4те нравс15твенный напо5лняют м6ою вещ2и ду7шу на12д трепе9том н3а не11бо головой13 зак16он звё10здное Д1ве внут17ри";

function order(str) {
  var res = str.split(' ').sortNumber(a - b).join('  ');
}

console.log(order(str));


 //sasha nareshal
function getNumberFromString(str) {
  return str.match(/\d+/g);
 
}

function orderWords(inputStr) {
  var words = inputStr.split(' ');

  var sortedWords = words.sort(function (a, b) {
    return getNumberFromString(a) - getNumberFromString(b);
  });

  return sortedWords.join(' ');
}

var result = orderWords('Bri777tain Londo1n i2s c4apital Gre6at t3he o5f ')

alert(result);




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

*/

function createGreeting(greeting) {
  return function (name) {
    console.log('$ {greeting}, $ {name}');
  }
}
var sayHi = createGreeting('Hi');
sayHi = ('Bob');
//var sayHi = function (name) {
//  console.log(`${greeting}, $(name)`);
//}