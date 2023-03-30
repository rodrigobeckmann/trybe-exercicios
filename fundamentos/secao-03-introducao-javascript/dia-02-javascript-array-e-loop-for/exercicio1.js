let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArray = 0;
let media = 0;
let maiorValor = 0;
let menorValor = numbers[0];
let valorImpar = 0;
let novoArray = [];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    somaArray = somaArray + numbers[index];
}

console.log('soma de todos os valores da array: ' + somaArray);
media = somaArray / numbers.length;
console.log('a media aritmética é: ' + media);

if (media > 20) {
    console.log('valor da media maior que 20');
} else {
    console.log('valor da media menor que 20');
}

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }

    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }
}

console.log('maior valor da array: ' + maiorValor);
console.log('menor valor da array: ' + menorValor);

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 > 0) {
        valorImpar = valorImpar + 1;
    }
}

switch (valorImpar) {
    case 0:
        console.log('nenhum valor ímpar encontrado');
        break;
    default:
        console.log('quantidade de valores ímpares na array: ' + valorImpar);
        break;

}


for (let indexArray = 0; indexArray < 25; indexArray++) {
    novoArray[indexArray] = indexArray + 1;
    console.log(novoArray[indexArray] + ' dividido por 2 é igual a: '+novoArray[indexArray] / 2);
}





