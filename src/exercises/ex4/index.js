function deleteElementByNameModifyingExisting(people, toDelete) {

	people.splice(people.indexOf(toDelete), 1);
	return people;

	/*const peopleWithoutElement = [];

	for (let i = 0; i < people.length; i++) {
		if(people[i] !== toDelete) {
			peopleWithoutElement.push(people[i]);
		}
	}

	people = peopleWithoutElement;

	return people;*/
}

module.exports = {
	deleteElementByNameModifyingExisting
};
