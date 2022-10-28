/*  Higer-order Functions - Exemplos de uso: 
    
    # Extensão 'Run Code' para rodas os exemplos
    # Console.logs serão comentados
*/


// 1. Criando uma função e chamando ela por argumento. 

// const double = getMult(2);
// const triple = getMult(3);

function getMult (mult) { 
    console.log(mult); // mult = 2
    return function (number){ // number = 10
        return number * mult
    }
}

// console.log(double(10));
// console.log(triple(10));

// Refatoração
const getMult2 = mult => number => number * mult; 

// const double2 = getMult2(2);
// const triple2 = getMult2(3);

// console.log(double2(20))
// console.log(triple2(30))

// 2. HOF MAP 
// Retorna um novo Array com a mesma quantidade de itens do original mas com cada item transformado

const arrayNumber = [5, 10, 15]; 

const newArray = arrayNumber.map((e, i, a) => 
`Posição no array: ${i}      
 valor do elemento: ${e}     
 array: ${a}
 `)

const newArrMult = arrayNumber.map((e) => e * 2);

// console.log(newArray)
// console.log(newArrMult)


const animes = [
    { name: 'one piece', year: '1999'},
    { name: 'dragon ball', year: '1995'},
    { name: 'naruto', year: '2002'},
    { name: 'full metal', year: '2006'}
]

const animesName = animes.map(({name}) => name);
// console.log(animesName.join(', '))


// 3. Filter -> baseado numa condição para obter um novo Array

const numbers = [10, 20, 23, 30, 31, 32, 50];

const numberFilter = numbers.filter((e, _i, _a) => e > 23);
// console.log(numberFilter);


const animes2 = [
    { name: 'one piece', year: '1999'},
    { name: 'dragon ball', year: '1995'},
    { name: 'naruto', year: '2002'},
    { name: 'full metal', year: '2006'},
    { name: 'cowboy bebop', year: '1999'},
    { name: 'nanatsu no taizai', year: '2016'}
]

const animesDepois1999 = animes2.filter((e, _i, _a) => e.year >= 2000);
// console.log(animesDepois1999);


const animesAlberto = [
    'one piece',
    'naruto',
    'kingdom',
    'spy family',
    'demon slayer',
    'jujutso no kaisen',
    'my hero academia',
    'ranking of kings'
]

const animesPv = [
    'one piece',
    'solo leviling',
    'my hero academia',
    'demon slayer',
    'summoner',
    'overlord',
    'helsing',
    'hunte x hunter'
]

const animesEmComun = animesAlberto.filter((anime) => animesPv.includes(anime));
// console.log(animesEmComun);


// 3. Reduce -> quando precisar reduzir o array para algum tipo de dado

const numeros = [1 , 5, 10];

const sum = numeros.reduce((acc, elemento, _i, _a) => acc + elemento, 0);
// console.log(sum); // 16

const jogos = [
    { name: 'tibia', type: 'rpg' },
    { name: 'ragnarok', type: 'rpg' },
    { name: 'cs go', type: 'fps' },
    { name: 'league of legends', type: 'moba' }
]

const jogosList = jogos.reduce((acc, { name }) => `${acc}- ${name}\n`, '');
// console.log(jogosList) 
/*- tibia
- ragnarok
- cs go
- league of legends */

const pessoas = [
    {id: '1', nome: 'Alberto', age: '27'},
    {id: '2', nome: 'Camila', age: '20'},
    {id: '3', nome: 'Denis', age: '28'},
    {id: '4', nome: 'Edim', age: '20'},
    {id: '5', nome: 'Caiao', age: '34'}
]
const frequenciaIdade = pessoas.reduce((acc, { age }) => {
    acc[age] = acc[age] + 1 || 1
    return acc
}, {})

// console.log(frequenciaIdade); // retorno: { '20': 2, '27': 1, '28': 1, '34': 1 }

// 4. combinando todos

const pessoas2 = [
    {id: '1', nome: 'Alberto', age: 27, sexo: 'masc' },
    {id: '2', nome: 'Camila', age: 20, sexo: 'fem' },
    {id: '3', nome: 'Denis', age: 28, sexo: 'masc' },
    {id: '4', nome: 'Edim', age: 20, sexo: 'masc' } ,
    {id: '5', nome: 'Caiao', age: 34, sexo: 'masc' }
]

const pessoasDepois95 = pessoas2.filter(({ age }) => age > 26)
    .reduce((acc, { age }) => acc + age ,0)

// console.log(pessoasDepois95); // retorno: 89

const getGender = (({sexo}) =>  sexo ===  'masc');
const getYear = ({nome, age}) => ({
    nome,
    anoNascimento: 2022 - age
})

const mascYear = pessoas2.filter(getGender).map(getYear);
console.log(mascYear); /* retorno abaixo: 
[
  { nome: 'Alberto', anoNascimento: 1995 },
  { nome: 'Denis', anoNascimento: 1994 },
  { nome: 'Edim', anoNascimento: 2002 },
  { nome: 'Caiao', anoNascimento: 1988 }
]
*/









