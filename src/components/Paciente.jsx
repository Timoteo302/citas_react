import Swal from 'sweetalert2'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    // console.log(paciente)

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        Swal.fire({
            title: "Estás seguro?",
            text: "No podrás revertir estos cambios!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id)
                Swal.fire({
                    title: "Eliminado!",
                    text: "El registro se ha eliminado.",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className="mx-5 mb-10 bg-white shadow-md px-5 py-6 rounded-xl flex flex-col justify-between">

            <div>
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Ingreso: {''}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>
            </div>


            <div className="flex justify-between border-t-2 pt-4">
                <button
                    type="button"
                    className="py-2 px-7 bg-orange-400 hover:bg-orange-600 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></button>

                <button
                    type="button"
                    className="py-2 px-7 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
            </div>

        </div>
    )
}

export default Paciente
