function calculateAverage(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    let media = soma / numeros.length;
    return media;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));


function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';

    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("countVowels"))


function contarVogais(vogais){

    let contar = 0;
    const vogaisT = "aeiouAEIOU"

    for(i = 0; i < vogais.length; i++){
        if(vogaisT.includes(vogais[i])){
            contar++
        }
    }
    return contar
}

console.log(contarVogais("Hello World"));



function sumEvenNumbers(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

