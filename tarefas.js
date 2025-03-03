function adicionarTarefa() {
    let input = document.getElementById("novaTarefa");
    let texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    let lista = document.getElementById("listaTarefas");
    let item = document.createElement("li");

    item.innerHTML = `${texto} <button onclick="removerTarefa(this)">X</button>`;
    item.addEventListener("click", () => item.classList.toggle("concluido"));

    lista.appendChild(item);
    salvarTarefas();
    input.value = "";
}

function removerTarefa(botao) {
    botao.parentElement.remove();
    salvarTarefas();
}

function salvarTarefas() {
    let tarefas = [];
    document.querySelectorAll("#listaTarefas li").forEach(item => {
        tarefas.push(item.innerText.replace(" X", ""));
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregarTarefas() {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.forEach(texto => {
        let item = document.createElement("li");
        item.innerHTML = `${texto} <button onclick="removerTarefa(this)">X</button>`;
        document.getElementById("listaTarefas").appendChild(item);
    });
}

window.onload = carregarTarefas;
