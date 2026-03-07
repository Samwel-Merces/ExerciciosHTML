

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

//lista conhecimentos
let lista = document.getElementById("listaConhecimentos");

lista.innerHTML = ""; //Limpeza da lista antes de rodar o forEach

dados.conhecimentos.forEach(conhecimento => {

    let li = document.createElement("li");
    li.textContent = conhecimento;

    lista.appendChild(li);

});
//lista experiências

let lista2 = document.getElementById('listaExperiencias');

lista2.innerHTML = ""; //Limpeza da lista antes de rodar o forEach

dados.experienciasProfissionais.forEach(exp =>{
    let li = document.createElement("li");
    li.textContent = exp;

    lista2.appendChild(li);

    //lista formação
let lista3 = document.getElementById("formacao");
lista3.innerHTML = " ";

Object.entries(dados["formacao academica"]).forEach(items =>{

    let li = document.createElement("li");
    li.textContent = items[0] + ": " + items[1];

    lista3.appendChild(li)
});


});

console.log(dados["formacao academica"])

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
"nome curso":"analise e desenvolvimento de sistemas",
"instituicao":"Senac",
"data inicio":"02/02/2025",
"data termino":"01/06/2027"
}
}

