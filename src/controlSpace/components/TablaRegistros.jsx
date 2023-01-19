import { useEffect, useState } from "react";
import BotonEje from "../components/botones/BotonEje";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineNumber } from "react-icons/ai";
import BotonInfo from "./Utility/BotonInfo/BotonInfo";

const TablaRegistros = () => {
    const [apiData, setApiData] = useState([]);
    const [dataFilter, setDataFilter] = useState([])
    const [mensajeBuscar, setMensajeBuscar] = useState(false)

  useEffect(() => {
    
    fetch("http://127.0.0.1:5173/ejemplo.json")
    .then(res => res.json())
    .then(json => {
        setApiData(json)
        setDataFilter(json);
        }).catch(err => console.error(err))
     }, [0]);

    const filtrar = (value) => {
        if(value == ""){
            setDataFilter(apiData);
        }else{
            const filterData = apiData.filter((data) => {
                return data.Cedula.toString().includes(value);
            })
            setDataFilter(filterData);

            if(filterData.length == 0){
                setMensajeBuscar(true);
            }else {
                setMensajeBuscar(false);
            }
        }
        
    }
    const verificarBusqueda = () => {
        if(mensajeBuscar){
            return (
                <tr className="pagos-faltantes__fila">
                    <td colSpan={8} className="pagos-faltantes__fila-columna">
                        <center>NO SE HA ENCONTRADO REGISTROS</center>
                    </td>
                </tr>
            )
        }
        
    }
    const filtrarFecha = (value) => {
      /*   const dateString = value.split("-")
        const arrDate = `${dateString[2]}-${dateString[1]}-${dateString[0]}`; */

        const dateFilter = apiData.filter((data) => {
            return data.Fecha_registro === value;
        })
        console.log(dateFilter.some(e => typeof e === "object"))
        if(dateFilter.some(e => typeof e === "object")){
            setMensajeBuscar(false);

            setDataFilter(dateFilter);

        }else{
            setDataFilter(dateFilter);
            setMensajeBuscar(true);
            console.log("Err")
        }

    }
    return (
        <div className="registros">
            <div className="registros__rowSearch">
                <div className="registros__rowSearch-column">
                    <p className="registros__rowSearch-text">Cedula</p>
                    <div className="registros__rowSearch-input">
                        <input onChange={(e) => filtrar(e.target.value)} className="registros__rowSearch-inputSearch"
                        type="number" 
                        placeholder="Cedula" />
                        <AiOutlineNumber className="registros__rowSearch-icon"/>
                    </div>
                </div>
                <div className="registros__rowSearch-column">
                    <p className="registros__rowSearch-text">Fecha</p>
                    <div className="registros__rowSearch-input">
                        <input onChange={(e) => filtrarFecha(e.target.value)} className="registros__rowSearch-inputDate" type="date" placeholder="dd/mm/aaa" />
                        <BsCalendarDate className="registros__rowSearch-icon"/>
                    </div>
                </div>
            </div>
            <div className="tabla-registros">
                <table className="pagos-faltantes__tabla">
                    <thead>
                        <tr className="pagos-faltantes__fila pagos-faltantes__filaTitulos" >
                            <th className="pagos-faltantes__fila-titulo">Cedula</th>
                            <th className="pagos-faltantes__fila-titulo">Nombre y Apellido</th>
                            <th className="pagos-faltantes__fila-titulo">Restauraciones</th>
                            <th className="pagos-faltantes__fila-titulo">Observaciones</th>
                            <th className="pagos-faltantes__fila-titulo">Abono</th>
                            <th className="pagos-faltantes__fila-titulo">Presupuesto</th>
                            <th className="pagos-faltantes__fila-titulo">Fecha</th>
                            <th className="pagos-faltantes__fila-titulo">Pagado</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            dataFilter.map((content, index) => {
                                return (
                                    <tr key={index} className="pagos-faltantes__fila">
                                        <td className="pagos-faltantes__fila-columna">
                                            <BotonEje 
                                            url="23432x" 
                                            customClass="pagos-faltantes__btnMostrarData"
                                            />
                                            C.I {content.Cedula}
                                        </td>
                                        <td className="pagos-faltantes__fila-columna">
                                            {content.Nombre} {content.Apellido}
                                        </td>
                                        <td className="pagos-faltantes__fila-columna"> 
                                            {content.restauraciones.length}
                                        </td>
                                        <td className="pagos-faltantes__fila-columna">
                                            {content.Observaciones}
                                        </td>
                                        <td className="pagos-faltantes__fila-columna">
                                            <BotonInfo type="abono" restauracionesList={content.restauraciones} />
                                            {content.Abono_total}$
                                        </td>
                                        <td className="pagos-faltantes__fila-columna">
                                            <BotonInfo type="presupuesto" restauracionesList={content.restauraciones} />
                                            {content.Presupuesto_total}$
                                        </td>
                                        <td className="pagos-faltantes__fila-columna">
                                            {content.Fecha_registro}
                                        </td>
                                        <td className="pagos-faltantes__fila-columna">
                                            {content.Fecha_registro}
                                        </td>

                                    </tr>
                                )
                            })
                        } 
                       
                       {
                        verificarBusqueda()
                       }
                                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TablaRegistros;