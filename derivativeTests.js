var results = document.getElementById('output');

let test = [];
let testAlphabet = [];
let charA = 'a';
let charZ = 'z';
let equa = [];


// Tests for single digits
describe("Derivative of single digit", function() {
	for(let i = 0; i < 10; i++){
		test[0] = i;
		it(`Calculates derivative of ${i}`, function() {
			assert.equal(testCalcDerivative(test), '0');
		});
	}
});


// Tests for double digits
describe("Derivative of double digit", function() {
	for(let i = 0; i < 100; i++){
		test[0] = i;
		it(`Calculates derivative of ${i}`, function() {
			assert.equal(testCalcDerivative(test), '0');
		});
	}
});


// Tests for a single letter
describe("Derivative of single letter", function() {
	let i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
	for(; i <= j; i++){
		testAlphabet[0] = String.fromCharCode(i);
		it(`Calculates derivative of ${testAlphabet[0]}`, function() {
			assert.equal(testCalcDerivative(testAlphabet), '1');
		});
	}
});


// Tests for basic equations without exponent values
describe("Derivatives of basic equations", function() {
	it("Calculate the derivative of 2x+2", function() {
		equa = ['2', 'x', '+', '2'];
		assert.equal(testCalcDerivative(equa), '2');
	});
	
	it("Calculate the derivative of 25x", function() {
		equa = ['2', '5', 'x'];
		assert.equal(testCalcDerivative(equa), '25');
	});
	
	it("Calculate the derivative of 25x+200", function() {
		equa = ['2', '5', 'x', '+', '2', '0', '0'];
		assert.equal(testCalcDerivative(equa), '25');
	});
	
	it("Calculate the derivative of 200+25x+200", function() {
		equa = ['2', '0', '0', '+', '2', '5', 'x', '+', '2', '0', '0'];
		assert.equal(testCalcDerivative(equa), '25');
	});
	
	it("Calculate the derivative of 2x+20", function() {
		equa = ['2', 'x', '+', '2', '0'];
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
	
	it("Calculate the derivative of x+2x", function() {
		equa = ['x', '+','2', 'x'];
		assert.equal(testCalcDerivative(equa), '1+2');
	});
	
	it("Calculate the derivative of x+2x+2x", function() {
		equa = ['x', '+','2', 'x', '+', '2', 'x'];
		assert.equal(testCalcDerivative(equa), '1+2+2');
	});
	
	it("Calculate the derivative of 2x+x+2x", function() {
		equa = ['2', 'x', '+', 'x', '+', '2', 'x'];
		assert.equal(testCalcDerivative(equa), '2+1+2');
	});
	
	it("Calculate the derivative of 2x+2x+x", function() {
		equa = ['2', 'x', '+', '2', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '2+2+1');
	});
	
	it("Calculate the derivative of 2x+2x+x", function() {
		equa = ['x', '+', '2', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '1+2+1');
	});
	
	it("Calculate the derivative of 2x+x+x+2x", function() {
		equa = ['2', 'x', '+', 'x', '+', 'x', '+', '2', 'x'];
		assert.equal(testCalcDerivative(equa), '2+1+1+2');
	});
	
	it("Calculate the derivative of x+x+x+x", function() {
		equa = ['x', '+', 'x', '+', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '1+1+1+1');
	});
	
	it("Calculate the derivative of 2x+x+x+x", function() {
		equa = ['2', 'x', '+', 'x', '+', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '2+1+1+1');
	});
	
	it("Calculate the derivative of 2x+2x+x+x", function() {
		equa = ['2', 'x', '+', '2', 'x', '+', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '2+2+1+1');
	});
	
	it("Calculate the derivative of 2x+2x+2x+x", function() {
		equa = ['2', 'x', '+', '2', 'x', '+', '2', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '2+2+2+1');
	});
	
	it("Calculate the derivative of x+2x+2x+x", function() {
		equa = ['x', '+', '2', 'x', '+', '2', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '1+2+2+1');
	});
	
	it("Calculate the derivative of x+x+2x+x", function() {
		equa = ['x', '+', 'x', '+', '2', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '1+1+2+1');
	});
	
	it("Calculate the derivative of x+x+x+2x", function() {
		equa = ['x', '+', 'x', '+', 'x', '+', '2', 'x'];
		assert.equal(testCalcDerivative(equa), '1+1+1+2');
	});
	
	it("Calculate the derivative of 2x+2x+x+2x", function() {
		equa = ['2', 'x', '+', '2', 'x', '+', 'x', '+', '2', 'x'];
		assert.equal(testCalcDerivative(equa), '2+2+1+2');
	});
	
	it("Calculate the derivative of x+2x+x+2x", function() {
		equa = ['x', '+', '2', 'x', '+', 'x', '+', '2', 'x'];
		assert.equal(testCalcDerivative(equa), '1+2+1+2');
	});
	
	it("Calculate the derivative of 2x+x+2x+x", function() {
		equa = ['2', 'x', '+', 'x', '+', '2', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '2+1+2+1');
	});
});


// Tests for basic equations with exponent values
describe("Basic Derivatives with exponents in the equation", function() {
	it("Derivative of x^2", function() {
		equa = ['x', '^', '2'];
		assert.equal(testCalcDerivative(equa), '2x');
	});
	
	it("Derivative of x^22", function() {
		equa = ['x', '^', '2', '2'];
		assert.equal(testCalcDerivative(equa), '22x^21');
	});
	
	it("Derivative of 2x^2", function() {
		equa = ['2', 'x', '^', '2'];
		assert.equal(testCalcDerivative(equa), '4x');
	});
	
	it("Derivative of 2x^2+2", function() {
		equa = ['2', 'x', '^', '2', '+', '2'];
		assert.equal(testCalcDerivative(equa), '4x');
	});
	
	it("Derivative of 2x^2+2x", function() {
		equa = ['2', 'x', '^', '2', '+', '2', 'x'];
		assert.equal(testCalcDerivative(equa), '4x+2');
	});
	
	it("Derivative of 2x^2+2x^2", function() {
		equa = ['2', 'x', '^', '2', '+', '2', 'x', '^', '2'];
		assert.equal(testCalcDerivative(equa), '4x+4x');
	});
	
	it("Derivative of 2x+2x^2", function() {
		equa = [ '2', 'x', '+', '2', 'x', '^', '2'];
		assert.equal(testCalcDerivative(equa), '2+4x');
	});
	
	it("Derivative of 2+2x^2", function() {
		equa = [ '2', '+', '2', 'x', '^', '2'];
		assert.equal(testCalcDerivative(equa), '4x');
	});
	
	it("Derivative of x+2x^2", function() {
		equa = [ 'x', '+', '2', 'x', '^', '2'];
		assert.equal(testCalcDerivative(equa), '1+4x');
	});
	
	it("Derivative of 2x^2+x", function() {
		equa = ['2', 'x', '^', '2', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '4x+1');
	});
	
	it("Derivative of 2x^2+x+x", function() {
		equa = ['2', 'x', '^', '2', '+', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '4x+1+1');
	});
	
	it("Derivative of 2x^2+x+x+x", function() {
		equa = ['2', 'x', '^', '2', '+', 'x', '+', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '4x+1+1+1');
	});
	
	it("Derivative of 2x^2+2x^2+x+x", function() {
		equa = ['2', 'x', '^', '2', '+', '2', 'x', '^', '2', '+', 'x', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '4x+4x+1+1');
	});
	
	it("Derivative of 1+2x+2x^2", function() {
		equa = ['1', '+', '2', 'x', '+', '2', 'x', '^' ,'2'];
		assert.equal(testCalcDerivative(equa), '2+4x');
	});
	
	it("Derivative of x+2x+2x^2", function() {
		equa = ['x', '+', '2', 'x', '+', '2', 'x', '^' ,'2'];
		assert.equal(testCalcDerivative(equa), '1+2+4x');
	});
	
	it("Derivative of x+2x^2-45x", function() {
		equa = ['x', '+', '2', 'x', '^', '2', '-', '4', '5', 'x'];
		assert.equal(testCalcDerivative(equa), '1+4x-45');
	});
	
	it("Derivative of 21x+2x^2-45x", function() {
		equa = ['2', '1', 'x', '+', '2', 'x', '^', '2', '-', '4', '5', 'x'];
		assert.equal(testCalcDerivative(equa), '21+4x-45');
	});
	
	it("Derivative of 21x^2", function() {
		equa = ['2', '1', 'x', '^', '2'];
		assert.equal(testCalcDerivative(equa), '42x');
	});
	
	it("Derivative of 21x^2+21x^2", function() {
		equa = ['2', '1', 'x', '^', '2', '+', '2', '1', 'x', '^', '2'];
		assert.equal(testCalcDerivative(equa), '42x+42x');
	});
	
	it("Derivative of 21x^2+21x^2+21x^2", function() {
		equa = ['2', '1', 'x', '^', '2', '+', '2', '1', 'x', '^', '2', '+', '2', '1', 'x', '^', '2'];
		assert.equal(testCalcDerivative(equa), '42x+42x+42x');
	});
	
	it("Derivative of 21x^2*21x^2*21x^2", function() {
		equa = ['2', '1', 'x', '^', '2', '*', '2', '1', 'x', '^', '2', '*', '2', '1', 'x', '^', '2'];
		assert.equal(testCalcDerivative(equa), '42x*42x*42x');
	});
	
	it("Derivative of 21x^2/21x^2/21x^2", function() {
		equa = ['2', '1', 'x', '^', '2', '/', '2', '1', 'x', '^', '2', '/', '2', '1', 'x', '^', '2'];
		assert.equal(testCalcDerivative(equa), '42x/42x/42x');
	});
	
	it("Derivative of 21x^3", function() {
		equa = ['2', '1', 'x', '^', '3'];
		assert.equal(testCalcDerivative(equa), '63x^2');
	});
	
	it("Derivative of 21x^3+x", function() {
		equa = ['2', '1', 'x', '^', '3', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '63x^2+1');
	});
	
	it("Derivative of 21x^3+2x", function() {
		equa = ['2', '1', 'x', '^', '3', '+', '2', 'x'];
		assert.equal(testCalcDerivative(equa), '63x^2+2');
	});
	
	it("Derivative of 21x^3+2x^4", function() {
		equa = ['2', '1', 'x', '^', '3', '+', '2', 'x', '^', '4'];
		assert.equal(testCalcDerivative(equa), '63x^2+8x^3');
	});
	
	it("Derivative of 21x^3+2x^4", function() {
		equa = ['2', '1', 'x', '^', '3', '+', '2', 'x', '^', '4', '-', 'x'];
		assert.equal(testCalcDerivative(equa), '63x^2+8x^3-1');
	});
	
	it("Derivative of 2x^10", function() {
		equa = ['2', 'x', '^', '1', '0'];
		assert.equal(testCalcDerivative(equa), '20x^9');
	});
	
	it("Derivative of 2x^100", function() {
		equa = ['2', 'x', '^', '1', '0', '0'];
		assert.equal(testCalcDerivative(equa), '200x^99');
	});
	
	it("Derivative of 2x^1000", function() {
		equa = ['2', 'x', '^', '1', '0', '0', '0'];
		assert.equal(testCalcDerivative(equa), '2000x^999');
	});
	
	it("Derivative of 2x^1000 + 2x^1000", function() {
		equa = ['2', 'x', '^', '1', '0', '0', '0', '+', '2', 'x', '^', '1', '0', '0', '0'];
		assert.equal(testCalcDerivative(equa), '2000x^999+2000x^999');
	});
	
	it("Derivative of 2x^1000 + 2x^1000 + x", function() {
		equa = ['2', 'x', '^', '1', '0', '0', '0', '+', '2', 'x', '^', '1', '0', '0', '0', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '2000x^999+2000x^999+1');
	});
	
	it("Derivative of 2x^1000 + 2x^1000 + 20", function() {
		equa = ['2', 'x', '^', '1', '0', '0', '0', '+', '2', 'x', '^', '1', '0', '0', '0', '+', '20'];
		assert.equal(testCalcDerivative(equa), '2000x^999+2000x^999');
	});
	
	it("Derivative of 2x^1000 + 20 + 2x^1000", function() {
		equa = ['2', 'x', '^', '1', '0', '0', '0', '+', '20', '+', '2', 'x', '^', '1', '0', '0', '0'];
		assert.equal(testCalcDerivative(equa), '2000x^999+2000x^999');
	});
	
	it("Derivative of 2x^1000 + x + 2x^1000", function() {
		equa = ['2', 'x', '^', '1', '0', '0', '0', '+', 'x', '+', '2', 'x', '^', '1', '0', '0', '0'];
		assert.equal(testCalcDerivative(equa), '2000x^999+1+2000x^999');
	});
	
	it("Derivative of 2x^1000 + x + 2x^1000 + x", function() {
		equa = ['2', 'x', '^', '1', '0', '0', '0', '+', 'x', '+', '2', 'x', '^', '1', '0', '0', '0', '+', 'x'];
		assert.equal(testCalcDerivative(equa), '2000x^999+1+2000x^999+1');
	});
	
	it("Derivative of 2x^1000 + x + 2x^1000 + 2x", function() {
		equa = ['2', 'x', '^', '1', '0', '0', '0', '+', 'x', '+', '2', 'x', '^', '1', '0', '0', '0', '+', '2', 'x'];
		assert.equal(testCalcDerivative(equa), '2000x^999+1+2000x^999+2');
	});
	
	it("Derivative of 2x^1000 + x + 2x^1000 + 25x", function() {
		equa = ['2', 'x', '^', '1', '0', '0', '0', '+', 'x', '+', '2', 'x', '^', '1', '0', '0', '0', '+', '2', '5', 'x'];
		assert.equal(testCalcDerivative(equa), '2000x^999+1+2000x^999+25');
	});
	
	it("Derivative of x + 2 + 20x^20", function() {
		equa = ['x', '+', '2', '+', '2', '0', 'x', '^', '2', '0'];
		assert.equal(testCalcDerivative(equa), '1+400x^19');
	});
	
	it("Derivative of 200x + 200 + 20x^20", function() {
		equa = ['2', '0', '0', 'x', '+', '2' , '0', '0', '+', '2', '0', 'x', '^', '2', '0'];
		assert.equal(testCalcDerivative(equa), '200+400x^19');
	});
	
	it("Derivative of x^2 + x + y^22", function() {
		equa = ['x','^','2','+','x','+','y','^','2','2'];
		assert.equal(testCalcDerivative(equa), '2x+1+22y^21');
	});
});


// Derivatives with trigonometry
describe("Derivatives with trigonometry", function() {
	it("derivative of sinx", function() {
		equa = ['s', 'i', 'n', 'x'];
		assert.equal(testCalcDerivative(equa), 'cosx');
	});
	
	it("derivative of cosx", function() {
		equa = ['c', 'o', 's', 'x'];
		assert.equal(testCalcDerivative(equa), '-sinx');
	});
	
	it("derivative of tanx", function() {
		equa = ['t', 'a', 'n', 'x'];
		assert.equal(testCalcDerivative(equa), 'sec^2x');
	});
	
	it("derivative of -sinx", function() {
		equa = ['-', 's', 'i', 'n', 'x'];
		assert.equal(testCalcDerivative(equa), '-cosx');
	});
	
	it("derivative of -cosx", function() {
		equa = ['-', 'c', 'o', 's' ,'x'];
		assert.equal(testCalcDerivative(equa), 'sinx');
	});
	
	it("derivative of sinx+sinx", function() {
		equa = ['s', 'i', 'n', 'x', '+', 's', 'i', 'n', 'x'];
		assert.equal(testCalcDerivative(equa), 'cosx+cosx');
	});
	
	it("derivative of cosx+cosx", function() {
		equa = ['c', 'o', 's', 'x', '+', 'c', 'o', 's', 'x'];
		assert.equal(testCalcDerivative(equa), '-sinx+-sinx');
	});
	
	it("derivative of -cosx+-cosx", function() {
		equa = ['-', 'c', 'o', 's', 'x', '+', '-', 'c', 'o', 's', 'x'];
		assert.equal(testCalcDerivative(equa), 'sinx+sinx');
	});
	
	it("derivative of -sinx+-sinx", function() {
		equa = ['-', 's', 'i', 'n', 'x', '+', '-', 's', 'i', 'n', 'x'];
		assert.equal(testCalcDerivative(equa), '-cosx+-cosx');
	});
});


// Tests trying to break my code
describe("Trying to break my code", function() {
	
	it("derivative of 2x^1", function() {
		equa = ['2', 'x', '^', '1'];
		assert.equal(testCalcDerivative(equa), '2');
	});
	
	it("derivative of 2x^0", function() {
		equa = ['2', 'x', '^', '0'];
		assert.equal(testCalcDerivative(equa), '0');
	});
	
	it("derivative of 2x^09", function() {
		equa = ['2', 'x', '^', '0', '9'];
		assert.equal(testCalcDerivative(equa), '0');
	});
});


