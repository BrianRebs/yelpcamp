// ---------------------------- JAVASCRIPT ----------------------------

//  #### COMPARISON OPERATORS ####

// var x = 5

// x > 1        //true
// x < 1        //false
// x == "5"     //true
// x === 5      //true
// x >= 1       //false
// x <= 1       //false


//  #### LOGIC OPERATORS ###

// var x = 5
// var y = 9 

// AND 
//x = 5 && y = 9            //true
//x = 5 && y = 8            //false

// OR
//x = 5 || y = 9            //true
//x = 5 || y = 8            //true
//x = 4 || y = 8            //false

// NOT 
// y != 8                   //true
// y != 9                   //false


// ### JS CONDITIONALS ###

//  IF , ELSE IF , ELSE
// var hola = "Hola"
// if (hola = "Hola"){
//    console.log('escribiste lo mismo')
// } else {
//    console.log('no escribiste lo mismo')
// }

//  ### WHILE LOOP ####

// while(some condition) {
//     your code;
// }
// var count = 0;
// // var str = 'Hipopotamus';

// while(count <= 10 ){

//     console.log(count);
//     count+= 2;
// }

// Keep Running with while loop

//  var answer = prompt('Are we there yet?'); // NOT NEEDED

//  while(answer != 'yes'){
//     var answer = prompt('Are we there yet?');
//  }

// Using indexOf in the loop to find a word within the answer

// var str = prompt('Are We there yet?');
// var word = prompt('what word are you looking for');
// alert("Oh sure is in the position " + str.indexOf(word));

// --- Same logic with TEMPLATE STRING ---

// var str = prompt('Are We there yet?');
// var word = prompt('what word are you looking for');
// alert(`Oh sure is in the position ${str.indexOf(word)}`);

// ---- Anoy-O-matic Version 2 -----

// -- indexOf looks for a position number 
// -- when it doesn't find if return -1 so we use that to
// -- keep the loop running 

// var str = prompt("Are we there yet"); 

// while(str.indexOf('yes') === -1){
//     var str = prompt('Are we there yet?');
//  }

//  // This code runs when the while loop ends
//  alert('Byeeee!!!');

//  ### FOR LOOP ###




// ### FUNCTIONS ###

// function test(x,y){
//     return  y - x;
// }

// console.log(test(2,3));

// function isEven(x){
//     if(x % 2 === 0){
//         return true;
//     }
//     return false;
// }

// function kebabToSnake(str){
//     return str.replace("-", "_");
// }

// When evaluating boolean operations the return keyword is gonna have by defaul a TRUE or FALSE answer then:

// function isEvenRefactored(x){
//     return x % 2 === 0;
// }

// factorial exercise
// ( Factorial is a number mulplied by its recurrent lower numbers)
// eg. factorial of 4 is   4 x 3 x 2 x 1 
// 1. define a result variable
// 2. calculate factorial and store value in result
// 3. return result variable

// WHILE LOOP DECREASING SOLUTION 
// function factorial(x){
//     var result = x;
//     var i = x - 1;

//     while(i != 0){
//         result *= i;
//         i--;  
//     }
//  return result;
// }
// factorial(5);  
// ------- RESULT 120 --------


// FOR LOOP DECREASING SOLUTION---------
// function factorial(x){
//    var result = 1;
//     for (i = x; i != 0; i--){
//       -------  result = result * i; --------
//         BETTER SINTAX
//         result *= i
//     }
//     return result;
// }
// factorial(5);  
// ------- RESULT 120 --------


// WHILE LOOP INCREASING SOLUTION

// function factorial(x){
//     var i = 2;
//     var result = 1;

//     while(i <= x){
//         result *= i;
//         i++;
//         console.log(result);
//     }
//     return result;
// }
// factorial(5);
// ------- RESULT 120 --------

// FOR LOOP INCREASING SOLUTION

// function factorial(x){
//     var result = 1;
//     for(i = 2; i <= x; i++){
//      result *= i;
//     }
// return result;
// }
// console.log(factorial(5));
// ------- RESULT 120 --------

// ARRAY ITERATOR = FOR EACH -------


//------------------------------

//Array Problem Set -------------

// function printReverse(x){

//     for(i = x.length; i >= 0; i--){
//         console.log(x[i]);
//     }

// }
//  printReverse(['a','b','c','d']);

// function uni(arr){
//  var x = arr[0];
//      for(i = 1; i < arr.length; i++){
//         if(arr[i] !== x){
//             return false;
//         }
//     }
//     return true;
// }
 
// uni([1,1,1,1]);


// function sumArray(arr){
//     var result = 0;
//     for(i = 0; i <= arr.length - 1; i++){
//         result += arr[i];
//     }
//     return result;
// }

// sumArray([3,4,5]);

// ----------------------------------------------------------------------------

//  ### FOR EACH ####


// var colors = ['red','blue','green']

// ## anonymous function

// colors.forEach(function(PLACEHOLDER){
// 	console.log(' Singular Iteration of ' + PLACEHOLDER);
// });

// Singular Iteration of red
// Singular Iteration of blue
// Singular Iteration of green

// ## Determined Function ##


// var colors = ['red','blue','green'];

// function printColors(color){
//     console.log(color);
// }

// printColors('Funcion Solita');

// colors.forEach(printColors);


// Funcion Solita
// red
// blue
// green

// ## Exercise  ## 


// var numbers = ['1','2','3','4','5','6'];
// var colors = ['red','orange','yellow','green'];

// numbers.forEach(function(color){
// 	if(color % 3 === 0){
// 		console.log(color);
// 	}
// });

// #################### OBJECTS ######################

// var person = {
// 	name: "Cindy",
// 	age: 32,
// 	city: "Missoula"
// };

// // ## Bracket notation
// console.log(person['name']);
// //   Works with a property starting with a number     console.log(person['2name']);
// //   Works with a property with space     console.log(person['say name']);
// var str = "name";
// someObject.str  // Doesn't give us a name
// someObject[str] //Evaluates and gives us a name

// // ## Dot notation
// console.log(person.age);

// ### Update Data ###

// var person = {
// 	name: "travis",
// 	age: 22,
// 	city: "London"
// }


// person.city = "LA";

// console.log(person.city);

// //  LA 


// ### Filling Empty Objects ###

// var person = {}

// person.name = "Travis";
// person.age = 32;
// person.city = "Mexico";


// console.log(person);

// #### ARRAY AND OBJECT COMPARISON ###

// var posts = [

// 	{
// 		title: "Hola mundo",
// 		author: "brian",
// 		age: 31,
// 		comments: [ "como estas", "Te extraño"]
// 	},
// 	{
// 		title: "Hey gente",
// 		author: "Karim",
// 		age: 32,
// 		comments: [ "Hola de vuelta", "Cuando nos vemos"]
// 	}
// ]
// posts.forEach(function (post){
// 	post.comments.push("Ya callense")
// 	}
// )


// var  someObj = {
// 	friends: [
// 		{name: "Harry"},
// 		{name: "Ron"},
// 		{name: "Hermanione"}
// 	],
// 	isEvil: false,
// 	color: "orage",
// 	add: function(x,y){
// 		return x + y;
// 	},
// 	subs: function(x,y){
// 		return x - y;
// 	}

// };

// // console.log(someObj.friends[0].name);

// var sumaRes = someObj.add(4,5);

// console.log(`primer resultado es: ${sumaRes}`);

// sumaRes = 254;

// console.log (`resultado ahora es: ${sumaRes}`);



// ######## KEYWORD THIS ##########

// ----------------------------------------------------------
// ##we define an empty object and we fill it with a property of an array.
// var comments = {};
// comments.data = ['hola  mundo','Como estan','Adios'];
// ## we externaly define a function to go through that array

// function print(arr){
// 		arr.forEach(function(el){
// 				console.log(el);
// 			});
// 		}
// ## and print the array
// print(comments.data);      //  hola mundo , Como estan , Adios
// --------------------------------------------------------

// var info = ['ola','ke','ase'];

// var obj = {
// 	name: "john",
// 	age: 30
// }		
// ## if we triend to print the variable "obj" will not work because the function is expecting an array argument
// print(obj.age);      // ERROR !!!!

// ## but if we pass an arrat works fine
// print(info);     // ola , ke, ase


// ------------------------------------------------
// ## Now We pass another method to the comments object called print()

// comments.print = function(arr){
// 	arr.forEach(function(el){
// 		console.log(el);
// 	});
// }

// ## But we acces the array that already lives within the object

// ## How we can access another property inside 

// ## We use the keyword  !!!!### THIS ###!!!!

// var comments = {};
// comments.data = ['Hola','Buenas','Adios'];

// comments.print = function(){  		// It no longers needs an argument
// 	this.data.forEach(function(el){
// 		console.log(el);
// 	});
// }

// comments.print(); 				//  Hola , Buenas, Adios





//  ################################################################
//  ##################  T H E    D. O. M.  #########################
// var body = document.querySelector('body');
// var isBlack = false;

// setInterval(function(){
// 	if (isBlack){
// 		body.style.backgroundColor = "white";
// 	} else {
// 		body.style.backgroundColor = "#282c2d";
// 	}

// 	isBlack = !isBlack;

// },1000);

// var title = document.getElementById('title');
// var message = document.getElementsByClassName('message');
// var list = document.getElementsByTagName('li');

// ## query selector also works with nested selectors 
// var bold = document.querySelector("ul li.bold");
// console.log(bold);
// bold.style.fontWeight = "bold";

// ## Javascript also can toggle between classes 
// var bold = document.querySelector("ul li.bold");

// setInterval(function(){
	// 	bold.classList.toggle('alert');
	// },500)
	
// var bold = document.querySelector("ul li.bold");	


// setInterval(function(){

// 		console.log(size);
// 	}
// ,3000)
