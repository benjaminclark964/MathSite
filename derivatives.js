var results = document.getElementById('output');
var arrayIndex = 0;

		
function calcDerivative(inp) {
	
	var input = [];
	var expression = [];
	results.innerHTML = '';
	input = $(inp).val();
	
	if(input.length == 1){
		
		calcSingleDigitorLetterDerivative(input);
		
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
	
	var input = [];
	var expression = [];
	results.innerHTML = '';
	input = inp;
	
	if(input.length == 1){
		
		calcSingleDigitorLetterDerivative(input);
		
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
	
	return results.innerHTML;
}


function assignProperResults() {
	
	var check = results.innerHTML;
	var newString = '';
	var len = check.length;
	
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


function countExponents(input) {
	
	let exponentCount = 0;
	
	for(let i = 0; i < input.length; i++) {
		
		if(input[i] == '^') {
			
			exponentCount++;
			
		}
	}
	
	return exponentCount;
}


function calcSingleDigitorLetterDerivative(input) {
	
	if(isNaN(input)){
		
			results.innerHTML = '1';
			
		} else {
			
			results.innerHTML = '0';
			
		}
}


function calcDerivativeWithExponent(input) {
	
	var output = [];
	var exponentFlag = false;
	var firstNumberEndingIndex = 0;
	
	var calc_deriv = Number(input[exponentIndex(input)]) * Number(getFirstNumber(input));
	output[0] = calc_deriv;
	var numberLength = output[0];
	
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
	
	return output;
}


function calculateDerivativeTrigonometricValues(input) {
	
	var output = [];
	let variable = '';
	
	let i = 0;
		
			
		if(input[i] == '-' && input[i+1] == 'c' && input[i+2] == 'o' && input[i+3] == 's' && getVariable(input, i+4) != 0) {
			
			if(checkOperator(input, i+5) == true) {
				
				output[0] = "sin" + input[i+4] + input[i+5];
				
			} else {
				
			output[0] = "sin" + input[i+4];
			
			}
			
		}
		
		if(input[i] == '-' && input[i+1] == 's' && input[i+2] == 'i' && input[i+3] == 'n' && getVariable(input, i+4) != 0) {
			
			if(checkOperator(input, i+5) == true) {
				
				output[0] = "-cos" + input[i+4] + input[i+5];
				
			} else {
				
			output[0] = "-cos" + input[i+4];
			
			}
		}	
			
		if(input[i] == 's' && input[i+1] == 'i' && input[i+2] == 'n' && getVariable(input, i+3) != 0) {
			
			if(checkOperator(input, i+4) == true) {
				
				output[0] = "cos" + input[i+3] + input[i+4];
				
			} else {
				
			output[0] = "cos" + input[i+3];
			
			}
		}
		
		if(input[i] == 'c' && input[i+1] == 'o' && input[i+2] == 's' && getVariable(input, i+3) != 0) {
			
			if(checkOperator(input, i+4) == true) {
				
				output[0] = "-sin" + input[i+3]+ input[i+4];
				
			} else {
				
			output[0] = "-sin" + input[i+3];
			
			}
		}
		
		if(input[i] == 't' && input[i+1] == 'a' && input[i+2] == 'n' && getVariable(input, i+3) != 0) {
			
			if(checkOperator(input, i+4) == true) {
				
				output[0] = "sec^2" + input[i+3]+ input[i+4];
				
			} else {
				
			output[0] = "sec^2" + input[i+3];
			
			}
		}
	
	return output;
}



function checkForTrig(input) {
	
	let flag = 0;
	
	for(let i = 0; i < input.length; i++) {
		
		if(input[i] == 's' && input[i+1] == 'i' && input[i+2] == 'n') {
			
			flag = 1;
		}
		
		if(input[i] == '-' && input[i+1] == 'c' && input[i+2] == 'o' && input[i+3] == 's') {
			
			flag = 1;
			
		}
		
		if(input[i] == '-' && input[i+1] == 's' && input[i+2] == 'i' && input[i+3] == 'n') {
			
			flag = 1;
			
		}
		
		if(input[i] == 'c' && input[i+1] == 'o' && input[i+2] == 's') {
			
			flag = 1;
		}
		
		if(input[i] == 't' && input[i+1] == 'a' && input[i+2] == 'n') {
			
			flag = 1;
		}
	}
	
	return flag;
}


function getExpression(input, index) {
	
	var output = [];
	var outputIndex = 0;
	var exponentFlag = false;
	var exponentNumberflag = false;
	var numberFlag = false;
	var exponentIndex = 0;
	
	for(let i = index; i < input.length; i++) {
		
		if(isNaN(input[i]) && checkDoesNotEqualOperator(input, i) != true) {
			
			output[outputIndex] = input[i];
			outputIndex++;
			arrayIndex++;
			continue;
			
		}
		
		if(checkOperator(input, i) == true) {
			
			output[outputIndex] = input[i];
			outputIndex++;
			arrayIndex++;
			
			if((input[i+1] == 's' || input[i+1] == 'c') && input[i] == '-') {	// if expression will be -sin or -cos
				
				continue;
				
			} else {
				
				break;
				
			}
			
		} else {
			
			if(input[i-1] == '^' || exponentFlag == true) {
				
				if(input[i-1] == '^') {
					
					exponentFlag = true;
					exponentIndex = i;
					
				}
				
				if(!isNaN(input[i])) {
					
					if(output[outputIndex] == undefined) {
						
						output[outputIndex] = input[i];

						if(checkIfExponentNumber(input, i) == true) {
							
							outputIndex++;
							
						}
						
					} else {
						
						output[outputIndex] += input[i];
						
						if(checkIfExponentNumber(input, i) == true) {
							outputIndex++;
						}
						
					}
					
					arrayIndex++;
					
					// e.g. 2x^1 wil become 2x
					output = ifExponentValueIsOne(input, output, exponentIndex);
					output = ifExponentValueIsZero(output, exponentIndex);
					
					continue;
					
				} else {
					
					exponentFlag = false;
					
					
				}
				
			}
			
			//turning this [2, 0] into this [20]
			if((String(input[i]).match(/^[0-9]{1}$/) != null && String(input[i+1]).match(/^[0-9]{1}$/) != null) || numberFlag == true) {
				
				numberFlag = true;
				
				if(output[outputIndex] == undefined) {
					
					output[outputIndex] = input[i];
					
				} else {
					
					output[outputIndex] += input[i];
				}
				
				if(String(input[i+1]).match(/^[0-9]{1}$/) == null) {
					
					numberFlag = false;
					outputIndex++;
					
				}
				
				arrayIndex++;
				continue;
				
			} else {
				
				output[outputIndex] = input[i];
				
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
	
	var flag = false;
	
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
	
	var output = [];
	var variableFlag = false;
	var operatorFlag = false;
	var variableInBetweenFlag = false;
	
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
	
	var flag = false;
	
	if(index == input.length-1) {
		
		flag = true;
		
	}
	
	return flag;
}

function checkOperator(input, index) {
	var flag = false;
	
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
	
	var output = [];
	
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


function checkSingleVariableInEquation(input, index) {
	
	let flag = false;
	
	if(isNaN(input[index-1])) {
		
		let flag = true;
		
	}
	
	return flag;
}


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
	
	var output = [];
	var index = 0;
	
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

