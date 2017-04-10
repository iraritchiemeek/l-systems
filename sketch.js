var axiom = "F"
var sentence = axiom
var len = 10
var angle

var rules = []

rules[0] = {
	a: 'F',
	b: 'F+F-F-F+F'
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
	translate(width / 2, height)
	stroke(255)
	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i)

		if(current == "F") {
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
	createCanvas(400, 400)
	angle = radians(90)
	background(51)
	turtle()
	var button = createButton('generate')
	button.mousePressed(generate)
}
