var results = document.getElementById('output');

let test = [];
let testAlphabet = [];
let charA = 'a';
let charZ = 'z';
let equa = [];

describe("Derivative of single digit", function() {
	for(let i = 0; i < 10; i++){
		test[0] = i;
		it(`Calculates derivative of ${i}`, function() {
			assert.equal(testCalcDerivative(test), '0');
		});
	}
});

describe("Derivative of single letter", function() {
	let i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
	for(; i <= j; i++){
		testAlphabet[0] = String.fromCharCode(i);
		it(`Calculates derivative of ${testAlphabet[0]}`, function() {
			assert.equal(testCalcDerivative(testAlphabet), '1');
		});
	}
});

describe("Derivatives of basic equations", function() {
	it("Calculate the derivative of 2x+2", function() {
		equa = ['2', 'x', '+', '2'];
		assert.equal(testCalcDerivative(equa), '2');
	});
	
	it("Calculate the derivative of 2x+2x", function() {
		equa = ['2', 'x', '+', '2' , 'x'];
		assert.equal(testCalcDerivative(equa), '2+2');
	});
	
	it("Calculate the derivative of 2x+2x+3x", function() {
		equa = ['2', 'x', '+', '2' , 'x', '+', '3', 'x'];
		assert.equal(testCalcDerivative(equa), '2+2+3');
	});
	
	it("Calculate the derivative of 2x    +      3x with a lot of spaces in between", function() {
		equa = ['2', 'x' , ' ', ' ' , ' ', '+', ' ', ' ', ' ', '3', 'x'];
		assert.equal(testCalcDerivative(equa), '2+3');
	});
	
	it("Calculate the derivative of 45x-2x*15x", function() {
		equa = ['45', 'x' , '-', '2' , 'x', '*', '15', 'x'];
		assert.equal(testCalcDerivative(equa), '45-2*15');
	});
	
	it("Calculate the derivative of 2x+2x+2x+2x+2x+2x+2x+2x+2x+2x", function() {
		equa = ['2', 'x' , '+', '2' , 'x', '+', '2', 'x', '+', '2', 'x' , '+', '2' , 'x', '+', '2', 'x', '+', '2', 'x' , '+', '2' , 'x', '+', '2', 'x', '+', '2', 'x'];
		assert.equal(testCalcDerivative(equa), '2+2+2+2+2+2+2+2+2+2');
	});
	
	it("Calculate the derivative of 2x+2+2+2x", function() {
		equa = ['2', 'x' , '+', '2', '+', '2', '+', '2', 'x'];
		assert.equal(testCalcDerivative(equa), '2+2');
	});
	
	it("Calculate the derivative of 2x+2+2x+2", function() {
		equa = ['2', 'x' , '+', '2', '+', '2', 'x', '+', '2'];
		assert.equal(testCalcDerivative(equa), '2+2');
	});
	
	it("Calculate the derivative of 2+2+2+2x", function() {
		equa = ['2', '+', '2', '+', '2', '+', '2', 'x'];
		assert.equal(testCalcDerivative(equa), '2');
	});
	
	it("Calculate the derivative of 2x+2+2+2", function() {
		equa = ['2', 'x', '+', '2', '+', '2', '+', '2'];
		assert.equal(testCalcDerivative(equa), '2');
	});
	
	it("Calculate the derivative of 25x+2+2+2", function() {
		equa = ['2', '5', 'x', '+', '2', '+', '2', '+', '2'];
		assert.equal(testCalcDerivative(equa), '25');
	});
	
	it("Calculate the derivative of 25x+2+25x+2", function() {
		equa = ['2', '5', 'x', '+', '2', '+', '2', '5', 'x', '+', '2'];
		assert.equal(testCalcDerivative(equa), '25+25');
	});
	
	it("Calculate the derivative of 25x+2+2500x+2", function() {
		equa = ['2', '5', 'x', '+', '2', '+', '2', '5', '0', '0', 'x', '+', '2'];
		assert.equal(testCalcDerivative(equa), '25+2500');
	});
	
	it("Calculate the derivative of 2500x+2+2500x+2", function() {
		equa = ['2', '5', '0', '0', 'x', '+', '2', '+', '2', '5', '0', '0', 'x', '+', '2'];
		assert.equal(testCalcDerivative(equa), '2500+2500');
	});
	
	it("Calculate the derivative of 2x+x", function() {
		equa = ['2', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '2+1');
	});
	
	it("Calculate the derivative of 2x+x+x", function() {
		equa = ['2', 'x', '+', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '2+1+1');
	});
	
	it("Calculate the derivative of x+x+x", function() {
		equa = ['x', '+', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '1+1+1');
	});
});

