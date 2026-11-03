// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector("form");

    if (formulario) {

        // Carrega dados salvos
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");

        if (nome && localStorage.getItem("nome")) {
            nome.value = localStorage.getItem("nome");
        }

        if (email && localStorage.getItem("email")) {
            email.value = localStorage.getItem("email");
        }

        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            if (nome.value.trim() === "") {
                alert("Digite seu nome.");
                nome.focus();
                return;
            }

            if (email.value.trim() === "") {
                alert("Digite seu e-mail.");
                email.focus();
                return;
            }

            // Salva no Local Storage
            localStorage.setItem("nome", nome.value);
            localStorage.setItem("email", email.value);

            alert("Dados salvos com sucesso!");
        });
    }

});