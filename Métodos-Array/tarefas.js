//  Etapa 1: Adicionando Novas Tarefas
let tarefas = [
    'Estudar JavaScript', 
    'Fazer exercícios de matemática', 
    'Lavar a louça', 
    'Comprar mercado', 
    'Ir à academia', 
    'Ler um livro', 
    'Fazer revisão para o teste', 
    'Limpar o quarto', 
    'Estudar para concurso', 
    'Organizar o computador'
];
console.log("Antes do push:", tarefas);
tarefas.push('Jogar vídeo-game');
tarefas.push('Assistir um filme');
console.log("Depois do push:", tarefas);


// Etapa 2: Removendo a Última Tarefa
console.log("Antes do pop:", tarefas);
let tarefaRemovida = tarefas.pop();
console.log("Depois do pop:", tarefas);
console.log("Tarefa removida:", tarefaRemovida);


// Etapa 3: Adicionando uma Tarefa no Início
console.log("Antes do unshift:", tarefas);
tarefas.unshift('Correr na rua');
console.log("Depois do unshift:", tarefas);


// Etapa 4: Removendo a Primeira Tarefa
console.log("Antes do shift:", tarefas);
let tarefaRemovida2 = tarefas.shift();
console.log("Depois do shift:", tarefas);
console.log("Tarefa removida:", tarefaRemovida2);


// Etapa 5: Verificando se uma Tarefa Existe
console.log(`A lista de tarefas inclui 'Ir à academia'?, ${tarefas.includes("Ir à academia")}`);


// Etapa 6: Transformando a Lista em String
console.log("Tarefas como string:", tarefas.join(', '));