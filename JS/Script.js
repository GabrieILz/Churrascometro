// Carne - 400g por pessoa (se --> + de 6 horas - 650)
// Cerveja - 1200ml por pessoa (se --> + de 6 horas - 2000ml)
// Refrigerante/Agua - 1000ml por pessoa (se --> + de 6 horas - 1500ml)
 
//crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = documet.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCarne = cervejaPP(duracao) * adultos;
    let qtdTotalCarne = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    console.log(qtdTotalCarne); 

    resultado.innerHTML = `<p>${qtdTotalCarne}g de Carne</p>`
    resultado.innerHTML = `<p>${qtdTotalCerveja}ml de Carne</p>`
    resultado.innerHTML = `<p>${qtdTotalBebidas}ml de Carne</p>`

}

function carnePP(duracao){

    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}