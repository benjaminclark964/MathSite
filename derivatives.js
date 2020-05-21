var results = document.getElementById('output');
let arrayIndex = 0;

		
function calcDerivative(inp) {
	
	let input = [];
	let expression = [];
	results.innerHTML = '';
	input = $(inp).val();
	
	if(input.length === 1){
		
		calcSingleDigitOrLetterDerivative(input);
		
	} else {
		
		input = delimitSpaces(input);
		
		while(arrayIndex < input.length) {
			
			expression = getExpression(input, arrayIndex);
			
			if(expression.indexOf('^') > -1){
				
				expression = calcDerivativeWithExponent(expression);
				
			} else if(checkForTrig(expression) == true) {
				
				expression = calculateDerivativeTrigonometricValues(expression);
				
			}else {
				
				expression = calcDerivativeEquationWithNoExponent(expression);
				
			}
			
			results.innerHTML += expression;
		}		
	}
	
	assignProperResults();
	arrayIndex = 0;
}

function testCalcDerivative(inp) {
	
	let input = [];
	let expression = [];
	results.innerHTML = '';
	input = inp;
	
	if(input.length == 1){
		
		calcSingleDigitOrLetterDerivative(input);
		
	} else {
		
		input = delimitSpaces(input);
		
		while(arrayIndex < input.length) {
			
			expression = getExpression(input, arrayIndex);
			console.log("I am the expression " + expression);
			if(expression.indexOf('^') > -1){
				
				expression = calcDerivativeWithExponent(expression);
				
			} else if(checkForTrig(expression) == true) {
				
				expression = calculateDerivativeTrigonometricValues(expression);
				
			}else {
				
				expression = calcDerivativeEquationWithNoExponent(expression);
				
			}	
			
			results.innerHTML += expression;
			
		}
	}
	
	assignProperResults();
	arrayIndex = 0;
	
	return results.innerHTML;
}


function assignProperResults() {
	
	let check = results.innerHTML;
	let newString = '';
	let len = check.length;
	
	if(operatorAtTheEndFlag(check, len) == true) {
		
		for(let i = 0; i < len-1; i++) {
			
			if(newString == '') {
				
				newString = check[i];
				
			} else {
				
				newString += check[i];
				
			}
			
		}
		
		results.innerHTML = newString;
	}	
}


function operatorAtTheEndFlag(input, len) {
	
	let returnFlag = false;
	
	if(input[len-1] == '+'
	|| input[len-1] == '-'
	|| input[len-1] == '/'
	|| input[len-1] == '*') {
		
		returnFlag = true;
		
	}
	
	return returnFlag;
}


// function countExponents(input) {
//
// 	let exponentCount = 0;
//
// 	for(let i = 0; i < input.length; i++) {
//
// 		if(input[i] == '^') {
//
// 			exponentCount++;
//
// 		}
// 	}
//
// 	return exponentCount;
// }


function calcSingleDigitOrLetterDerivative(input) {
	
	if(isNaN(input)){
		
			results.innerHTML = '1';
			
		} else {
			
			results.innerHTML = '0';
			
		}
}


function calcDerivativeWithExponent(input) {

	let output = [];
	let firstNumberEndingIndex = 0;
	
	//if expression is x^2, will add a "1" to the front for multiplication
	if(isNaN(input[0])) {
		input.unshift("1");
	} 
	
	let calc_deriv = Number(input[exponentIndex(input)]) * Number(getFirstNumber(input));
	
	
	output[0] = calc_deriv;
	
	for(let i = 0; i < input.length; i++) {
		
		if(!isNaN(input[i])) {
			
			firstNumberEndingIndex++;
			
		} else {
			
			break;
			
		}
	}
	
	for(let i = firstNumberEndingIndex; i < input.length; i++) {
		
		if(input[i] == '^' && Number(input[i+1]) == 2){
			
			i++;
			continue;
			
		} else if(input[i] == '^' && Number(input[i+1]) > 2) {
			
			output[0] += input[i];
			input[i+1] = Number(input[i+1]) - 1;
			
		} else {
			
			output[0] += input[i];
			
		}
				
	}
	
	
	//refactor
	if(isNaN(input[0]) && input.indexOf('^') > -1) {
		
		output = calcVariableExponent(input);
		
	}
	
	return output;
}


//refactor
function calcVariableExponent(input) {
	
	let output = [];
	let stopIndex = 0;
	
	for(let i = 0; i < input.length; i++) {
		
		if(input[i] == '^') {
			
			stopIndex = i;
			let outputIndex = 0;
			let index = i;
			
			while(!isNaN(input[index])) {
				
				if(output[outputIndex] == undefined) {
					
				output[outputIndex] = input[index];
				
				} else {
					
					output[outputIndex] += input[index];
					
				}
				
				index++;
				outputIndex++;
			}
			
			break;
		}
	}
	
	for(let j = 0; j < stopIndex-1; j++) {
		
		output[0] += input[j];
	}
	
	return output;
}


function calculateDerivativeTrigonometricValues(input) {

	let output = [];
	let i = 0;
	let variable = '';
	let operator = '';
		
		//-cos	
		if(input[i] == '-' && input[i+1] == 'c' && input[i+2] == 'o' && input[i+3] == 's' && getVariable(input, i+4) != 0) {
			variable = input[i+4];

			if(checkOperator(input, i+5) == true) {
				operator = input[i+5];
				output[0] = "sin" + variable + operator;
				
			} else {
				
			output[0] = "sin" + variable;
			
			}
			
		}
		
		//-sin
		if(input[i] == '-' && input[i+1] == 's' && input[i+2] == 'i' && input[i+3] == 'n' && getVariable(input, i+4) != 0) {
			variable = input[i+4];

			if(checkOperator(input, i+5) == true) {
				operator = input[i+5];
				output[0] = "-cos" + variable + operator;
				
			} else {
				
			output[0] = "-cos" + variable;
			
			}
		}	
		
		//sin
		if(input[i] == 's' && input[i+1] == 'i' && input[i+2] == 'n' && getVariable(input, i+3) != 0) {
			variable = input[i+3];

			if(checkOperator(input, i+4) == true) {
				operator = input[i+4];
				output[0] = "cos" + variable + operator;
				
			} else {
				
			output[0] = "cos" + variable;
			
			}
		}
		
		//cos
		if(input[i] == 'c' && input[i+1] == 'o' && input[i+2] == 's' && getVariable(input, i+3) != 0) {
			variable = input[i+3];

			if(checkOperator(input, i+4) == true) {
				operator = input[i+4];
				output[0] = "-sin" + variable + operator;
				
			} else {
				
			output[0] = "-sin" + variable;
			
			}
		}
		
		//tan
		if(input[i] == 't' && input[i+1] == 'a' && input[i+2] == 'n' && getVariable(input, i+3) != 0) {
			variable = input[i+3];

			if(checkOperator(input, i+4) == true) {
				operator = input[i+4];
				output[0] = "sec^2" + variable + operator;
				
			} else {
				
			output[0] = "sec^2" + variable;
			
			}
		}

		//csc
		if(input[i] == 'c' && input[i+1] == 's' && input[i+2] == 'c' && getVariable(input, i+3) != 0) {
			variable = input[i+3];

			if(checkOperator(input, i+4) == true) {
				operator = input[i+4];
				output[0] = "-csc" + variable + " cot" + variable + operator; 
			} else {
				output[0] = "-csc" + variable + " cot" + variable;
			}
		}

		//cot
		if(input[i] == 'c' && input[i+1] == 'o' && input[i+2] == 't' && getVariable(input, i+3) != 0) {
			variable = input[i+3];

			if(checkOperator(input, i+4) == true) {
				operator = input[i+4];
				output[0] = "-csc^2" + variable + operator; 
			} else {
				output[0] = "-csc^2" + variable;
			}
		}

		//sec
		if(input[i] == 's' && input[i+1] == 'e' && input[i+2] == 'c' && getVariable(input, i+3) != 0) {
			variable = input[i+3];

			if(checkOperator(input, i+4) == true) {
				operator = input[i+4];
				output[0] = "sec" + variable + " tan" + variable + operator; 
			} else {
				output[0] = "sec" + variable + " tan" + variable;
			}
		}
	
	return output;
}

function checkForTrig(input) {
	
	let flag = 0;
	
	for(let i = 0; i < input.length; i++) {
		
		//sin
		if(input[i] == 's' && input[i+1] == 'i' && input[i+2] == 'n') {
			
			flag = 1;
		}

		//cos
		if(input[i] == 'c' && input[i+1] == 'o' && input[i+2] == 's') {
			
			flag = 1;
		}
		
		//tan
		if(input[i] == 't' && input[i+1] == 'a' && input[i+2] == 'n') {
			
			flag = 1;
		}
		
		//-cos
		if(input[i] == '-' && input[i+1] == 'c' && input[i+2] == 'o' && input[i+3] == 's') {
			
			flag = 1;
			
		}
		
		//-sin
		if(input[i] == '-' && input[i+1] == 's' && input[i+2] == 'i' && input[i+3] == 'n') {
			
			flag = 1;
			
		}

		//csc
		if(input[i] == 'c' && input[i+1] == 's' && input[i+2] == 'c') {
			flag = 1;
		}

		//sec
		if(input[i] == 's' && input[i+1] == 'e' && input[i+2] == 'c') {
			flag = 1;
		}

		//cot
		if(input[i] == 'c' && input[i+1] == 'o' && input[i+2] == 't') {
			flag = 1;
		}
	}
	
	return flag;
}


function getExpression(input, index) {

	let output = [];
	let outputIndex = 0;
	let exponentFlag = false;
	let numberFlag = false;
	let exponentIndex = 0;
	let exponentAdded = false;
	let exponentNum = 0;

	for(let i = index; i < input.length; i++) {
		
		if(isNaN(input[i]) && checkDoesNotEqualOperator(input, i) != true) {
			console.log("2");
			output[outputIndex] = input[i];
			outputIndex++;
			arrayIndex++;
			continue;
			
		}
		
		if(checkOperator(input, i) === true) {
			console.log("3");
			output[outputIndex] = input[i];
			outputIndex++;
			arrayIndex++;

			if((input[i+1] == 's' || input[i+1] == 'c') && input[i] == '-') {	// if expression will be -sin or -cos
				
				continue;
				
			} else {
				console.log("4");
				break;
				
			}
			
		} else {
			console.log("5");
			if(input[i-1] == '^' || exponentFlag == true) {
				console.log("6");
				if(input[i-1] == '^') {
					console.log("7");
					exponentFlag = true;
					exponentIndex = i;
					
				}
				
				if(!isNaN(input[i])) {
					console.log("8");
					if(output[outputIndex] == undefined) {
						console.log("9");
						output[outputIndex] = input[i];

						if(checkIfExponentNumber(input, i) == true) {
							console.log("10");
							outputIndex++;
							
						}
						
					} else {
						console.log("11");
						output[outputIndex] += input[i];
						
						if(checkIfExponentNumber(input, i) == true) {
							console.log("12");
							outputIndex++;

						}
						
					}
					
					arrayIndex++;
					
					// e.g. 2x^1 wil become 2x
					output = ifExponentValueIsOne(input, output, exponentIndex);
					output = ifExponentValueIsZero(output, exponentIndex);
					console.log("13");
					continue;
					
				} else {
					console.log("14");
					exponentFlag = false;
					
					
				}
				
			}
			
			//turning this [2, 0] into this [20]
			if((String(input[i]).match(/^[0-9]{1}$/) != null && String(input[i+1]).match(/^[0-9]{1}$/) != null) 
			|| numberFlag == true) {
				console.log("15");
				numberFlag = true;
				
				if(output[outputIndex] == undefined) {
					console.log("16");
					output[outputIndex] = input[i];
					
				} else {
					console.log("17");
					output[outputIndex] += input[i];
				}
				
				if(String(input[i+1]).match(/^[0-9]{1}$/) == null) {
					console.log("18");
					numberFlag = false;
					outputIndex++;
					
				}
				console.log("19");
				arrayIndex++;
				continue;
				
			} else {
				console.log("20");
				//only add if its not a parenthesis
				if(input[i] != '(' && input[i] != ')') {
					console.log("21");
					if(isNaN(input[i])) {

						for(let k = i; k < input.length; k++) {
							console.log(input);
							if(input[k] === input[i+1] && exponentAdded === false) {

								exponentNum = 2;

								for(let v = k+1; v < input.length; v++) {
									console.log("I am input " + input);

									if(input[v] === input[v+1]) {
										console.log("I am here");
										exponentNum++;
									}

								}

								console.log("I am exponent number " + exponentNum);
								input[k+1] = '^';
								exponentAdded = true;
								input[i+2] = exponentNum;

							} else if(exponentAdded === true && checkOperator(input, k) === true) {
								console.log("I work");
							} else {
								exponentNum = 0
								break;
							}

						}
					}
					console.log(input);
					output[outputIndex] = input[i];
					
				} else {
					console.log("22");
					arrayIndex++;
					continue;
					
				}
			}
			
			outputIndex++;
			arrayIndex++;
			
		}
	}
	
	return output;
}


function ifExponentValueIsOne(input, output, exponentIndex) {
	
	if(output[exponentIndex] == '1' && String(input[exponentIndex+1]).match(/[0-9]/) == null) {
		
		for(let i = exponentIndex-1; i < output.length; i++) {
			
			if(checkOperator(output, i) == true) {
				
				break;
				
			} else {
				
				delete output[i];
				
			}	
		}
	}
	
	return output;
}


function ifExponentValueIsZero(output, exponentIndex) {
	
	if(output[exponentIndex] == '0') {
		
		for(let i = exponentIndex-1; i < exponentIndex+1; i++) {
			
			delete output[i];
			
		}
		
		output[exponentIndex-3] = '0';
	}
	
	return output;
}


function getVariable(input, index) {
	
	let variableIndex = 0;
		
		if(checkForVariable(input[index]) == true) {
			variableIndex = index;
		}
	
	return variableIndex;
}


function checkDoesNotEqualOperator(input, index) {

	let flag = false;
	
	if(input[index] != '+'
	|| input[index] != '-'
	|| input[index] != '/'
	|| input[index] != '*') {
		
		flag = true;
		
	}
	
	return flag;
}


function checkIfExponentNumber(input, index) {
	
	let flag = false;
	
	if(isNaN(input[index+1])) {
		flag = true;
	}
	
	return flag;
}


function calcDerivativeEquationWithNoExponent(input) {

	let output = [];
	let variableFlag = false;
	let operatorFlag = false;
	
	for(let i = 0; i < input.length; i++) {
		
		if(input[i] == undefined) {
			
			continue;
			
		}
		
		if(isNaN(input[i])) {
			
			if(checkOperator(input, i) == true || checkIfEndOfLine(input, i)) {
				
				if(checkForVariable(input[i]) == true) {
					
					if(isNaN(input[i-1])) {
						output = addToOutputSingleVariableResults(output);
						continue;
					} 
					
					continue;
					
				} else {
					
					if((i+2) == input.length) {
						
						continue;
						
					} else if(checkForVariable(input[i+2]) == false || (String(output[0]).indexOf('undefined') > -1 && i > 0)) {
						
						variableFlag = true;
						
						if(input[i+2] == undefined) {
							
							output = addToOutputIfOutputIsNotEmpty(output, input, i);
							continue;
							
						} 
						
					} else {
						
						output = addToOutput(output, input, i);
						
					}
					
				}
				
			} else {
				
				//refactor later into function for variables in equation
				if(isNaN(input[i-1])) {
					
					if(output[0] == undefined){
						
						output[0] = '1+';
						operatorFlag = true;
						i++;
						continue;
						
					} else {
						
						if(operatorFlag == false){
							
							output[0] += '+1';
							
						} else {
							
							if(variableFlag == true) {
								
								output[0] += '+1';
								variableFlag = false;
								
							} else {
								
								output[0] += '1';
								operatorFlag = false;
								
							}
						}
						
						continue;
						
					}
				}
				
				//if variable next to a number
				continue;
				
			}
			
		} else {
		
			if(checkForVariable(input[i+1]) == true) {
				
				output = addToOutput(output, input, i);
				
			} else {
				
				continue;
				
			}
		}
	}
	
return output;
}


function checkIfEndOfLine(input, index) {

	let flag = false;
	
	if(index == input.length-1) {
		
		flag = true;
		
	}
	
	return flag;
}

function checkOperator(input, index) {
	let flag = false;
	
	if(input[index] == '+' 
	|| input[index] == '-' 
	|| input[index] == '/' 
	|| input[index] == '*') {
			
		flag = true;
		
	}
	
	return flag;
}


function addToOutput(output, input, index) {
	if(output[0] == undefined) {
		
		output[0] = input[index];
		
	} else {
		
		output[0] += input[index];
		
	}
	
	return output;
}


function addToOutputIfOutputIsNotEmpty(output, input, index) {
	
	if(output[0] != undefined) {
		
		output[0] += input[index];
		
	} 
	
	return output
}


function addToOutputSingleVariableResults(output) {
	
	if(output[0] == undefined) {
		
		output[0] = '1';
		
	} else {
		
		output[0] += '1';
		
	}
	
	return output;
}


function checkForVariable(input) {
	
	let variableFlag = false;
	
	if(input == '+' 
	|| input == '-' 
	|| input == '/' 
	|| input == '*'
	|| input == " "
	|| input == undefined) {
		
		//do nothing
		
	} else {
		
		variableFlag = true;
		
	}
	
	return variableFlag;
}


function getFirstNumber(input) {

	let output = [];
	
	for(let i = 0; i < input.length; i++) {
		
		if(!isNaN(input[i])) {
			
			if(i == 0){
				
				output[0] = input[i];
				
			} else {
				
				output[0] += input[i];
				
			}
		} else {
			
			break;
			
		}
	}
	
	return output;
}


// function checkSingleVariableInEquation(input, index) {
//
// 	let flag = false;
//
// 	if(isNaN(input[index-1])) {
//
// 		let flag = true;
//
// 	}
//
// 	return flag;
// }


function exponentIndex(input) {
	
	let index = 1;
	
	for(let i = 0; i < input.length; i++) {
		
		if(input[i] == undefined) {
			continue;
		}
		
		if(!isNaN(input[i])) {
			
			if(i == 0){
				
				index++;
				
			} else {
				
				index++;
				
			}
		} else {
			
			index++;
			break;
			
		}
	}
	
	return index;
}


function delimitSpaces(input) {

	let output = [];
	let index = 0;
	
	for(let i = 0; i < input.length; i++) {
		
		if(input[i] == " ") {
			
			continue;
			
		} else {
			
			output[index] = input[i];
			index++;
			
		}
	}
	
	return output;
}

