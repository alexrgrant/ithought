var stems = [["Isn't ", " in ", "?"],
	    ["I thought "," was in ","..."],
	    ["Dude "," is definitely in ","."]];

function r(p) { // probability function
    if(Math.random() > p) {
	return true;
    }
    else {
	return false;
    }
};

$("#button").click(function() {
    if(r(.1)) {
	// use stems
	$("#text").html(function() {
	    var stem = stems[Math.floor(Math.random() * 3)];
	    if(r(.5)) {
		return stem[0]+countries[Math.floor(Math.random() * countries.length)]+stem[1]+continents[Math.floor(Math.random() * continents.length)]+stem[2];
	    }
	    else {
		return stem[0]+states[Math.floor(Math.random() * states.length)]+stem[1]+countries[Math.floor(Math.random() * continents.length)]+stem[2];
	    }
	});
    }
    else {
	// use sentences
	$("#text").html(sentences[Math.floor(Math.random() * sentences.length)]);
    }
});
