

// console.log("funcionou") validando se a conexão com o HTML foi realizada com sucesso

const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

//criando as funções que mudam o stylo do css conforme um evento é acionado
//função para estilizar o formulario conforme clique no botão "fale conosco"
function mostrarForm() {

    formulario.style.left = "50%"
    formulario.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"

}

//voltar os estilos anteriores da pagina, sem o formulario
function esconderForm() {
    formulario.style.left = "-300px"
    formulario.style.transform = "translatex(0)"
    mascara.style.visibility = "hidden"

} 

//html serviços


// Selecione todos os elementos <h2> dentro da lista de serviços
const titulosServicos = document.querySelectorAll('.lista-servicos h2');

// Para cada título de serviço, adicione um event listener para o clique
titulosServicos.forEach(titulo => {
    titulo.addEventListener('click', () => {
        // Selecione o elemento <p> irmão do título clicado
        const descricao = titulo.nextElementSibling;

        // Alternar a classe 'ativo' para mostrar ou ocultar a descrição
        descricao.classList.toggle('ativo');
    });
});