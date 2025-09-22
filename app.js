//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

// Função adicionar amigos
function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo'); // Alterado para 'amigo'
  const nomeAmigo = inputAmigo.value.trim(); // Alterado a 'value'

  // Validar que o campo não está vazio
  if (nomeAmigo === '') {
    alert('Insira um nome');
    return;
  }

  // Validar que o nome não está repetido
  if (amigos.includes(nomeAmigo)) {
    alert('Este amigo já foi adicionado');
    return;
  }

  // Adicionar o nome ao Array de amigos e limpar o input
  amigos.push(nomeAmigo);
  inputAmigo.value = '';

  // Atualizar a lista no HTML
  atualizarListaAmigos();
}

// Função atualizar lista de amigos
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';

  // Criar uma cópia ordenada do array para exibição
  const amigosOrdenados = [...amigos].sort((a, b) => 
    a.toLowerCase().localeCompare(b.toLowerCase())
  );

  amigosOrdenados.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Função selecionar amigo
function sortearAmigo() {
  // Validar que haja amigos disponíveis no array 
  if (amigos.length === 0) {
    alert('Adicione amigos antes de realizar o sorteio');
    return;
  }

  // Gerar un índice aleatório
  const indice = Math.floor(Math.random() * amigos.length);

  // Obter o nome sorteado
  const amigoSorteado = amigos[indice];

  // Eliminar o amigo sorteado da lista
  amigos.splice(indice, 1);

  // Mostrar o nome no HTML
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = 'Seu amigo secreto é o: <strong>' + amigoSorteado + '</strong>';

  // Atualizar a lista de amigos no HTML
  atualizarListaAmigos();
}

// Função ativar a tecla Enter após escrever um nome
function handleEnter(event) {
  if (event.key === 'Enter') {
    adicionarAmigo();
  }
}