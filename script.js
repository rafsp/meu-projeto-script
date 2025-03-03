// Função para alterar o texto do parágrafo
function alterarTexto() {
    let elemento = document.getElementById("texto");
    elemento.innerText = "Texto alterado com sucesso!";
}

// Função para mudar a cor de fundo da página
function mudarCor() {
    let cores = ["red", "blue", "green", "purple"];
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}

// Função para adicionar um item à lista
function adicionarItem() {
    let input = document.getElementById("itemInput");
    let texto = input.value.trim();

    if (texto === "") {
        alert("Digite um item antes de adicionar!");
        return;
    }

    let lista = document.getElementById("lista");
    let item = document.createElement("li");
    item.innerText = texto;
    
    // Adicionando botão de remoção ao item da lista
    let botaoRemover = document.createElement("button");
    botaoRemover.innerText = "X";
    botaoRemover.style.marginLeft = "10px";
    botaoRemover.onclick = function () {
        lista.removeChild(item);
    };

    item.appendChild(botaoRemover);
    lista.appendChild(item);
    input.value = "";
}