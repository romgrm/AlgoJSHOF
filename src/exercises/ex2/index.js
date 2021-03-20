function howMuchButterDoINeed(elements) {


	const sum = elements.reduce(function (accumulator, currentValue){
		return accumulator + currentValue.butter
	},0);
		console.log(sum) ;

	return sum;

	/*let total = 0;

	for(const i in elements) {
		if(elements.hasOwnProperty(i)) {
			total += elements[i].butter;
		}
	}

	return total;*/
}

module.exports = {
	howMuchButterDoINeed
};