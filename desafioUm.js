const employees = require ('./employees');

let financeiro = employees.filter(function(employees){
  if (employees.department == 'Financeiro'){
    return employees.salary += (employees.salary * (1-0.5)
    );  
  }
});

let funcionarios = financeiro.filter(func => func.department == 'Financeiro').length;
let soma = financeiro.reduce((a, b) => a+b.salary, 0)



console.table(financeiro);
console.log('Quantidade de funcionarios neste departamento: ' + funcionarios + '\n' + 
            'Soma do Salario dos funcionarios após aumento: ' + soma.toLocaleString('pt-BR')+'$')


