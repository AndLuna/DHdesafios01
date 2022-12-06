

const somaNumeros = (...numeros) => {
    return numeros.reduce((anterior, atual) => anterior + atual);
}


console.log(somaNumeros('testando ', parseInt('11')+10 , ' string'));
 