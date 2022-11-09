import axios from 'axios'

const getAll = async () => {
return await axios.get('http://localhost:3001/modelo');
}

const Modelo = { getAll }

export default Modelo