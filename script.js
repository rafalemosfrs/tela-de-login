document.addEventListener("DOMContentLoaded", function() {
    const loginInput = document.querySelector(".login");
    const senhanput = document.querySelector(".senha");
    const btnEntrar = document.querySelector(".btn");

btnEntrar.addEventListener("click", function() {
    const login = loginInput.value.trim();
    const senha = senhaInput.value.trim();

    if (login === "" || senha === ""){
        console.log("Preenche todos os campos seu arrombado");
        return;
    }

    console.log("Entrou caralho");

});

});