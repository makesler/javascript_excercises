/*
var str = "We are the 12 Owasso Rams";
var re = /\d{2}/i;
var x = re.test(str);

console.log(x)
*/

function zipCode(str) {
	var re = /^[0-9]{5}$/;
	var x = re.test(str);
	return x;
}

zipCode("50136");

function whiteSpace(str) {
	var re = /[ ]/;
	var x = re.test(str);
	return x;
}

whiteSpace("Owasso Rams");

function socialSecurityNumber(str) {
	var re = /^\d\d\d-\d\d-\d\d\d\d$/;
	var x = re.test(str);
	return x;
}

socialSecurityNumber("123-45-6789");
