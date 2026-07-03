"use strict";
class Tarefa {
    titulo;
    descricao;
    concluida;
    dataCriacao;
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
        this.dataCriacao = new Date();
    }
    renderizar() {
        return `<li>
            <input type="checkbox">
            <strong>${this.titulo}</strong>
            <p>${this.descricao}</p>
            <small>${this.dataCriacao.toLocaleString()}</small>
            </li>
            `;
    }
}
class App {
    tarefas;
    constructor() {
        this.tarefas = [];
        const botao = document.getElementById("botao-adicionar");
        botao.addEventListener("click", () => {
            this.adicionarTarefa();
        });
    }
    adicionarTarefa() {
        const input = document.getElementById("campo-titulo");
        const titulo = input.value;
        const textarea = document.getElementById("campo-descricao");
        const descricao = textarea.value;
        const tarefa = new Tarefa(titulo, descricao);
        this.tarefas.push(tarefa);
        this.renderizarLista();
    }
    renderizarLista() {
        const lista = document.getElementById("listaTarefas");
        lista.innerHTML = "";
        for (const tarefa of this.tarefas) {
            lista.innerHTML += tarefa.renderizar();
        }
    }
}
const app = new App();
