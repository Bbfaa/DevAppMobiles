function CalculerIMC() {
    const poids = document.getElementById('poids');
    const taille = document.getElementById('taille');

    const imc = poids.value / Math.pow(taille.value, 2);

    let message = 'Vous etes en état ';


    if (imc < 16.5) {
        message += 'de dénutrition';
    }
    else if (imc >= 16.5 && imc < 18.5) {
        message += 'de maigreur';
    } 
    else if (imc >= 18.5 && imc < 25) {
        message = "Vous avez un poids normal";
    }
    else if(imc >= 25 && imc < 30){
        message += 'de surpoids';
    }
    else if (imc >= 30 && imc < 35) {
        message += "d'obésité modérée";
    }
    else if (imc >= 35 && imc < 40) {
        message += "d'obésité sévère";
    }
    else {
        message += "d'obésité massive";
    }
    const interpretation = document.getElementById('interprétation');
    interpretation.innerHTML = `Votre IMC est : ${imc.toFixed(2)}<hr>${message}`;
    interpretation.parentNode.hidden = false;
}
