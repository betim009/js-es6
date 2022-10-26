// Shorthand property e Method names

const colorA = 'black';
const numeroA = 4;

const objetoA = {
    colorA,
    numeroA,
    chave: 'chaveB',
    chaveB: function describe () {
        return this.colorA;
    }
}

// console.log(objetoA);


const formatUser = (name, avatar) => ({
    name,
    avatar
})

// console.log(formatUser('Alberto', 'alberto.png'))


// Destructuring assignment

const [primeiro, segundo, terceiro] = [ 1, 2, 3]; 
// console.log(primeiro, segundo, terceiro);

const [, , c] = [1, 2, 3];
// console.log(c);

const dog = {
    nameDog: 'pet',
    cor: 'preto',
    idade: 3
}
const { nameDog } = dog;
// console.log(nameDog);

const { nameDog: cao } = dog; // reatribuindo novo nome para chave dentro do objeto
// console.log(cao);


const cidades = {
    iuna: {
        pais: 'Brasil',
        lingua: 'Portugues'
    },
    londres: {
        pais: 'Inglaterra',
        lingua: 'Ingles'
    }
}

const { londres : { lingua }} = cidades;
// console.log(lingua);

const getName = name => (name);
// console.log(getName('alberto'))

const getNameObj = ({ name }) => name;
// console.log(getNameObj({name: 'bebeto'}));

// Template Strings
const furColor = 'brown';
const legs = 4;

const mouse = {
    furColor,
    legs,
    tail: 'long, skiny',
    describe () {
        return `A mouse with ${this.furColor}`
    }
}

console.log(mouse.describe());