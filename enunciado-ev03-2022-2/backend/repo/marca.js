const marca = [
    {"Código": 1, "Nombre": "Nissan", "País": "Japón"},
    {"Código": 2, "Nombre": "Chevrolet", "País": "Estados Unidos"},
    {"Código": 3, "Nombre": "BMW", "País": "Alemania"},
]

const getAll = () => {
    return marca
}

const insert = (ndata) => {
    marca.push(ndata)
}

const findOne = (id) => {
    return marca.find( x => x.Código === id )
}

const Marca = { getAll, insert, findOne }

export default Marca