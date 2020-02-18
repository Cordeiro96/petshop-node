let pets = [
    {
        nome: "batman"
    },
    {
        nome: "constelinha"
    },
    {
        nome: "thainha"
    }
];
const listarPets = () => {
    let conteudo = "";

    for(const pet of pets) {
        conteudo += 
        `---------------
        ${pet.nome}
        ----------------`;
    }
    return conteudo;
};

const adicionarPet = pet => {
    return pets.push(pet);
};

const buscarPet = nome => {
    return pets.filter(pet => {
        return pet.nome == nome;
    });
}

module.exports = { listarPets, adicionarPet, buscarPet };