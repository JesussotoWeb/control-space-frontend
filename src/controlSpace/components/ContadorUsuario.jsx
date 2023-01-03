import { BiLoaderCircle } from "react-icons/bi";
import { useEffect } from "react";
import { useState } from "react";
function ContadorUsuario() {

    const [cantidadCLientes, setCantidadCLientes] = useState("");
    
    const precargaIcon = () => {
        if(cantidadCLientes == "")
        {
            return <BiLoaderCircle className="loading"/>;
        }else{
            return cantidadCLientes;
        }
    }
    
    useEffect(() => {
        fetch("http://127.0.0.1:5173/ejemplo.json")
        .then(response => response.json())
        .then(json => {
            setCantidadCLientes(json.length);
        })
        .catch(errorJson => console.error(errorJson))
    }, [])
    
  return (
    <div className="contador-user">
        <p><span className="contador-user__number">{precargaIcon()}</span> Clientes</p>
    </div>
  )
}

export default ContadorUsuario;