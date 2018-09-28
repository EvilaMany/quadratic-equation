module.exports = function solveEquation(equation) {
	let parts = equation.split(' ')
	let n1 = parseInt(parts[0]), 
		n2 = parseInt(parts[3]+parts[4]), 
		n3 = parseInt(parts[7] + parts[8])

	let d = n2**2 - (4 * n1 * n3)

	let x1 = Math.round((-1 * n2 - Math.sqrt(d)) / (2 * n1))
	let x2 = Math.round((-1 * n2 + Math.sqrt(d)) / (2 * n1))

	return [x1,x2].sort(function(a,b){return a-b})
}