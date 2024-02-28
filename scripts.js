

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


} px