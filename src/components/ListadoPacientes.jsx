import Paciente from "./Paciente";
import {useEffect} from 'react';

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

  useEffect(()=> {
    if(pacientes.length > 0){

      console.log('nuevo paciente')
    }
  },[pacientes])

  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">
              ListadoPacientes
            </h2>

            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {""}
              <span className="text-indigo-600 font-bold">
                Pacientes y Citas
              </span>
            </p>
            {pacientes.map((paciente) => {
              return (
                <Paciente
                  eliminarPaciente={eliminarPaciente}
                  setPaciente={setPaciente}
                  // cuando se va a iterar algo una lsita siempre va con key unico
                  key={paciente.id}
                  paciente={paciente}
                />
              );
            })}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">
              No hay pacientes
            </h2>

            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes {""}
              <span className="text-indigo-600 font-bold">
                y apareceran en este lugar
              </span>
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default ListadoPacientes;
