/*
console.log(Object.entries(arrayDeObjetos[0]))


console.log(Object.entries(arrayDeObjetos[0].plazoFijo));


let personas = [
    {
        nombre:"maria",
        edad: 21,
    },
    {
        nombre:"carlos",
        edad:20,
    },
    {
        nombre:"juan",
        edad:23,
    }
]
let objetoPersona = personas[0];
console.log(objetoPersona)

let objetPersona = Object.entries(objetoPersona)
console.log(objetPersona)

let objetPersona1 = objetPersona[0]
console.log(objetPersona1[1]);
*/
//console.log((obtenerKey(arrayDeObjetos)))

//console.log(arrayDeObjetos[0].plazoFijo[0].estado)

//console.log(Object.keys(arrayDeObjetos[0]));

//console.log(Object.keys(arrayDeObjetos[0].plazoFijo[0]));

//console.log(arrayDeObjetos[0].plazoFijo[0])

/*
let estadoCuenta = arrayDeObjetos[0].plazoFijo[0].estado;

console.log(estadoCuenta)

if(estadoCuenta == activo){
    console.log("esta activaaa")
}

cuentasActivas(arrayDeObjetos);
*/
//console.log(arrayDeObjetos)

//console.log((Object.keys(arrayDeObjetos[0].plazoFijo[0])))

//let valor= (Object.keys(arrayDeObjetos[0].plazoFijo[0]))

//console.log(Object.keys(arrayDeObjetos[0]))

//let fecha = new Date(arrayDeObjetos[0].plazoFijo[0].fechaCreacion)

//console.log(fecha)
//import { obtenerKey } from "./funciones.js";
//import { cuentasActivas } from "./funciones.js";
import { arrayDeObjetos } from "./objetos.js";
//import { cuentasConPlazosFijosActivos } from "./funciones.js";
import { descuentoPasajes,descuentoAUnPasaje,cuentaMayor,cuentasCorrientes,cuentaTipoMoneda,cuentaActiva,descuentoImporte,incrementarMonto,estadoPasaje,ordenarPasaje/*cuentasConplazoFijoActivo*/ } from "./funciones.js";
import { pasajes } from "./objetoPasaje.js";



let activo = "activo";
let fecha = "2037-01-01"
let valor = 20;
let tipoCorriente ="corriente";
let tipoAhorro = "ahorro"

//console.log(cuentasConPlazosFijosActivos('2021-01-01'))

//console.log(arrayDeObjetos)
//console.log(arrayDeObjetos[0].plazoFijo[0].fechaCreacion)

//console.log(cuentaMayor(25))

//console.log(cuentasCorrientes(tipoAhorro))
//console.log(cuentaTipoMoneda("dolar"))
//console.log(cuentaTipoMoneda("euro"))
//console.log(cuentaTipoMoneda("peso"))
//console.log(cuentaActiva(activo,fecha))

//let fecha1 = new Date(fecha);

//console.log(fecha)
//console.log(fecha1)
//console.log(fecha1.getFullYear())

//console.log(cuentaActiva(activo,fecha))

//console.log(descuentoImporte(30))

//console.log(incrementarMonto(20));
let estado = "disponible"
//console.log(ordenarPasaje())

//console.log(pasajes.length)

//console.log(descuentoPasaje(1))

//console.log(descuentoImporte(20))

//console.log(descuentoAUnPasaje(20,0))

//console.log(descuentoPasajes(50))

console.log(descuentoAUnPasaje(50,2))