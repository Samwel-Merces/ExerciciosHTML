function verificarNome(){
    const user = document.getElementById("campoUser").value.trim();
    const pass = document.getElementById("campoPass").value.trim();
    if(!user || !pass){
        let text = document.getElementById("erro");
        text.innerHTML = "Campos Vazios!";
        text.style.color = "red";        
    }else{
        let text = document.getElementById("erro");
        text.innerHTML = "";
    }

}