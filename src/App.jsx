import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

//props desde app hacia header numeros
// puedo pasar booleanos por props
// puede pasar desde app hasta formulario hasta listado paciente

function App() {
  const [pacientes, setPacientes] = useState([]);

  // creamos el estado de paciente lo pasamos a listado paciente luego de listado a paciente
  // y lo hacemos funcion en el boton editar del paciente donde le pasamos a la funcion setPaciente enviada por props
  // al paciente que genera el componente paciente
  // por lo que nuestra variable paciente sera llenada con setPaciente
  const [paciente, setPaciente] = useState({});

  // se ejecuta una sola vez
  useEffect(() => {
    const getLocalStorage = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes") ?? []);

      setPacientes(pacientesLS)
    };

    getLocalStorage();
  }, []);

  // cada vez que haya un cambio en pacientes ejecutaremos este codigo dentro de useEffect
  useEffect(() => {
    // convertimos el arreglo u onjeto a string y lo guardamos en localStorage
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    // me traigo todos los que son diferentes al id que le estoy pasando c
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(pacientesActualizados);
  };

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header

        //  numeros = {1}
        //  isAdmin={false}
        //  fn={imprime2mas2}
        //  tomaUnValor={toma1Valor}
        />

        <div className="mt-12 md:flex">
          <Formulario
            // pasamos set pacientes desde app hacia formulario por que es en formulario donde generamos los pacientes
            // set pacientes es el que modifica la variable pacientes ademas es un arreglo, por lo que tiene todo el sentido
            setPacientes={setPacientes}
            pacientes={pacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes
            eliminarPaciente={eliminarPaciente}
            pacientes={pacientes}
            setPaciente={setPaciente}
          />
        </div>
      </div>
    </>
  );
}

export default App;
