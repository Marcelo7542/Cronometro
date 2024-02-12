
const tempo = document.getElementById("numero");
let inicioT = 0;
let cronometro = null;
let ligado = false;
let tempoDe = 0;

function iniciar(){
    if(!ligado){
        inicioT = Date.now() - tempoDe
        cronometro = setInterval(atualizar, 10)
        ligado = true
    }
}
function parar(){
    if(ligado){
        clearInterval(cronometro)
        tempoDe = Date.now() - inicioT
        ligado = false
    }
}
function reiniciar(){
    tempo.textContent = ('00:00:00')
    inicioT = 0;
    clearInterval(cronometro)
    ligado = false;
    tempoDe = 0;
}
function atualizar(){
    const tempoAtual = Date.now()
    tempoDe = tempoAtual - inicioT
    let horas = Math.floor(tempoDe /(1000*60*60))
    let minutos = Math.floor(tempoDe / (1000 * 60) % 60);
    let segundos = Math.floor(tempoDe / (1000) % 60);
    let milisegundos = Math.floor((tempoDe % 1000) / 10);
    horas = String(horas).padStart(2, "0")
    minutos = String(minutos).padStart(2, "0");
    segundos = String(segundos).padStart(2, "0");
    milisegundos = String(milisegundos).padStart(2, "0");
    tempo.textContent = (`${horas}:${minutos}:${segundos}:${milisegundos}`);
}
