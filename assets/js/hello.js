var helloDisplay = document.querySelector('h1');
var greetings = ['Hello', 'Hei', 'Guten tag', 'Buenos dias']; 
var random = Math.floor(Math.random() * 4);

// Generate string from array
var generateHello = function(arr, index) {
	return arr[index];
}

// Set result to header
helloDisplay.textContent = (generateHello(greetings, random));