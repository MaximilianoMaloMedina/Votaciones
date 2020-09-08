/**
 * MAIN
 */

const encuesta= new Pregunta();
const titulo= document.getElementById('tituloModal');
const divResultados= document.getElementById('resultados');

function eventListener() {
    document.getElementById('favorID').addEventListener('click', sumaFavor);
    document.getElementById('contraID').addEventListener('click', sumaContra);
    document.getElementById('abstenerID').addEventListener('click', sumaAbstencion);

    document.getElementById('btnParar').addEventListener('click', renderizarRespuesta);
}

eventListener();

function sumaFavor() {
    encuesta.favor++;
    console.log(encuesta.favor);
}

function sumaContra() {
    encuesta.contra++;
    console.log(encuesta.contra);
}

function sumaAbstencion() {
    encuesta.abstener++;
    console.log(encuesta.abstener);
}

function renderizarRespuesta() {
    let resultados= encuesta.agregarResultados(encuesta.favor, encuesta.contra, encuesta.abstener);

    divResultados.appendChild(resultados);
}