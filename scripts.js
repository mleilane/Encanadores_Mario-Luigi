

// console.log("funcionou") validando se a conexão com o HTML foi realizada com sucesso

const formulario = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

//função para estilizar o formulario conforme clique no botão "fale conosco"
function cliqueiNoBotao(){

    formulario.style.left = "50%"
    formulario.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"

}