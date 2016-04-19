var number = prompt("Type a number");

function reverse(number){
	return number.split('').reverse().join('');
}

document.write (reverse(number));