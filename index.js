const botaoMostrarProjetos = document.querySelector('.btn_mostrar_projetos')
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')//Vai buscar todos os elementos com essa classe, porém não irá buscar a classe ativo por conta do 'not'

botaoMostrarProjetos.addEventListener('click', () =>{
    mostrarMaisProjetos();

    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}