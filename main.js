// objeto
const hero = {
    name: "Thor",
    team: "Vingadores",
    power: 98,
    weapons: ["Stormbreaker", "Mjolnir"],
    origin: {planet: "Asgard"},
    age: 1500
}


// lendo o objeto
console.log(hero.name); //notação de pontos
hero["team"]

console.log(hero["team"]); // notação de colchetes

console.log(hero.origin.planet); // objeto dentro de outro objeto

console.log(hero.weapons[0]); // array dentro do objeto weapons

const key = "power"
hero[key]

console.log(hero.age); // essa chave não existe, trazendo result undefined

// Alterando, adicionando e removendo

hero.power = 99
hero.nickname = "Deus do trovão"

delete hero.nickname
console.log(hero);

// Percorrendo um objeto

for(const prop in hero) {
    console.log(`${prop}:`, hero[prop]);
}

Object.keys(hero) // lista de chaves
Object.values(hero) // lista de valores

// Desestruturação
const {name, team} = hero
console.log(name, team);

// método
const villain = {
    name: "Doutor Destino",
    power: 500,
    attack(target) {
        return`${this.name} atacou ${target}!`
    },
    powerUp(amount) {
        this.power += amount
        return this.power 
    }
}

console.log(villain.attack("Thor"));
console.log(villain.powerUp(50));

// referencia x copia

const ref = hero

ref.power = 1

console.log(hero.power);


