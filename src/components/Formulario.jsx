import { useState, useEffect } from "react";

function Formulario({ pacientes, setPacientes , paciente, setPaciente}) {
  
  // valor iniciial hook
  // set nombre modifica la variable nombre
  // como value mando el nombre cuando se actualize ese sera el valor del input nombre
  //  onChange={(e) => setNombre(e.target.value)} puedo hacerlo asi sin neceisdad de una funcion
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  // esto evita los re render escuchan los cambios qu sucedan
  // este se ejcuta cada vez que paciente cambie
  // revisa cuando algo pueda cmabiar 
  useEffect(()=> {
    // lee si el paciente esta vacio si no lo esta seteara las variables al formulario
   if(Object.keys(paciente).length > 0){
   setNombre(paciente.nombre)
   setEmail(paciente.email)
   setFecha(paciente.fecha)
   setSintomas(paciente.sintomas)
   setPropietario(paciente.propietario)
   }
  },[paciente])

  //este se ejecuta solo una vez cuando el componente esta listo
  // useEffect(()=> {
  //   console.log('el componente esta listo');
  // },[])

  function generarId() {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString();

    return random + fecha 
  }

  function handleSubmit(e) {
    e.preventDefault(); //prevencion

    // si hay un campo vacio envia el error
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      // el estado cambiara y la actualizacion dira que el error pasa a true
      setError(true);
      return;
    }
    // si llenamos el formulario nuevamente cambiara a falso el error
    setError(false);

    const objetoPaciente = {
  
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if(paciente.id){
      // esto edita por que verifica que trae un id 
      // para asignar el id del objeto a editar simplemente lo igualamos al que trae ya
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === 
        paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados)
        setPaciente({})
    }else {
      // esto crea
      objetoPaciente.id  =generarId(),
      setPacientes([...pacientes, objetoPaciente]);
    }

    //console.log(objetoPaciente)

    // debo tomar una copia o si no se reescribira dependera del caso
    // agrego un objeto paciente ,si pacientes esta vacio, tomara el pacientes vacio y luego agregara ese objeto agregado 
    // y lo introducira al final del arreglo
    // luego lo mismo, agrego otro paciente, tomara una copia de pacientes (que le envio desde app como prop) 
    // el arreglo viene con 1 paciente (el agregado anteriormente) y al final del arrgelo agregara nuevamente al nuevo objeto creado
    // y asi sucesivamente llena el arreglo

    //reiniciar form

    // como estan asociados las funciones set a los valores del form se reinicia el formulario 
    setEmail("");
    setNombre("");
    setPropietario("");
    setFecha("");
    setSintomas("");


    console.log("enviando formulario");
  }

  console.log(nombre);
  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 "
          onSubmit={handleSubmit}
        >
          {error && (
            <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-lg">
              <p>Todos los campos son obligatorios</p>
            </div>
          )}
          <div className="mb-5">
            <label
              htmlFor="mascota"
              className="block text-gray-700 uppercase font-bold"
            >
              Nombre Mascota
            </label>
            <input
              type="text"
              id="mascota"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="propietario"
              className="block text-gray-700 uppercase font-bold"
            >
              Nombre Propietario
            </label>
            <input
              type="text"
              id="propietario"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 uppercase font-bold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email contacto propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="alta"
              className="block text-gray-700 uppercase font-bold"
            >
              Alta
            </label>
            <input
              type="date"
              id="alta"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="sintomas"
              className="block text-gray-700 uppercase font-bold"
            >
              Sintomas
            </label>

            <textarea
              id="sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los sintomas"
            />
          </div>

          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase 
                              font-bold hover:bg-indigo-800 cursor-pointer transition-all"
            value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />
        </form>
      </div>
    </>
  );
}

export default Formulario;

// REGLAS DE LOS HOOKS

// se deben colocar en la parte superior del componente de react
// no se deben poner dentro de condicionales ni despues de un return
