

// window.alert("Pagina Carregada")
window.document.getElementById("btnCarregar").addEventListener("click", () => {
window.document.getElementById("nome").textContent = dados.nome.toUpperCase()
//carregamento da image
 var img = window.document.getElementById("imgUser");
 img.src = dados.fotoperfil
 img.style.borderRadius = '100px'
window.document.getElementById("dtn").textContent = dados.datanascimento;
window.document.getElementById("em").textContent = dados.email;
window.document.getElementById("tele").textContent = dados.Telefone;
window.document.getElementById("git").textContent = dados.github;
window.document.getElementById("link").textContent = dados.linkedin;

let lista = document.getElementById("listaConhecimentos");

dados.conhecimentos.forEach(conhecimento => {

    let li = document.createElement("li");
    li.textContent = conhecimento;

    lista.appendChild(li);

});


let lista2 = document.getElementById('listaExperiencias');

dados.experienciasProfissionais.forEach(exp =>{
    let li = document.createElement("li");
    li.textContent = exp;

    lista2.appendChild(li);

});


//Conhecimentos 



});

const dados = {
"nome":"samuel Mercês",
"fotoperfil":"fotodeperfil.jpg",
"datanascimento":"31/10/2002",
"email":"samuelmerces321@gmail.com",
"Telefone":"(11) 7070-7070",
"linkedin":"in/samuel-mercês-21a23b236",
"github":"github.com/Samwel-Merces",
"conhecimentos":["Java","HTML","CSS","Javascript"],
"experienciasProfissionais":["operador de loja","auxiliar admnistrativo"],
"formacao academica": {
"nome curso":"ads",
"instituicao":"senac",
"data inicio":"02/02/2025",
"data termino":"01/06/2027"
}
}

