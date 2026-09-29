import { useState, useEffect } from "react";
import '../css/formulario.css'

const Formulario = ({
    modalVisible,
    setModalVisible
}) => {
    const [paciente, setPaciente] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    /**
     * Create 5 new states
     *  -nombrePropietario
     *  -correo
     *  -telefono
     *  -fechaAlta
     *  -sintomas (descripcion del problema)
     * Create 5 new inputs with state
     * Type inputs
     *  -text
     *  -tel
     *  -email
     *  -date
     * Inputs
     *  -input
     *  -textarea (contenido con mucho texto)
     */

    const handleCita= (e) => {
        e.preventDefault();
    }
    return (
        <div className="formulario-contenido">
            <h2 className="formulario-titulo"> Nueva 
                <span className="formulario-titulo-bold"> Cita </span>
            </h2>
            <button
            className="formulario-btn-cancelar"
            onClick={() => setModalVisible(false)}
            >
                <span className="formulario-btn-texto-cancelar">Cancelar</span>
            </button>

            <form onSubmit={(e) => handleCita(e)}>
                <div className="formulario-campo">  
                    <label
                        htmlFor="paciente"
                        className="formulario-label"
                    >Nombre Paciente</label>
                    <input
                        id="paciente"
                        type="text"
                        className="formulario-input"
                        placeholder="Perrito Poppy"
                        value={paciente}
                        onChange={(e) => setPaciente(e.target.value)}
                    />
                <div/>
                <div className="formulario-campo">
                    <label
                        htmlFor="nombrePropietario"
                        className="formulario-label"
                    >Nombre Propietario</label>
                    <input
                        id="nombrePropietario"
                        type="text"
                        className="formulario-input"
                        placeholder="Carlos Téllez"
                        value={nombrePropietario}
                        onChange={(e) => setNombrePropietario(e.target.value)}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                        htmlFor="correo"
                        className="formulario-label"
                    >Correo</label>
                    <input
                        id="correo"
                        type="email"
                        className="formulario-input"
                        placeholder="usuario@gmail.com"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                        htmlFor="telefono"
                        className="formulario-label"
                    >Telefono </label>
                    <input
                        id="telefono"
                        type="tel"
                        className="formulario-input"
                        placeholder="4491234567"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                        htmlFor="fechaAlta"
                        className="formulario-label"
                    >Fecha Alta</label>
                    <input
                        id="fechaAlta"
                        type="date"
                        className="formulario-input"
                        placeholder="29/09/2026"
                        value={fechaAlta}
                        onChange={(e) => setFechaAlta(e.target.value)}
                    />
                </div>
                <div className="formulario-campo">
                    <label
                        htmlFor="sintomas"
                        className="formulario-label"
                    >Sintomas </label>
                    <textarea
                        id="sintomas"
                        className="formulario-input"
                        placeholder="Describir sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                        rows={4}
                    />
                </div>
                </div>

                <button
                type="submit"
                className="formulario-btn-submit"
                > Agregar Paciente</button>
            </form>
        </div>
    );
};

export default Formulario;