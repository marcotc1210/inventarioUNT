import { React, useState, useEffect } from 'react'
import TitlePage from '../components/TitlePage'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = "https://stunning-barnacle-q7pjqwj7wvw734j6q-8000.app.github.dev/api";


const System = () => {

  // const tiposData1 = [
  //   { 'descripcion': 'router' },
  //   { 'descripcion': 'ap'}
  // ]

  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const [tiposData, setTiposData] = useState([]); // Estado para los datos de usuarios

  useEffect(() => {
    getAllTipos();
  }, []);

  const getAllTipos = async () => {
    try {
      const response = await axios.get(`${endpoint}/tipos`);
      setTiposData(response.data);
      //console.log(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }

  const store = async (e) => {
    e.preventDefault();
    await axios.post(`${endpoint}/tipo`, {
      descripcion: descripcion
    }
    );
    navigate('/system');
  }

  return (
    <div>
      <TitlePage title={'Ajustes del sistema'} />

      <div className='form'>
        <form onSubmit={store}>
          <label htmlFor="tipo"> Tipo </label>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type='text'
            className='py-2 px-4 border-2 border-gray-400 rounded-lg'
          />

          <button type='submit' className='px-4 py-2 bg-blue-700'> Registrar </button>
        </form>

      </div>

      {/* Show tipos */}
      {(tiposData.length > 0) ? (
        <div>
          <ul>
            {tiposData.map((tipo) => (
              <li key={tipo.id}>
                {tipo.descripcion}
              </li>
            ))}
          </ul>
        </div>
      ) : "no hay registros"
      }

    </div>
  )
}

export default System