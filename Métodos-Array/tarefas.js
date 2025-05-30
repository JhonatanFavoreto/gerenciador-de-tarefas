//  Etapa 1: Adicionando Novas Tarefas
let tarefas = [
    'Estudar Hitória', 
    'Fazer exercícios de Filosofia', 
    'Lavar o banheiro', 
    'Comprar arroz', 
    'Ir à academia', 
    'Ler um livro', 
    'Fazer revisão dos estudos', 
    'Escovar os dentes', 
    'Estudar para o curso', 
    'Formatar o computador'
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