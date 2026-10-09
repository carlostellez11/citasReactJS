import '../css/paciente.css'

const Paciente = ({
    setModalVisible,
    pacientes,
    paciente
}) => {

    const handleEditar = () => {
        // Abrir el modal cuando se de clic
        setModalVisible(true);
        // En console.log mostrar el array de pacientes
        console.log(pacientes)

    }

    return (
        <article className="paciente-card">
            <p className="paciente-label">Paciente:
                <span className="paciente-nombre"> {paciente.paciente}</span>
            </p>
            <p className="paciente-fecha"> {paciente.fechaAlta}</p>

            <div className="paciente-contenedor-botones">
                <button 
                    className="paciente-btn paciente-btn-editar"
                    onClick={(e) => handleEditar(e)}
                >Editar</button>
                <button 
                    className="paciente-btn paciente-btn-eliminar"
                >Eliminar</button>
            </div>
        </article>
    );
};

export default Paciente;