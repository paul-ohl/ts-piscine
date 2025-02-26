interface Employe {
	nom: string;
	poste: string;
}

interface Client {
	nom: string;
	entreprise: string;
}

type PersonnePro = Employe | Client;

function afficherInfoProfessionnelle(p: PersonnePro): void {
	if ("poste" in p)
		console.log(`Employé: ${p.nom} travaille comme ${p.poste}.`);
	else
		console.log(`Client: ${p.nom} est associé à l'entreprise ${p.entreprise}.`);
}

const emp: Employe = {
	nom: "A",
	poste: "B",
}

const cli: Client = {
	nom: "C",
	entreprise: "D",
}

afficherInfoProfessionnelle(emp)
afficherInfoProfessionnelle(cli)
