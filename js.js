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

//function createGreeting(greeting) {
//  return function (name) {
//    console.log(`${greeting}, ${name}`);
//  }
//}
//var sayHi = createGreeting('Hi');
//console.log(sayHi);
//sayHi('lol');
//sayHi('kkk');
//sayHi('rick');
//var sayHi = function (name) {
//  console.log(`${greeting}, $(name)`);
//}

//var string = "we like to learn javascript";
//var b = string.match(/javascript/);
//
//console.log(b);
//
//
//var string = "we like to learn javascript";
//var res = /like/.test(string);
//
//console.log(res);
//
//
//var str = 'I like oranges and orange juice';
//var regexp = /orange/;
//var result;
//
//while (result = regexp.exec(str)) {
//  console.log(result);
//  console.log(result.indexOf);
//  console.log(result.lastIndexOf);
//}
//
//console.log(result);



//
//function countletters(string) {
//
//  return {
//    lowercase: string.match(/a-z/g).length,
//    uppercase: string.match(/A-Z/g).length
//  }
//
//}
//var test = 'Sometimes I';
//var res = countletters(test);
//console.log(res);




//var person = 'John Smith';
//var result = person.replace(/(\w+) (\w+)/, '$2 $1');
//var res = s.replace(/cats/g, 'dogs');

//var s = "I like cats           but cats don't         like    me back";
//var result = s.split(/\s+/).join(' ');
//console.log(result);
//
//
//var str2 = 'one, two , three , four,five ,six';
//
//var res = str2.split(/\s*,\s*/).join(', ');
//var res2 = str2.replace(/\s*,\s*/g, ', ');
//
//console.log(res);
//console.log(res2);

//var = timeout;
//
//function outer() {
//  console.log('outer start');
//  inner();
//  console.log('outer finish');
//}
//
//function inner() {
//  console.log('inner');
//  setTimeout(function () {
//    innermost(1);
//    clearTimeout(timeout);
//    set
//  }, 1000);
//  setTimeout(function () {
//    innermost(2);
//  }, 1000);
//}
//
//function innermost() {
//  console.log('innermost');
//}
//
//outer();

//function test(num) {
//  console.log('current value:', num);
//  this.counter++;
//
//}
//
//test.counter = 0;
//
//for (var i = 0; i < 5; i++) {
//  test.call(test, i);
//}
//
//console.log(test.counter);


//function foo() {
//  var a = 2;
//  this.bar();
//}
//
//function bar() {
//  console.log(this.a);
//}
//foo();
//
//function foo() {
//  console.log('foo');
//  bar();
//}
//
//function bar() {
//  console.log('bar');
//  test();
//}
//
//function test() {
//  console.log('test');
//
//}
//
//foo();
//
//function test() {
//  console.log(this.a);
//}
//var a = 2;
//test();

//
//var obj = {
//  a: 5;
//  showA: function () {
//    console.log(this.a);
//  }
//}
//
//obj.showA();

//
//var obj = {
//  smth: true,
//  number: 5,
//  anotherObject: {
//    anotherValue: 'some text'
//  }
//}
//console.log(obj);

//function foo(){
//  console.log (this.a);
//}
//
//var obj2 = {
//  a:42,
//  foo:foo
//};
//
//var obj1 ={
//  a:2,
//  obj2:obj2
//};
//
//obj1.obj2.foo ();
//
//function foo() {
//  console.log(this.a);
//}
//
//var a = "global";
//var obj = {
//    a: 5
//  }
//  //foo();
//  //foo.call(obj);
//var hardBinding = function () {
//  foo.call(obj); //смотрит на obj, a ne na window
//}
//hardBinding();
//setTimeout(hardBinding, 1000);

//function foo(a, b, c) {
//  console.log(a, b, c);
//}
//var obj = {};
//foo.call(obj, 1, 2, 3);
//
//foo.apply(obj, [1, 2, 3]);


//function foo() {
//  var arr = Array.prototype.slice.apply(arguments, [1, 4]);
//  console.log(arr);
//}
//
//foo(1, 2, 3, 4, 5);


//var min = Math.min(2, 5, -13, 14);
//var arr2 = Math.min.apply(min, [2, 5, -13, 14]);
//console.log(arr2);

//var res = [1, 2, 3, 4].map(function (elem, i) {
//  return elem * elem;
//});


//
//Array.prototype.myMap = function (callback) { //функция колбэк, которую задаст пользователь
//  var arr = this.slice(); //скопировали this - в новый массив, чтобы не изменять исходный массив
//  for (var i = 0; i < arr.length; i++) {
//    arr[i] = callback(arr[i], i); //перебираем все элементы и создаем элемент this(arr)[i], вызывая функцию колбэк (которую задаст пользователь), обращаясь к элементам i((arr)this[i]-обращение к элементам массива (arr)this) таким образом мы обращаемся к каждому элементу и вызываем на нем функцию колбэк - и возвращаем (arr) this - массив с которым мы изначально работали
//  }
//  return this;
//};
//
//var w = [1, 5, 8].myMap(function (elem, i) {
//  return elem * elem;
//});
//
//console.log(w);
//

//function foo(something) {
//  console.log(this.a);
//  //return this.a + arguments[0];
//};
//
//var obj = {
//  a: 2
//};
//
//var bar = function () {
//  //argument
//  return foo.apply(obj, arguments); //explicit binding привязываем ыункцию к обежекту с привязанными аргументами helper-function binding to only one object and function. we can write universal function for this shit - foo.bind(obj)
//};
//
//var b = bar(3);
//console.log(b); //теряется привязка из-за присвоения функции в переменную;


//function Warrior(name) {
//  this.name = name;
//  this.health = 100;
//}
//
//var warrior = new Warrior('Cat'); //cтрока пушо имя - это строка
//var anotherWarrior = new Warrior('Dog');
//
//
//Warrior.prototype.hit = function (anotherWarrior) {
//  anotherWarrior.health -= Math.floor(Math.random() * anotherWarrior.health) //-= вычитание из свойства объекта случайного числа Math.random() округленного в меньшую сторону Math.floor. число вариативно от остатка в свойстве cat.health
//};
//
////console.log(dog); //вызываем объект
////cat.hit(dog); //вызываем свойство на объекте
////console.log(dog);
////dog.hit(cat);
////console.log(cat);
//
//function battle(warrior1, warrior2) {
//  warrior.hit(anotherWarrior); //очередность действий в функции с новой строчки
//  anotherWarrior.hit(warrior);
//  if (warrior.health > anotherWarrior.health) {
//    return warrior.name;
//  } else {
//    return anotherWarrior.name;
//  }
//}
//
//console.log(battle(warrior, anotherWarrior));


function createMessage(string) { //объявить
  if (string) {
    createMessage.res = createMessage.res + string + ' ';
    return createMessage;

  } else {
    var res = createMessage.res;
    createMessage.res = ''
    return res;
  }
}
createMessage.res = '';
var sss = createMessage('hello ')('world')('nobody ')('cares')(); //вызвать
var sjh = createMessage('rrrrrf ')('uhiugui')();
var ttt = createMessage('vvv ')('eee')('ddd')()


console.log(sss);
console.log(sjh);
console.log(ttt);