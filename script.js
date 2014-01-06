

// just a simple calculator for calculating absolute values.  I'll add to this file
// as I do more, but I fiddling with using a prompt so figured I'd throw this up. 

function absolute(number){
    number = prompt('what is the number?');  
    if (number < 0){
        return console.log(-number);
    }
    else {
        return console.log(number);
    }
}absolute(); // putting this here will automaticall trigger the function. I believe
			// this is how we create a function expression... but don't quote me.

