
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó(limpiar campo de interacción)
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor')
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos ++;
        limpiarCaja();
    }
 //el triple igual === validará en nuestro programa
 //  no solamente si son iguales esos valores sino tambien el mismo tipo de datos, de otra forma nos retornará "false"
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value=''; //código reducido sin utilizar la variable
   /*let valorCaja = document.querySelector('#valorUsuario'); // querySelector se utiliza con su parámetro con # para utilizarlo y buscar mediante ID el elemento HTML a modificar
    valorCaja.value= '';*/
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else {
        //si el numero generado esta incluido en la lista

        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesInciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p',`indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el nro aleatorio
    //inicializar el nro de intentos
    condicionesInciales();
    //desabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    // se vuelve a desactivar el boton reinicar juego con un atributo llamado
    // setAttribute mas los dos parámetros que son en este caso disabled y true 
    //para que neuvamente quede en disabled o inutilizado ese botón
}

condicionesInciales();