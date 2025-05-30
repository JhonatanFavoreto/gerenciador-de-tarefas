//  Etapa 1: Adicionando Novas Tarefas
let tarefas = [
  "Estudar JavaScript",
  "Fazer exercícios de matemática",
  "Lavar a louça",
  "Comprar mercado",
  "Ir à academia",
  "Ler um livro",
  "Fazer revisão para o teste",
  "Limpar o quarto",
  "Estudar para concurso",
  "Organizar o computador",
];
console.log(`Antes do push:, ${tarefas}`);
tarefas.push(`Jogar vídeo-game`);
tarefas.push(`Assistir um filme`);
console.log(`Depois do push:, ${tarefas}`);


// Etapa 2: Removendo a Última Tarefa
console.log(`Antes do pop:, ${tarefas}`);
let tarefaRemovida = tarefas.pop();
console.log(`Depois do pop:, ${tarefas}`);
console.log(`Tarefa removida:, ${tarefaRemovida}`);


// Etapa 3: Adicionando uma Tarefa no Início
console.log(`Antes do unshift:, ${tarefas}`);
tarefas.unshift(`Correr na rua`);
console.log(`Depois do unshift:, ${tarefas}`);


// Etapa 4: Removendo a Primeira Tarefa
console.log(`Antes do shift:, ${tarefas}`);
let tarefaRemovida2 = tarefas.shift();
console.log(`Depois do shift:, ${tarefas}`);
console.log(`Tarefa removida:, ${tarefaRemovida2}`);


// Etapa 5: Verificando se uma Tarefa Existe
console.log(
  `A lista de tarefas inclui 'Ir à academia'?, ${tarefas.includes(
    "Ir à academia"
  )}`
);


// Etapa 6: Transformando a Lista em String
console.log(`Tarefas como string:, ${tarefas.join(',')}`);


// Etapa 7: Extraindo uma Parte da Lista
console.log(`Parte das Tarefas (índices 2 a 5): ${tarefas.slice(2, 5)}`);


// Etapa 8: Alterando a Lista
console.log(`Antes do splice: ${tarefas}`);
let tarefaRemovida3 = tarefas.splice(3, 1);
console.log(`Depois do splice: ${tarefas}`);
tarefas[3] = "Limpar a casa"
console.log(`Lista de tarefas após o acréscimo ${tarefas}`)
console.log(`Tarefa adicionada ${tarefas[3]}`)


// Etapa 9: Concatenando Tarefas
let tarefas2 = [
    "Meditar",
    "Jogar Futebol",
    "Conversar com amigos",
    "Estudar eletrônica",
    "Ler mangás",
    "Ler HQ",
    "Estudar programação",
    "Assistir animes",
    "Ir ao cinema",
    "Tocar violão",
]
console.log(`Tarefas combinadas: ${tarefas2.concat(tarefas2)}`);
console.log(`Tarefas combinadas: ${tarefas2.concat(tarefas).join(', ')}`);


// Etapa 10: Transformando as Tarefas
let fazerTarefas = tarefas.map(tarefas => `Fazer: ${tarefas}`);
console.log(`${fazerTarefas.join(', ')}`);


// Etapa 11: Filtrando Tarefas
let tarefasFiltrada = tarefas.filter(tarefas => tarefas.length > 15);
console.log(`Tarefas filtradas (tarefas que têm mais de 15 caracteres): ${tarefas}`);


// Etapa 12: Ordenando as Tarefas
let tarefasOrdenadas = tarefas.sort();
console.log(`Tarefas ordenadas:, ${tarefasOrdenadas}`);


// Etapa 13: Invertendo a Ordem das Tarefas
let tarefasInvertidas = tarefas.reverse();
console.log(`Tarefas invertidas:, ${tarefasInvertidas}`);