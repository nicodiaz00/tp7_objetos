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
import { categoriaYDisponibilidad,descuentoPasajes,descuentoAUnPasaje,cuentaMayor,cuentasCorrientes,cuentaTipoMoneda,cuentaActiva,descuentoImporte,incrementarMonto,estadoPasaje,ordenarPasaje/*cuentasConplazoFijoActivo*/ } from "./funciones.js";
import { pasajes } from "./objetoPasaje.js";
//PARTE BUTACAS
import { distribucionButaca,butacasLibres,butacasOcupadas } from "./funciones.js";
//PARTE  VEHICULOS
import { marcaYModelo,anioFabricacion,autoSegunKilometraje,ingresarAuto } from "./funciones.js";
//PARTE AULAS
import { aulasDisponibles } from "./funciones.js";
//PARTE PROPIEDADES
import { propiedadCasa,cambiarEstado,modificarImporte,agregarMoneda,propiedadAlquilada,comisionPropiedades } from "./funciones.js";
import { propiedad } from "./objetoPropiedades.js";
//PARTE COLECTIVOS
import { lineaDisponible,valorButacas } from "./funciones.js";

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
let categoria1 ="primera";
let disponibilidad = "disponible"
let estadoOcupado = "alquilado"
//console.log(descuentoAUnPasaje(50,2))
//console.log(categoriaYDisponibilidad(categoria1,disponibilidad))
//console.log(butacasLibres("libre"))
//console.log(butacasOcupadas("ocupada"))
//console.log(distribucionButaca("ocupada"))
//console.log(marcaYModelo("Ford", "Focus"))
//console.log(anioFabricacion(2020))
//console.log(autoSegunKilometraje(10000))
//console.log(ingresarAuto())

//console.log(aulasDisponibles(30));

let tipo ="casa";
let estadopropiedad ="alquilado"
let condicionVenta = true;
let condicionAlquiler = false;
let estadoPropiedad1 = "disponible";
let importe= 99999;

//console.log(propiedadCasa(tipo))
//console.log(cambiarEstado(estadopropiedad));

//console.log(modificarImporte(importe,estadoPropiedad1))

//console.log(agregarMoneda())

//console.log(propiedadAlquilada())

//let fecha1 = new Date(propiedad[0].fechaAlquiler)

//console.log(fecha1.getMonth())

//console.log(comisionPropiedades(4,20))

console.log(lineaDisponible())

console.log(valorButacas())

