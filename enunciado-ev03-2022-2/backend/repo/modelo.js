const modelo = [
    {"id": 1,"Nombre": "Tiida", "año": 2022, "CodigoMarca": "1", "NombrePais": "Japón"},
    {"id": 2,"Nombre": "Sentra", "año": 2022, "CodigoMarca": "1", "NombrePais": "Japón"},
    {"id": 3,"Nombre": "Note", "año": 2020, "CodigoMarca": "1", "NombrePais": "Japón"},
    {"id": 4,"Nombre": "Camaro RS", "año": 2015, "CodigoMarca": "2", "NombrePais": "Estados Unidos"},
    {"id": 5,"Nombre": "Cruze", "año": 2022, "CodigoMarca": "2", "NombrePais": "Estados Unidos"},
    {"id": 6,"Nombre": "i3", "año": 2021, "CodigoMarca": "3", "NombrePais": "Alemania"},
    {"id": 7,"Nombre": "i4", "año": 2021, "CodigoMarca": "3", "NombrePais": "Alemania"},
    {"id": 8,"Nombre": "z4", "año": 2022, "CodigoMarca": "3", "NombrePais": "Alemania"}
]

const getAll = () => {
    return Modelo
}

const insert = (ndata) => {
    Modelo.push(ndata)
}

const findOne = (id) => {
    return Modelo.find( x => x.id === id )
}

const Modelo = { getAll, insert, findOne }

export default Modelo