import { arrayDeObjetos } from "./objetos.js";
import { pasajes } from "./objetoPasaje.js";
import { butacas } from "./objetoButacas.js";
import { autos } from "./vehiculos.js";
import { arrayAulas } from "./aulas.js";
import { propiedad } from "./objetoPropiedades.js";

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

export function categoriaYDisponibilidad(valorCategoria, valorEstado){
    let largoArray = pasajes.length
    let pasajesDisponibles =[];
    for(let i = 0; i < largoArray; i++){
        let objetoPasaje =pasajes[i];
        if(objetoPasaje.categoria == valorCategoria && objetoPasaje.estado == valorEstado){
            pasajesDisponibles.push(objetoPasaje);
        }

    }
    return pasajesDisponibles;
}

// TP PARTE BUTACAS

/*
a) Realiza una función que devuelva las butacas libres.
*/

export function butacasLibres(valor){
    let butacasLibres =[];
    
    for(let i = 0; i < butacas.length; i++){
        let objetoButaca = butacas[i];
        if(objetoButaca.estado == valor){
            butacasLibres.push(objetoButaca)
        }
    }
    return butacasLibres
}

/*
Realiza una función que devuelva la cantidad de butacas ocupadas.
*/

export function butacasOcupadas(estado){
    let butacasOcupadas = [];
    for(let i=0; i < butacas.length; i++){
        let objetoButaca = butacas[i];
        if(objetoButaca.estado == estado){
            butacasOcupadas.push(objetoButaca)
        }
    }
    return butacasOcupadas;
}

/*
Realiza una función que indique la distribución de las butacas ocupadas, es decir, en caso
que halla la misma cantidad de butacas en cada ubicación, la distribución será
“homogénea”, de lo contrario será según donde se encuentre mayor cantidad.
*/
export function distribucionButaca(estado){
    let distribcionIzq = 0;
    let distribucionCentro= 0;
    let distribucionDerecha =0;
    let butacasOcupadas =[]
                
    for(let i = 0; i < butacas.length; i++){
        let objetoButaca = butacas[i];
        if(objetoButaca.estado == estado){
            butacasOcupadas.push[objetoButaca]
        }
    }
    for(let x = 0; x < butacasOcupadas.length;){
        let ubicacionButaca = butacasOcupadas[x]
        if( ubicacionButaca == "izquierda"){
            distribcionIzq += 1;
        }else if(ubicacionButaca == "derecha"){
            distribucionDerecha +=1;
        }else{
            distribucionCentro += 1;
        }
    }
    if(distribcionIzq === distribucionDerecha && distribcionIzq=== distribucionCentro){
        return "distribucion homogenea"
    }else if(distribcionIzq > distribucionDerecha || distribcionIzq >= distribucionCentro){
        return "distribucion a la izquierda";
    }else if(distribucionDerecha > distribcionIzq || distribucionDerecha >= distribucionCentro){
        return "distrubcion a la derecha"
    }else{
        return "distribucion centro"
    }

}

//Realiza una función que devuelva los autos dado su marca y modelo.

export function marcaYModelo(valorMarca, valorModelo){
    let autosMyM =[];
    for(let i =0; i < autos.length; i++){
        let objetoAuto= autos[i];
        if(objetoAuto.marca === valorMarca && objetoAuto.modelo === valorModelo){
            autosMyM.push(objetoAuto)
        }
    }
    if(autosMyM.length===0){
        return "Ningun vehiculo coincide con los valores "
    }else{
        return autosMyM
    }
    
}

//Realiza una función que devuelva los autos según un año de fabricación.

export function anioFabricacion(valorAnio){
    let autosSegunAnio =[];
    for(let i=0; i < autos.length; i++){
        let auto = autos[i];
        if(auto.anio == valorAnio){
            autosSegunAnio.push(auto)
        }
    }
    return autosSegunAnio
}
//Realiza una función que devuelva los autos según un kilometraje.
export function autoSegunKilometraje(valorKilometraje){
    let arrayautosKm = [];
    for(let i=0; i < autos.length; i++){
        let autoKm = autos[i];
        if(autoKm.km >= valorKilometraje){
            arrayautosKm.push(autoKm)
        }
    }
    return arrayautosKm
}

//Realiza una función que permita ingresar nuevos vehículos.

export function ingresarAuto(){
    let variableCorte;
     variableCorte = Number(prompt("Ingrese 1 para comenzar a agregar vehiculos"));
    let auto={
        marca: "",
        modelo: "",
        color: "",
        anio: 0,
        precio: 0,
        km: 0,
        estado: "", // "vendido"
    }
    
    while(variableCorte != 0){
        auto.marca = prompt("Ingrese la marca");
        auto.modelo = prompt("ingrese modelo");
        auto.color=prompt("ingrese color");
        auto.anio=Number(prompt("Ingrese el año del vehiculo"));
        auto.precio=Number(prompt("Ingrese valor del vehiculo"));
        auto.km=Number(prompt("Ingrese Km"));
        auto.estado=prompt("Ingrese el estado: vendido o disponible");
        autos.push(auto);
        variableCorte = Number(prompt("Ingrese 1 para seguir agregando vehiculos o 0 para finalizar"));
    }
    
    return autos;
    
}

//

//PARTE AULAS
//a) Realiza una función que dada un número de alumnos devuelva las aulas disponibles y en que rango horario.

export function aulasDisponibles(numeroAlumnos){
    let aulasDisponibles =[];
    let estadoAula =[];
    let horayAula=[];
    for(let i=0; i < arrayAulas.length;i++){
        let aula=arrayAulas[i];
        if(aula.capacidad >= numeroAlumnos){
            aulasDisponibles.push(aula);
        }
    }
    for(let x= 0; x< aulasDisponibles.length; x++){
        let aulas = aulasDisponibles[x];
        let horariodisponible = aulas.horarios
        for(let z = 0; z< horariodisponible.length;z++){
            let aulaDisponible = horariodisponible[z]
            if(aulaDisponible.estado == "disponible"){
                estadoAula.push(aulas)
                break;
            }
        }
    }
        for(let y= 0; y< estadoAula.length; y++){
            
            let aula = estadoAula[y]
            let horario = aula.horarios
            for(let a = 0; a < horario.length; a++){
                let valor = horario[a];
                let valorhora =valor.hora
                
                if(valor.estado == "disponible"){
                    
                    
                    horayAula.push(aula.nombre +" "+ valorhora)
                    
                }
            }
        }
    return horayAula   
    }
    
    //PARTE PROPIEDADES:
    //Realiza una función que liste todas las propiedades tipo casa (devuelve la lista).

    export function propiedadCasa(valor){
        let arrayCasa=[];
        for(let i= 0; i < propiedad.length; i++){
            let objetoPropiedad= propiedad[i];
            if(objetoPropiedad.tipo == valor){
                arrayCasa[arrayCasa.length]=objetoPropiedad
            }
        }
        return arrayCasa;
    }

    // Realiza una función permita modificar su estado de venta o alquiler.

    export function cambiarEstado(valorEstado){
        for(let i = 0; i < propiedad.length; i++){
            let objetoPropiedad= propiedad[i];
            if(objetoPropiedad.condicion.venta == false){
                if(objetoPropiedad.estado == "disponible"){
                    objetoPropiedad.estado = valorEstado;
                }
            }
        }
        return propiedad;
    }

    //Realiza una función que permita modificar su importe.

    export function modificarImporte(valorImporte, valorEstado){
        for(let i = 0; i < propiedad.length; i ++){
            let objetoPropiedad= propiedad[i]
            if(objetoPropiedad.estado == valorEstado){
                objetoPropiedad.importe = valorImporte
            }

        }
        return propiedad;
    }

    //Realiza una función que permita agregar tipo de moneda como dato a todas las propiedades y le asigne un valor por defecto.

    export function agregarMoneda(){
        
        for(let i= 0; i < propiedad.length; i++){
            let objetoPropiedad = propiedad[i];
            objetoPropiedad.moneda ="pesos";
        }
        return propiedad;
    }

    //Realiza una función que calcule la suma de los valores de las propiedades alquiladas.

    export function propiedadAlquilada(){
        let sumaTotal=0;
        for(let i = 0; i < propiedad.length; i++){
            let variablePropiedad = propiedad[i]
            if(variablePropiedad.estado == "alquilado" && variablePropiedad.condicion.alquiler === true){
                
                    console.log(variablePropiedad.estado)
                    sumaTotal += variablePropiedad.importe;
                
                    
                
                
                
            }
        }
        return sumaTotal;
    }

    // Realiza una función que calcule la ganancia de comisión de las propiedades vendidas en un cierto mes.

    export function comisionPropiedades(mes,comision){
        let comisionTotal= 0;
        let valorCasas =0;
        
        
        for(let i = 0; i < propiedad.length; i++){
            let propiedadVendida = propiedad[i]
            let mesVenta = new Date(propiedadVendida.fechaAlquiler)
            if(mesVenta.getMonth()+1 == mes && propiedadVendida.condicion.venta == true && propiedadVendida.estado =="vendido"){
                valorCasas += propiedadVendida.importe
                
            }
            
        }
        comisionTotal = (valorCasas * comision) /100;
            
        return comisionTotal;
    }



