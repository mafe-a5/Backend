class Modelo {
    constructor(modelo) {
        if (!modelo) return
        this.id = modelo.id,
        this.Nombre = modelo.Nombre,
        this.año = modelo.año,
        this.CodigoMarca = modelo.CodigoMarca,
        this.NombrePais = modelo.NombrePais
    }
}

export default Modelo
