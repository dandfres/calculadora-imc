let wight = parseFloat(prompt("Enter your weight in kg:", "70"));
let height = parseFloat(prompt("Enter your height in meters:", "1.75"));

let imc = wight / (height ** 2);
let result = document.getElementById("demo");
let imgDOM = document.getElementById("img");
// alert(`Your IMC is ${imc.toFixed(2)}`);
if (imc < 18.5) {
    result.innerText = `Tú IMC es: ${imc.toFixed(2)} y estás bajo de peso !!`;
    imgDOM.src = "images/underweight.png";
} else if (imc >= 18.5 && imc < 24.9) {
    result.innerText = `Tú IMC es: ${imc.toFixed(2)} y estás en tu peso ideal !!`;
    imgDOM.src = "images/normal-weight.png";
} else if (imc >= 25 && imc < 29.9) {
    result.innerText = `Tú IMC es: ${imc.toFixed(2)} y tienes sobrepeso !!`;
    imgDOM.src = "images/overweight.png";
} else {
    result.innerText = `Tú IMC es: ${imc.toFixed(2)}, ESTÁS OBESO !!`;
    imgDOM.src = "images/obese.png";
}