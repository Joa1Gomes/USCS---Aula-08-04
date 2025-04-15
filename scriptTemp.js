function convertCelsius() {

    var temp = parseFloat(document.getElementById("temp").value);

    var res = (temp - 32) / 1.8

    if (isNaN(res)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        document.getElementById("resultado").innerHTML = "A conversão para Celcius: " + res;
    }
}

function convertFaren() {

    var temp = parseFloat(document.getElementById("temp").value);

    var res = temp * 1.8 + 32

    if (isNaN(res)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        document.getElementById("resultado").innerHTML = "A conversão para Farenheirt: " + res;
    }
}