var todos = ["Walk","Run","Work"];
var input  = prompt('what do you like to do');

while (input !== "quit"){

if (input === 'list'){
	console.log(todos);
	}
else if (input === 'new'){
	var newTodo = prompt('Enter new to-do');
	todos.push(newTodo);
	}
	input  = prompt('what do you like to do');
}
console.log('goodbye');

