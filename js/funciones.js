import { arrayDeObjetos } from "./objetos.js";
import { pasajes } from "./objetoPasaje.js";

/*
a) Realiza una función que devuelva todos las cuentas con plazos fijos activos a partir de una
fecha dada.
*/
// let array = arrayDeObjetos;
export function obtenerKey(array){
    for(let i = 0; i < array.length; i++){
        return (Object.keys(array[i]));
    }
}
/*
export function cuentasConPlazosFijosActivos(fecha){
    const cuentasActivas = [];
    for(let i = 0; i < arrayDeObjetos.length; i++){
        const cuenta=arrayDeObjetos[i];
        if(cuenta.plazoFijo && cuenta.plazoFijo.length > 0){
            for(let x=0; x < cuenta.plazoFijo.length; x ++ ){
                const plazo = cuenta.plazoFijo[x];

                if(plazo.estado ==='activo' && new Date(plazo.fechaCreacion )<= new Date(fecha)){
                    cuentasActivas.push(cuenta)
                    break;
                }
            } 
        }
    }
    return cuentasActivas;

}
*/
/*
export function cuentasConplazoFijoActivo(valor,fecha){
    let cuentasActivas = [];
    for(let i = 0; i < arrayDeObjetos.length; i++){
        let cuentaObjeto = arrayDeObjetos[i];
        if(cuentaObjeto.plazoFijo[0].estado === valor && cuentaObjeto.plazoFijo[0].fechaCreacion >= fecha){
            cuentasActivas.push(cuentaObjeto)
        }
            
        }
        return cuentasActivas;
    }
    */

    export function cuentaActiva(estado, fecha){
        let cuentasActivas =[];
        let año = new Date(fecha)
        for(let i = 0; i < arrayDeObjetos.length; i ++){
            let cuentaObjeto = arrayDeObjetos[i];
            let añoFechaCreacion = new Date(cuentaObjeto.plazoFijo[0].fechaCreacion)
            if(cuentaObjeto.plazoFijo[0].estado === estado && añoFechaCreacion.getFullYear() >= año.getFullYear()){
                cuentasActivas.push(cuentaObjeto)
            }
        }
        return cuentasActivas;
    }
    



/*
b) Realiza una función que devuelva todos las cuentas con plazos fijos con plazo mayor a 30
días.
*/

export function cuentaMayor(valor){
    //console.log("probando "+ valor)
    let cuentasMayores = [];
    for(let i = 0; i < arrayDeObjetos.length; i ++){
        let cuentaObjeto =arrayDeObjetos[i]
        if(cuentaObjeto.plazoFijo[0].plazo > valor){
            cuentasMayores.push(cuentaObjeto)
        }
    }
    return cuentasMayores
    

}

/*
c) Realiza una función que devuelva todos las cuentas del tipo corriente.
*/

export function cuentasCorrientes(valor){
    let arrayCuentasCorrientes = [];
    for(let i = 0; i < arrayDeObjetos.length; i ++){
        let objeto = arrayDeObjetos[i];
        if(objeto.tipo === valor){
            arrayCuentasCorrientes.push(objeto)
        }
    }
    return arrayCuentasCorrientes;
}

//Realiza una función que devuelva todos las cuentas de un tipo de moneda especificado.

export function cuentaTipoMoneda(valor){
    let cuentas = [];
    for(let i = 0; i < arrayDeObjetos.length; i ++){
        let cuentaObjeto = arrayDeObjetos[i];
        if(cuentaObjeto.tipoMoneda === valor){
            cuentas.push(cuentaObjeto)
        }
    }
    return cuentas;
}

/*
Realiza una función que permita descontar un importe dado (mantenimiento de cuenta) a
todas las cuentas en la lista.
*/

export function descuentoImporte(monto){
    let importeDeCuenta;
    let cuentas = []
    for(let i = 0; i < arrayDeObjetos.length; i ++){
        let objetoArray = arrayDeObjetos[i];
        importeDeCuenta = objetoArray.importe - monto;
        objetoArray.importe = importeDeCuenta;
        cuentas.push(objetoArray)
        
    }
    return cuentas
}

/*
Realiza una función que permita incrementar un porcentaje dado (por veneficios
exclusivos) a todas las cuentas con plazo fijo con importe mayor a 500000.
*/

/*export function incrementarMonto(porcentaje){
    let cuentasExclusivas =[]
    for(let i = 0; i < arrayDeObjetos.length; i++){
        let cuentaObjeto = arrayDeObjetos[i];
        if(cuentaObjeto.plazoFijo[0].importe > 50000){
            cuentasExclusivas.push(cuentaObjeto)
        }
    }
    let cuentas = [];
    for(let x = 0; x < cuentasExclusivas.length; x ++){
        let cuentaobjeto1 = cuentasExclusivas[x];
        let porcentajeDeCuenta = cuentaobjeto1.plazoFijo[0].importe
        let calculo = (porcentajeDeCuenta * porcentaje) / 100;
        cuentaobjeto1.plazoFijo[0].importe += calculo;
        cuentas.push(cuentaobjeto1)
    }
    return cuentas;
    
}
*/
export function incrementarMonto(porcentaje){
    let cuentasExclusivas = [];
    for(let i = 0; i < arrayDeObjetos.length; i ++){
        let cuentaObjeto = arrayDeObjetos[i];
        let calculoPorcentaje = (cuentaObjeto.plazoFijo[0].importe * porcentaje) / 100;

        if(cuentaObjeto.plazoFijo[0].importe > 50000){
            cuentaObjeto.plazoFijo[0].importe += calculoPorcentaje;
            cuentasExclusivas.push(cuentaObjeto)
            
        }
    }
    return cuentasExclusivas;
}

/*
Realiza una función que permita cargar una nueva cuenta al final de la lista.
*/

export function cargarCuenta(){
    arrayDeObjetos;
    let nuevaCuenta = {
        tipo: "", // "ahorro"
        importe: 0,
        tipoMoneda: "", // "euro", // "dolar",
        plazoFijo: [{
            estado: "", // "inactivo"
            importe: 0,
            fechaCreacion: "",
            plazo: 0, // en dias
        }]
    }
    nuevaCuenta.tipo = prompt("ingrese el tipo de cuenta corriente o ahorro  ");
    nuevaCuenta.importe = Number(prompt("ingrese el monto"));
    nuevaCuenta.tipoMoneda = Number(prompt("Ingrese el tipo moneda peso, euro, dolar" ));
    nuevaCuenta.plazoFijo[0].estado = prompt ("Ingrese el estado activo'o inactivo")
    nuevaCuenta.plazoFijo[0].importe = Number(prompt("Ingrese el importe del plazo fijo"));
    nuevaCuenta.plazoFijo[0].fechaCreacion = prompt
    

}

export function estadoPasaje(estado1){
    let pasajes1 = [];
    for(let i= 0; i < pasajes.length; i++){
        let pasaje = pasajes[i];
        if( pasaje.estado=== estado1){
            pasajes1.push(pasaje)
        }
    }
    return pasajes1
}

/*
Realiza una función que ordene los pasajes por precio de mayor a menor.
*/

/*export function pasajeMayorAmenor(){
    let mayor;
    let arrayOrdenado = [];
    for(let i = 0; i < pasajes.length; i ++){
        let objetoPasaje = pasajes[i];
        mayor = objetoPasaje.precio;
        for(let x = 0; x < pasajes.length; x++){
            let pasajeComparacion = pasajes[x]

            if(mayor > pasajeComparacion.precio){
                mayor = mayor
            }else{
                mayor = pasajeComparacion.precio
            }   
            arrayOrdenado.push(mayor)
        }
        
    }
    return arrayOrdenado
}
*/

export function ordenarPasaje(){
 let len = pasajes.length
 for(let i = 0; i < len-1; i++){
    for(let x=0; x < len-1-i ;x++){
        if(pasajes[x].precio < pasajes[x+1].precio){
            let temp = pasajes[x];
            pasajes[x] = pasajes[x+1];
            pasajes[x+1] = temp;
        }
    }
 }
 return pasajes
}

/*
Realiza una función que devuelva todos los pasajes con descuento mayor a un valor dado.
*/
export function descuentoPasaje(valor){
    let pasajesConDescuento =[]
    

    for(let i = 0; i < pasajes.length; i ++){
        let pasaje = pasajes[i];
        if(pasaje.descuento > valor){
            pasajesConDescuento.push(pasaje)
        }
    }
    return pasajesConDescuento
}

/*
Realiza una función que permita agregar un descuento a un pasaje y aplicarlo al importe.
*/
//aplica el descuentoa  todos los pasajes:
export function descuentoPasajes(descuento){
    for(let i = 0; i < pasajes.length; i ++){
        let varPasaje = pasajes[i];
        let aplicoDescuento= (varPasaje.precio * descuento) / 100;
        varPasaje.precio = aplicoDescuento;
    }
    return pasajes
}

//aplica descuento a un solo pasaje:

export function descuentoAUnPasaje(monto,posicion){
    let pasaje = pasajes[posicion]
    let descuento = (pasaje.precio * monto) / 100;
    pasaje.precio = descuento;
    pasajes[posicion] = pasaje

    return pasajes
}

/*
Realiza una función que permita buscar pasajes de una cierta categoría y que estén
disponibles.
*/






