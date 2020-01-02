describe("Derivative of single digit", function() {
	for(let i = 0; i < 10; i++){
		it(`Calculates derivative of ${i}`, function() {
			assert.equal(testDerivatives(i), '0');
		});
	}
});

describe("Derivative of single letter", function() {
	it("Calculates derivative of x", function() {
		assert.equal(testDerivatives('x'), '1');
	});
});