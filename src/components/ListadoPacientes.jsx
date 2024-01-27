import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  // console.log(pacientes)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-2xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-8">
              Administra tus {' '}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          <div className="md:grid lg:grid-cols-2 md:grid-cols-1">

          { pacientes.map( (paciente) => (
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-8">
              Comienza agregando pacientes y {' '}
            <span className="text-indigo-600 font-bold">aparecerán en este lugar</span>
          </p>
        </>
      )}

    </div>
  )
}

export default ListadoPacientes
