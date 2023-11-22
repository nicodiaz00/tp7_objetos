
export const arrayDeObjetos = [
    {
        tipo :"corriente",
        importe: 200,
        tipoMoneda: "peso",
        plazoFijo: [{
            estado:"activo",
            importe:50,
            fechaCreacion:"2019-01-02",
            plazo: 40,
        }]

    },
    {
        tipo: "corriente", // "ahorro"
        importe: 700,
        tipoMoneda: "peso", // "euro", // "dolar",
        plazoFijo: [{
            estado: "activo", // "inactivo"
            importe: 100,
            fechaCreacion: "2020-01-01",
            plazo: 30, // en dias
        }]
    },
    {
        tipo:"corriente",
        importe:1000,
        tipoMoneda:"dolar",
        plazoFijo:[{
            estado:"inactivo",
            importe:300,
            fechaCreacion:"2021-01-01",
            plazo:30,
        }]
    },
    {
        tipo:"ahorro",
        importe:10000,
        tipoMoneda:"euro",
        plazoFijo:[{
            estado:"inactivo",
            importe:55000,
            fechaCreacion:"2022-02-01",
            plazo:40,
        }]
    }

]


