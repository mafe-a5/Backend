import axios from 'axios'

const getAll = async () => {
return await axios.get('http://localhost:3001/marca');
}

const Marca = { getAll }

export default Marca