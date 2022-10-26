// 1. Variaveis

const myConst = 'Variavel Constante';
//retorna 'Variavel Constante'
// console.log(myConst)

let myLet = "valor let 1";
//console.log(myLet); 

myLet = "valor let 2";
// console.log(myLet);


// 2. Spread Operator

const numbers = [250, 150, 7]; 
// console.log(numbers); // retorna array
// console.log(...numbers); // retorna o array espalhado
// console.log(Math.max(...numbers)); // retornar maior numero do array
// console.log(Math.min(...numbers)); // retorna menor numero do array

const animes = [ 
    'one piece',
    'naruto',
    'kingdom'
]

const personagens = [
    'luffy',
    'Sasuke',
    'Shin'
]

const animesPersonagens = [...animes, ...personagens];
// console.log(animesPersonagens);

const novosAnimes = [
    'jujutso no kaisen',
    'demon slayer',
    ...animes
]
// console.log(novosAnimes);


const pessoa = {
    name: 'Alberto Fernandes'
};

const endereço = {
    cidade: 'Iúna',
    estado: 'Espírito  Santo'
};

const alberto = {
    ...pessoa,
    ...endereço,
    nacionalidade: 'Brasil'
};

// console.log(alberto);


const arrascaeta = {
    age: 28,
    clube: {
        nome: 'Flamengo',
        camisa: '14'
    }
}

const arrasca = {
    ...arrascaeta
}

// console.log(`Arrascaeta age: ${arrascaeta.age}`);
// console.log(`Arrasca age: ${arrasca.age}`);

// console.log(arrascaeta.clube.nome);
// console.log(arrasca.clube.nome);


// Rest Params

const showName = (...fullName) => console.log(fullName)
// showName('Alberto', 'Fernandes', 'Couto')

const soma = (...numeros) =>  numeros.reduce((acc, curr) => acc + curr, 0) // soma de todos os numeros

// console.log(soma(8,5,9));


// Arrow Functions 

const double = x => x * 2;
// console.log(double(5))

const objNumbers = (n1, n2) => {
    return {
        primeiro: n1,
        segundo: n2
    }
}

// console.log(objNumbers(1,2))