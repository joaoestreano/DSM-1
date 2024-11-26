// Função para gerar a lista a partir dos dados do formulário
function gerarLista(event) {
    event.preventDefault(); // Impedir o envio do formulário

    // Obter os valores dos campos
    var nome = document.getElementById("nome").value;
    var ordem = document.getElementById("ordem").value;
    var classe = document.getElementById("classe").value;

    // Criar um item da lista para cada campo
    var lista = document.getElementById("lista");
    lista.innerHTML = ""; // Limpar lista anterior, se houver

    // Criar os itens de lista
    var itemNome = document.createElement("li");
    itemNome.textContent = "Nome: " + nome +",";
    lista.appendChild(itemNome);

    var itemOrdem = document.createElement("li");
    itemOrdem.textContent = "Ordem: " + ordem +",";
    lista.appendChild(itemOrdem);

    var itemClasse = document.createElement("li");
    itemClasse.textContent = "Classe: " + classe +".";
    lista.appendChild(itemClasse);
}

// Adicionar o ouvinte de evento ao formulário
document.getElementById("CadAnimais").addEventListener("submit", gerarLista);
