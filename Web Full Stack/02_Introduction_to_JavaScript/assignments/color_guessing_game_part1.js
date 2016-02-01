var target;            
var guess_input_text;   
var guess_input;      
var finished = false;   
var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "white", "red"];

function do_game() {
	target = Math.floor(Math.random() *colors.length);
	target = colors[target];
	alert("target is "+ target);
	
    while (!finished) {
        guess_input_text = prompt("I am thinking of one of these colors "+
									colors + "\n\n"+
                                  "What is this color?");
		
       finished = (target == guess_input_text);
    }
}

