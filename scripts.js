//html principal 

// console.log("funcionou") validando se a conexão com o HTML foi realizada com sucesso

const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

//criando as funções que mudam o stylo do css conforme um evento é acionado
//função para estilizar o formulario conforme clique no botão "fale conosco"
function mostrarForm() {
    // Esta função é responsável por exibir o formulário e a máscara de formulário quando o botão "Fale Conosco" é clicado.
    // Ela ajusta o estilo do formulário e da máscara para torná-los visíveis na tela.
    formulario.style.left = "50%"
    formulario.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"

}

//voltar os estilos anteriores da pagina, sem o formulario
function esconderForm() {
    // Esta função é responsável por esconder o formulário e a máscara de formulário quando o usuário clica em algum lugar da máscara.
    // Ela ajusta o estilo do formulário e da máscara para torná-los invisíveis novamente na tela.
    formulario.style.left = "-300px"
    formulario.style.transform = "translatex(0)"
    mascara.style.visibility = "hidden"

}

//html nossos serviços
// Selecione todos os elementos <h2> dentro da lista de serviços
const titulosServicos = document.querySelectorAll('.lista-servicos h2');

// Para cada título de serviço, adicione um event listener para o clique
titulosServicos.forEach(titulo => {
    titulo.addEventListener('click', () => {
        // Esta função é responsável por alternar a visibilidade da descrição de cada serviço quando o título do serviço é clicado.
        // Ela adiciona um event listener para o clique em cada título de serviço.
        // Ao clicar em um título, ele seleciona o elemento <p> irmão do título clicado.
        // Em seguida, alterna a classe 'ativo' desse elemento <p>, o que controla sua visibilidade.

        // Selecionando o elemento <p> irmão do título clicado
        const descricao = titulo.nextElementSibling;

        // Alternar a classe 'ativo' para mostrar ou ocultar a descrição
        descricao.classList.toggle('ativo');
    });
});

