import {IoIosEye} from "react-icons/io";
import {RxCounterClockwiseClock} from "react-icons/rx";

import { useEffect, useState } from "react";

const PagosPendientes = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    
    fetch("http://127.0.0.1:5173/ejemplo.json")
    .then(res => res.json())
    .then(json => {
      setApiData(json)

    }).catch(err => console.error(err))
  }, [0]);
 
  var listaUsuarios = [];
apiData.map((content) => {
    content.restauraciones.filter((restauracion) => {
      if(restauracion.Pago_completado == "Pendiente"){
        console.log(restauracion.Pago_completado)
        listaUsuarios.push({
          nombre: content.Nombre,
          apellido: content.Apellido,
          restauraciones: content.restauraciones.length,
          pago_completado: restauracion.Pago_completado,
          observaciones: content.Observaciones,
          abono: restauracion.Abono,
          presupuesto: restauracion.Presupuesto,
          fecha: restauracion.Fecha,

        });
      }
    })
  })
console.log(listaUsuarios)
/* console.log(apiData) */
  const verificarPagoCompletado = (opc) => {
    if(opc == "Pendiente"){
      return <RxCounterClockwiseClock className="btn-check-iconNoCompletado"/>
    }
  }
  return (
    <div className="pagos-faltantes">
          <h2 className="pagos-faltantes__title">Pagos Pendientes</h2>
          <table className="pagos-faltantes__tabla">
            <thead><tr className="pagos-faltantes__fila pagos-faltantes__filaTitulos" >
              <th className="pagos-faltantes__fila-titulo">Pagado</th>
              <th className="pagos-faltantes__fila-titulo">Nombre y Apellido</th>
              <th className="pagos-faltantes__fila-titulo">Restauraciones</th>
              <th className="pagos-faltantes__fila-titulo">Observaciones</th>
              <th className="pagos-faltantes__fila-titulo">Abono</th>
              <th className="pagos-faltantes__fila-titulo">Presupuesto</th>
              <th className="pagos-faltantes__fila-titulo">Fecha</th>
            </tr></thead>
            <tbody>
              {
                listaUsuarios.map((content, index) => {
                  return (
                    <tr key={index} className="pagos-faltantes__fila">
                      <td className="pagos-faltantes__fila-columna">
                        <span className="pagos-faltantes__btnMostrarData"><IoIosEye/></span>{verificarPagoCompletado(content.pago_completado)}<i className="pagos-faltantes__btnMostrarData-i">{content.pago_completado}</i></td>
                      <td className="pagos-faltantes__fila-columna">{content.nombre} {content.apellido}</td>
                      <td className="pagos-faltantes__fila-columna">{content.restauraciones}</td>
                      <td className="pagos-faltantes__fila-columna">{content.observaciones}</td>
                      <td className="pagos-faltantes__fila-columna">{content.abono}$</td>
                      <td className="pagos-faltantes__fila-columna">{content.presupuesto}$</td>
                      <td className="pagos-faltantes__fila-columna">{content.fecha}</td>
                    </tr>
                  )
                })
              }
            
            </tbody>
          </table>
    </div>
  )
}

export default PagosPendientes;