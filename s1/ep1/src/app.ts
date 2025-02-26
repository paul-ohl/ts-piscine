interface Person {
	name: string;
	age: number;
};

function displayPerson(p: Person): void {
	console.log(`Hi! I am ${p.name} and I am ${p.age} years old.`)
}

const person1: Person = {
	name: "Alice",
	age: 25,
};

displayPerson(person1);
