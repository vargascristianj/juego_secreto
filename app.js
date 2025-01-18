let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log("Intentos: "+intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //No acertó el número
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
    }
    intentos++;
    limpiarCaja();
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    //Consulta si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se han sorteado todos los números');
        document.querySelector('#intentar').setAttribute('disabled', 'true');
    } else {
        //Si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

function colocarCondicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Iniciar el número de intentos
    colocarCondicionesIniciales();
    //Deshabilitar botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

colocarCondicionesIniciales();

/*Realizo el desafío de los arreglos

let listaGenerica = [1, 4, 567, 900, 903];
console.log('ListaGenérica: '+listaGenerica);

let lenguajesDeProgramacion = ['Java', 'Ruby', 'GoLang']
console.log('Los lenguajes de programación iniciales son: '+lenguajesDeProgramacion);
lenguajesDeProgramacion.push('Javascript', 'C', 'C++', 'Kotlin', 'Python');
console.log('Los lenguajes de programación modificados son: '+lenguajesDeProgramacion);

console.log("Muestro los lenguajes en orden directo")
mostrarLenguajes();
console.log("Muestro los lenguajes en orden inverso")
mostrarLenguajesInverso();
console.log(`Calculo el promedio de arreglo generico: ${calcularPromedioLista(listaGenerica)}`);
console.log(`Tipo de dato de lista generica: ${typeof(listaGenerica[0])}`);
console.log("Realizo el cálculo de mayor y menor");
calcularMayorMenor(listaGenerica);

function mostrarLenguajes(){
    let iteracionLenguaje = 0;
    while(iteracionLenguaje < lenguajesDeProgramacion.length){
        console.log(`Posición ${iteracionLenguaje}. Lenguaje: ${lenguajesDeProgramacion[iteracionLenguaje]}`);
        iteracionLenguaje++;
    }
}

function mostrarLenguajesInverso(){
    let iteracionLenguaje = lenguajesDeProgramacion.length;
    while(iteracionLenguaje > 0){
        console.log(`Posición ${iteracionLenguaje-1}. Lenguaje: ${lenguajesDeProgramacion[iteracionLenguaje-1]}`);
        iteracionLenguaje--;
    }
}

function calcularPromedioLista(arreglo){
    let iteracion = 0;
    let suma = 0;
    let promedio = 0;
    while(iteracion < arreglo.length){
        suma = suma + arreglo[iteracion];
        iteracion++;
    }
    promedio = suma/arreglo.length;
    return promedio;
}

function calcularMayorMenor(arreglo){
    console.log(`El mayor número del arreglo es: ${Math.max(...arreglo)}`);
    console.log(`El menos número del arreglo es: ${Math.min(...arreglo)}`);
    return;
}
    */