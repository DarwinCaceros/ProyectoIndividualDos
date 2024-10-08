import React, { useState, useEffect } from 'react';
import notaService from './services/notaService';
import NotaForm from './NotaForm';



const ListadoNotas = () => {
  const [notas, setNotas] = useState([]);
  const [notaEditando, setNotaEditando] = useState(null);

  useEffect(() => {
    cargarNotas();
  }, []);

  const cargarNotas = () => {
    notaService
      .obtenerNotas()
      .then((response) => setNotas(response.data))
      .catch((error) => console.error('Error al cargar notas:', error));
  };

  const agregarNota = (nuevaNota) => {
    if (notaEditando) {
      notaService
        .actualizarNota(notaEditando.id, nuevaNota)
        .then(() => {
          setNotaEditando(null);
          cargarNotas();
        })
        .catch((error) => console.error('Error al actualizar nota:', error));
    } else {
      notaService
        .crearNota(nuevaNota)
        .then(() => {
          cargarNotas();
        })
        .catch((error) => console.error('Error al agregar nota:', error));
    }
  };

  const editarNota = (nota) => {
    setNotaEditando(nota);
  };

  const eliminarNota = (id) => {
    notaService
      .eliminarNota(id)
      .then(() => {
        cargarNotas();
      })
      .catch((error) => console.error('Error al eliminar nota:', error));
  };
    const actualizarListado = async () => {
        const response = await notaService.obtenerNotas();
        setNotas(response.data);
    };

    useEffect(() =>{
        actualizarListado();
    }, []);

    

  return (
    <div>
      <h1>Ingrese los datos solicitados</h1>

      <NotaForm notaActual={notaEditando} onSubmit={agregarNota} />

      <h2>Listado de Notas</h2>
      <table>
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>Actividades</th>
            <th>Primer Parcial</th>
            <th>Segundo Parcial</th>
            <th>Examen Final</th>
            <th>Puntaje Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {notas.map((nota) => (
            <tr key={nota.id}>
              <td>{nota.nombreEstudiante}</td>
              <td>{nota.activities}</td>
              <td>{nota.parcialOne}</td>
              <td>{nota.parcialTwo}</td>
              <td>{nota.finalExam}</td>
              <td>{nota.activities + nota.parcialOne + nota.parcialTwo + nota.finalExam}</td>
              <td>
                <button onClick={() => editarNota(nota)}>Editar</button>
                <button onClick={() => eliminarNota(nota.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoNotas;
