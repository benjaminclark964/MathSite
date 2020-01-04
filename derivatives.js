var results = document.getElementById('output');
		
function calcDerivative(x) {
	var input = [];
	input = $(x).val();
	
	if(input.length == 1){
		calcSingleDigitorLetterDerivative(input);
		
	} else {
		input = delimitSpaces(input);
		if(input.indexOf('^') > -1){
			results.innerHTML = calcDerivativeWithExponent(input);
			
		} else {
			results.innerHTML = calcDerivativeEquationWithNoExponent(input);
		}	
	}
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
	
	var calc_deriv = Number(input[exponentIndex(input)]) * Number(getFirstNumber(input));
	output[0] = calc_deriv;
	var numberLength = output[0];
	
	for(let i = String(numberLength).length; i < input.length; i++) {
		if(input[i] == '^'){
			if(Number(input[i+1]) > 2){
				output[0] += input[i];
				output[0] += Number(input[i+1] - 1);
			}
			break;
		} else {
			output[0] += input[i];
		}
				
	}
	return output;
}

function getEquation(input) {
	var output = [];
	var temp = [];
	var outputIndex = 0;
	
	for(let i = 0; i < input.length; i++) {
		if(input[i] == '+' 
		|| input[i] == '-' 
		|| input[i] == '/' 
		|| input[i] == '*'
		|| i == (input.length - 1)) {
			if(output[outputIndex] == undefined) {
				output[outputIndex] = temp;
			} else {
				output[outputIndex] += temp;
			}
			
			output[outputIndex] += input[i];
			outputIndex++;
			temp = [];
		} else {
			// avoid undefined being added to the array;
			if(temp[0] == undefined) {
				temp[0] = input[i];
			} else {
				temp[0] += input[i];
			}
			
		}
	}
	return output;
}


function calcDerivativeEquationWithNoExponent(input) {
	var output = [];
	var variableFlag = false;
	
	for(let i = 0; i < input.length; i++) {
		
		if(isNaN(input[i])) {
			
			if(input[i] == '+' 
				|| input[i] == '-' 
				|| input[i] == '/' 
				|| input[i] == '*'
				|| i == (input.length - 1)) {
				
				if(checkForVariable(input[i]) == true) {
					if(isNaN(input[i-1])) {
						output[0] += '+1';
						i++;
						continue;
					} 
					continue;
				} else {
					
					if((i+2) == input.length) {
						continue;
						
					} else if(checkForVariable(input[i+2]) == false || (String(output[0]).indexOf('undefined') > -1 && i > 0)) {
						continue;
						
					} else {
						output[0] += input[i];
					}
					
				}
				
			} else {
				
				//refactor later into function for variables in equation
				if(isNaN(input[i-1])) {
					if(output[0] == undefined){
						output[0] = '1';
						i++;
						continue;
					} else {
						output[0] += '+1';
						i++;
						continue;
					}
				}
				
				//if variable next to a number
				continue;
			}
		} else {
		
			if(checkForVariable(input[i+1]) == true) {
				if(output[0] == undefined) {
				output[0] = input[i];
				} else {
					output[0] += input[i];
				}
			} else {
				//i++;
				continue;
			}
			
		}
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

function testCalcDerivative(inp) {
	var input = [];
	input = inp;
	//input = $(inp).val();
	
	if(input.length == 1){
		calcSingleDigitorLetterDerivative(input);
		
	} else {
		input = delimitSpaces(input);
		if(input.indexOf('^') > -1){
			results.innerHTML = calcDerivativeWithExponent(input);
			
		} else {
			results.innerHTML = calcDerivativeEquationWithNoExponent(input);
		}	
	}
	return results.innerHTML;
}