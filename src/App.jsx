import { useState } from 'react';
import Formulario from './components/Formulario.jsx';
import './css/main.css';
import Paciente from './components/Paciente.jsx';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEditado, setPacienteEditado] = useState({});
  // Para pasar estados de un componente padre a un componente hijo se hace a traves de props 
  const editarPaciente = (id) => {
    const pacienteEdit = pacientes.filter(paciente => paciente.id === id);
    setPacienteEditado(pacienteEdit[0])
  }
  const eliminarPaciente = (id) => {
    const confirmar = window.confirm("Deseas eliminar el paciente? Una vez eliminado no se puede recuperar");
    console.log(confirmar);
    if (confirmar) {
      const pacienteActualizado = pacientes.filter(paciente => paciente.id != id);
      setPacientes(pacienteActualizado);
    }
  }
  return (
    <main className="container">
      <h1 className='titulo'>
        Administrador de Citas <span className='titulo-bold'>Veterinario</span>
      </h1>
      <button
      className='btn-nueva-cita'
      onClick={() => setModalVisible(true)}
      >
        <span className='btn-texto-nueva-cita'>Nueva Cita</span>
      </button>

      {pacientes.map((paciente) => (
        <Paciente
        setModalVisible = {setModalVisible}
        pacientes = {pacientes}
        paciente = {paciente}
        eliminarPaciente = {eliminarPaciente}
        key={paciente.id}
        editarPaciente = {editarPaciente}
        />
      ))}

      

      {modalVisible && (
        <div className='modal-overlay' role='dialog' aria-modal='true'>
          <div className='modal-content'>
            <Formulario 
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              pacientes={pacientes}
              setPacientes={setPacientes}
              pacienteEditado={pacienteEditado}
              setPacienteEditado={setPacienteEditado}
            />
          </div>
        </div>
      )}

    </main>
  )
}

export default App