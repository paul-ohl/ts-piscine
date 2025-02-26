interface Adresse {
	rue: string;
	ville: string;
}

interface Person {
	readonly id: number;
	nom: string;
	age: number;
	adresse?: Adresse;
};

function displayPerson(p: Person): void {
	if (p.adresse)
		console.log(`Bonjour, je m'appelle ${p.nom} (ID: ${p.id}), j'ai ${p.age} ans et j'habite au ${p.adresse.rue}, ${p.adresse.ville}.`);
	else
		console.log(`Bonjour, je m'appelle ${p.nom} (ID: ${p.id}) et j'ai ${p.age} ans`)
}

const person2: Person = {
	id: 2,
	nom: "Alice",
	age: 25,
	adresse: {
		rue: "Rue du poney qui tousse",
		ville: "Turcoing aux oies"
	}
};

const person3: Person = {
	id: 3,
	nom: "Bob",
	age: 22,
};

displayPerson(person2);
displayPerson(person3);
