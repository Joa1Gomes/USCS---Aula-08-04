function convertDolar() {

    var amount = parseFloat(document.getElementById("temp").value);

    var res = amount * 6

    if (isNaN(res)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        document.getElementById("resultado").innerHTML = "A conversão para Dolar: $" + res;
    }
}

function convertLibra() {

    var amount = parseFloat(document.getElementById("temp").value);

    var res = amount *  6.68

    if (isNaN(res)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        document.getElementById("resultado").innerHTML = "A conversão para Libra: L$" + res;
    }
}

function convertEuro() {

    var amount = parseFloat(document.getElementById("temp").value);

    var res = amount * 7.73

    if (isNaN(res)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        document.getElementById("resultado").innerHTML = "A conversão para Euro: E$" + res;
    }
}