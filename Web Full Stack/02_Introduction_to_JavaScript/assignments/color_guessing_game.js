var target;            
var guess_input_text;   
var guess_input;      
var finished = false;   
var guesses = 0;
var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white"];

function do_game() {
	target = Math.random()*colors.size;
	alert("target is " + colors[target]);
	//exit();
	/*
    while (!finished) {
        guess_input_text = prompt("I am thinking of one of these colors "+
									colors + \n\n+
                                  "What is this color?");
		
        guess_input = parseInt(guess_input_text);
        guesses += 1;   
    }
	*/
}
