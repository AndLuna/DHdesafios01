//Desafio 1
const employees = require ('./employees');

/*utilizo o metodo Filter em um callback para filtrar
somente os que trabalham no departamento financeiro */
let financeiro = employees.filter(function(employees){
  if (employees.department == 'Financeiro'){
    // Caso condicao, some ao salario 50%
    return employees.salary += (employees.salary * (1-0.5)
    );  
  }
});
console.log(financeiro);

// fiz uma arrow function com metodo filter e length para somar os funcionarios
let funcionarios = financeiro.filter(func => func.department == 'Financeiro').length;

// Agora utilizei o metodo reduce para somar os salarios
let soma = financeiro.reduce((a, b) => a+b.salary, 0)
console.log('Quantidade de funcionarios neste departamento: ' + funcionarios + '\n' + 
            'Soma do Salario dos funcionarios após aumento: ' + soma.toLocaleString('pt-BR')+'$')


