const tarefas = [];

function criarTarefas() {
    
    const statusDaTarefa = {
        titulo: prompt('tituloDaSuaTarefa'),
        descricao: prompt('descriçao da sua tarefa'),
        status: prompt('a tarefa esta concluida?')

    };
    tarefas.push();
    console.log(statusDaTarefa)
  }
  
  function listarTarefas() {
    console.log("tarefas;");
  }
  
  function editarTarefas() {
    console.log('');
  }

  function apagarTarefas() {
    console.log("Você escolheu a Opção 3.");
  }

  
  function exibirMenu() {
    console.log();
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("3. Opção 3");
    
  }
  
  exibirMenu();
  
  const escolha = prompt('Escolha uma opção: Número 1- criar tarefa, Número 2- listar tarefa, Número 3- editar, Numero 4- apagar ');
  
  if (escolha === "1") {
    criarTarefas();
  } else if (escolha === "2") {
    listarTarefas();
  } else if (escolha === "3") {
    editarTarefas();
  } else if (escolha === "4") {
    apagarTarefas();
    
  } else{
    console.log("Opção inválida.");
  }
  
