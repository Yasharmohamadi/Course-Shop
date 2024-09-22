import rules from "./rules"; // import {requiredValue, minValue, maxValue, emailValue}

const validator = (value, validation) => {

	let validationResault = [];

	for (const validator of validation) {
		if (validator.value === rules.requiredValue) {
			value.trim().length === 0 && validationResault.push(false);
		} else if (validator.value === rules.minValue) {
			value.trim().length < validator.min && validationResault.push(false);
		} else if (validator.value === rules.maxValue) {
			value.trim().length > validator.max && validationResault.push(false);
		} else if (validator.value === rules.emailValue) {
			!value.includes('@') && validationResault.push(false);
		}
	}

    if (validationResault.length) {
        return false // validationResault have 'false' value
    } else {
        return true // validationResault have not value
    }

};

export default validator;