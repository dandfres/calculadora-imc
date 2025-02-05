let weight = parseFloat(prompt("Ingresa tu peso en kg:", "70"));
let height = parseFloat(prompt("Ingresa tu estatura en metros:", "1.75"));

let result = document.getElementById("demo");
let imgDOM = document.getElementById("img");

if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    result.innerText = "Peso o altura no válidos";
    imgDOM.src = "https://i.redd.it/ux6qsyipx2l61.png";
} else {
    let imc = weight / (height ** 2);
    if (imc < 18.5) {
        result.innerText = `Tú IMC es: ${imc.toFixed(2)} y estás bajo de peso !!`;
        imgDOM.src = "images/underweight.png";
    } else if (imc >= 18.5 && imc < 24.9) {
        result.innerText = `Tú IMC es: ${imc.toFixed(2)} y estás en tu peso ideal !!`;
        imgDOM.src = "images/normal-weight.png";
    } else if (imc >= 25 && imc < 29.9) {
        result.innerText = `Tú IMC es: ${imc.toFixed(2)} y tienes sobrepeso !!`;
        imgDOM.src = "images/overweight.png";
    } else if (imc >= 30 && imc < 34.9) {
        result.innerText = `Tú IMC es: ${imc.toFixed(2)}, ESTÁS OBESO !!`;
        imgDOM.src = "images/obese.png";
    } else {
        result.innerText = `Tú IMC es: ${imc.toFixed(2)}, y estás en obesidad mórbida !!`;
        imgDOM.src = "images/morbidly-obese.png";
    }
}