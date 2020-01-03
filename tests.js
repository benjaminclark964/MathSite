var results = document.getElementById('output');
let test = [];
let testAlphabet = [];
let charA = 'a';
let charZ = 'z';

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

