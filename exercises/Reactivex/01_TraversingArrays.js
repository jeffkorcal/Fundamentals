// Traversing an Array

// Exercise 1: Print all the names in an array
	var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"], counter;
	for(counter = 0; counter < names.length; counter++) {
		console.log(names[counter]);
	}


// Exercise 2: Use forEach to print all the names in an array
	var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
	names.forEach(function(name) {
		console.log(name);
	});
