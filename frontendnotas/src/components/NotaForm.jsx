import React, { useState } from 'react';
import notaService from './services/notaService';  

const NotaForm = ({ notaActual, actualizarListado }) => {
    const [nota, setNota] = useState(notaActual || {
        nombreEstudiante: '',
        activities: 0,
        parcialOne: 0,
        parcialTwo: 0,
        finalExam: 0
    });

    const handleChange = (e) => {
        setNota({
            ...nota,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (notaActual) {
            
            await notaService.actualizarNota(nota.id, nota);
        } else {
            
            await notaService.crearNota(nota);
        }

        actualizarListado();  
        setNota({
            nombreEstudiante: 0,
            activities: 0,
            parcialOne: 0,
            parcialTwo: 0,
            finalExam: 0
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre Estudiante:</label>
                <input
                    type="text"
                    name="nombreEstudiante"
                    value={nota.nombreEstudiante}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Actividades (Maximo 35):</label>
                <input
                    type="number"
                    name="actividades"
                    value={nota.actividades}
                    onChange={handleChange}
                    max="35"
                />
            </div>
            <div>
                <label>Primer Parcial (Maximo 15):</label>
                <input
                    type="number"
                    name="primerParcial"
                    value={nota.primerParcial}
                    onChange={handleChange}
                    max="15"
                />
            </div>
            <div>
                <label>Segundo Parcial (Maximo 15):</label>
                <input
                    type="number"
                    name="segundoParcial"
                    value={nota.segundoParcial}
                    onChange={handleChange}
                    max="15"
                />
            </div>
            <div>
                <label>Examen Final (Maximo 35):</label>
                <input
                    type="number"
                    name="examenFinal"
                    value={nota.examenFinal}
                    onChange={handleChange}
                    max="35"
                />
            </div>
            <button type="submit">
                {notaActual ? 'Actualizar Nota' : 'Guardar Nota'}
            </button>
        </form>
    );
};

export default NotaForm;
