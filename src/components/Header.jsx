


//PROPS QUE FUERON ASIGNADOS EN APP, los props siempre van del padre hacia el hijo

// props numeros, isAdmin, fn, toma1Valor
function Header({}){

   

    // con esto puedo enviar desde el hijo al padre parametrizando la funcion en app, pasandola por props hacia el hijo
    // y reemplazando el valor por la variable que tengo en el hijo 
    // const variableHeader = true;
    // toma1Valor(variableHeader)

   
    return(
        <>
        <div className="m-5">
        <h1 className="font-black text-4xl text-center mx-auto md:w-2/3 ">
            Seguimiento Pacientes {""}
            <span className="text-indigo-600">Veterinaria</span>
        </h1>

        </div>
        </>
    )
}

export default Header