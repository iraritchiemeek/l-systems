var axiom = "F-G-G"
var sentence = axiom
var len = 4
var angle

var rules = []

rules[0] = {
	a: 'F',
	b: 'F-G+F+G-F'
}

rules[1] = {
	a: 'G',
	b: 'GG'
}

function generate() {
	// len *= 0.5
	var next_sentence = ""
	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i)
		var found = false
		for (var j = 0; j < rules.length; j++) {
			if (current == rules[j].a) {
				found = true
				next_sentence += rules[j].b
				break
			}
		}
		if (!found) {
			next_sentence += current
		}	
	}
	sentence = next_sentence
	turtle()
}

function turtle() {
	background(51)
	resetMatrix()
	translate(0, height)
	stroke(255)
	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i)

		if(current == "F" || current == "G") {
			line(0,0,0, -len)
			translate(0, -len)
		} else if (current == "+") {
			// push()
			rotate(-angle)
		} else if (current == "-") {
			// pop()
			rotate(angle)
		}
	}
}

function setup() {
	createCanvas(800, 800)
	angle = radians(120)
	background(51)
	turtle()
	var button = createButton('generate')
	button.mousePressed(generate)
}
