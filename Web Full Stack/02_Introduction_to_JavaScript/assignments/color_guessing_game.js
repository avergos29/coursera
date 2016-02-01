var target;            
var guess_input_text;   
var guess_input;      
var finished = false;   
var guesses = 0;
var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "white", "red"];

function do_game() {
	target = Math.floor(Math.random() *colors.length);
	target = colors[target];
	
	alert("target is "+ target);
	
    while (!finished) {
        guess_input_text = prompt("I am thinking of one of these colors "+
									colors + "\n\n"+
                                  "What is this color?");
		
	  guesses += 1; 
	 finished = check_guess(guess_input_text);
       
    }
}

function check_guess(input) {
	console.log(input);
	if( colors.indexOf(input)>-1){
		if( input == target ){
			myBody=document.getElementsByTagName("body")[0];
			myBody.style.background=target;
			alert("you are right ! you took " + guesses + " guesses");
			return true;
		}else if(input < target){
			alert("Your input is alphabetically lower than mine!");
		}else{
			alert("Your input is alphabetically higher than mine!");
		}
	}else{ 
		alert("I don't recognize that color!");
	}	
	return false;
}

