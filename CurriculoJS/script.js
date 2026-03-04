// window.alert("Pagina Carregada")
window.document.getElementById("btnCarregar").addEventListener("click", () => {
window.document.getElementById("nome").textContent = dados.nome.toUpperCase();
// window.document.getElementById("imgUser"). = dados.fotoperfil();
window.document.getElementById("dtn").textContent = dados.datanascimento;
window.document.getElementById("em").textContent = dados.email;
window.document.getElementById("tele").textContent = dados.Telefone;
window.document.getElementById("git").textContent = dados.github;
window.document.getElementById("link").textContent = dados.linkedin;



});

const dados = {
"nome":"samuel de souza",
"fotoperfil":"/img/fotoperfil.jpg",
"datanascimento":"31/10/2002",
"email":"samuelmerces321@gmail.com",
"Telefone":"(11) 7070-7070",
"linkedin":"in/samuel-mercês-21a23b236",
"github":"github.com/Samwel-Merces",
"conhecimentos":["Java","HTML","CSS","Javascript"],
"experiencias profissionais":["operador de loja","auxiliar admnistrativo"],
"formacao academica": {
"nome curso":"ads",
"instituicao":"senac",
"data inicio":"02/02/2025",
"data termino":"01/06/2027"
}
}

