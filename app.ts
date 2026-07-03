class Tarefa{
    titulo: string;
    descricao: string;
    concluida: boolean;
    dataCriacao: Date;

        constructor (titulo:string, descricao: string){
            this.titulo = titulo;
            this.descricao = descricao;
            this.concluida = false;
            this.dataCriacao = new Date();
        }
        renderizar(): string{
            return `<li>
            <input type="checkbox">
            <strong>${this.titulo}</strong>
            <p>${this.descricao}</p>
            <small>${this.dataCriacao.toLocaleString()}</small>
            </li>
            `
        }
}
class App{
    tarefas: Tarefa[];
    constructor(){
        this.tarefas =[];
        const botao = document.getElementById("botao-adicionar") as HTMLElement;
        botao.addEventListener("click",() => {
            this.adicionarTarefa();
        })
    }
    adicionarTarefa(){
        const input = document.getElementById("campo-tarefa") as HTMLInputElement;
        const titulo = input.value;
        const textarea = document.getElementById("campo-descricao") as HTMLTextAreaElement;
        const descricao = textarea.value;
        const tarefa = new Tarefa(titulo, descricao);
        this.tarefas.push(tarefa);
        this.renderizarLista();
    }
    renderizarLista(){
        const lista = document.getElementById("listaTarefas") as HTMLElement;
        lista.innerHTML = "";
        for (const tarefa of this.tarefas) {
        lista.innerHTML += tarefa.renderizar();
        }
    }
}
const app = new App();
