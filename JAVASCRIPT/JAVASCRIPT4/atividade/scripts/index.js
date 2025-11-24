    var campo = document.getElementById("campoTexto");

    campo.addEventListener("focus", function () {
        campo.style.backgroundColor = "yellow";
    });

    campo.addEventListener("blur", function () {
        var valor = campo.value.trim();

        if (valor.length < 3) {
            campo.style.backgroundColor = "red";  
        } else {
            campo.style.backgroundColor = "green"; 
        }
    })