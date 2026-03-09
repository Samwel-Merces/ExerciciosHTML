document.getElementById("btnCarregar").addEventListener("click", () => {

fetch("dados.json")
.then(resposta => resposta.json())
.then(dados => {

document.getElementById("nome").textContent = dados.nome.toUpperCase();

let img = document.getElementById("imgUser");
img.src = dados.fotoperfil;
img.style.borderRadius = "100px";

document.getElementById("dtn").textContent = dados.datanascimento;
document.getElementById("em").textContent = dados.email;
document.getElementById("tele").textContent = dados.Telefone;
document.getElementById("git").textContent = dados.github;
document.getElementById("link").textContent = dados.linkedin;


// conhecimentos
let lista = document.getElementById("listaConhecimentos");
lista.innerHTML = "";

dados.conhecimentos.forEach(conhecimento => {

let li = document.createElement("li");
li.textContent = conhecimento;

lista.appendChild(li);

});


// experiencias
let lista2 = document.getElementById("listaExperiencias");
lista2.innerHTML = "";

dados.experienciasProfissionais.forEach(exp => {

let li = document.createElement("li");
li.textContent = exp;

lista2.appendChild(li);

});


// formação
let lista3 = document.getElementById("formacao");
lista3.innerHTML = "";

Object.entries(dados.formacaoAcademica).forEach(item => {

let li = document.createElement("li");
li.textContent = item[0] + ": " + item[1];

lista3.appendChild(li);

});

});

});