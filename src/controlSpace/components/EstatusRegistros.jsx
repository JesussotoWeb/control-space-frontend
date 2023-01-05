import { useState, useEffect } from 'react';
import Paginacion from './Paginacion';
import ModalStatus from './ModalStatus';
import { BiLinkExternal } from "react-icons/bi";

const EstatusRegistros = () => {
    /* Estados del Componente */
    const [userStatus, setUserStatus] = useState([]);
    const [filter, setfilter] = useState("Todos")
    const [paginacionCurrent, setPaginacionCurrent] = useState(0);
    const [paginacionHojas, setPaginacionHojas] = useState(6);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [lisIdRestauraciones, setLisIdRestauraciones] = useState();


    const actualizarEstadoModal = (opc) => {
        setMostrarModal(opc);
    }


    /* Hook: consumimos API y guardamos en estado "userStatus" */
    useEffect(() => {
    fetch("http://127.0.0.1:5173/ejemplo.json")
    .then(res => res.json())
    .then(json => {
        setUserStatus(json);
    }).catch(err => console.log(err))
    }, [0]);



    const paginacion = (state, hojas) => {
        setPaginacionCurrent(state);
        setPaginacionHojas(hojas);
   }
    
    const listaRestauraciones = [];
    userStatus.map((item) => {
        for(const restauracion of item.restauraciones){
            let ii = restauracion;
            ii["cedula"] = item.Cedula;
            ii["nombre"] = item.Nombre;
            ii["apellido"] = item.Apellido;

           listaRestauraciones.push(ii);
        }
    })


    /* Filtramos el arreglo de restauraciones dependiendo de las condiciones */
    const arrListAllTerminado = [];
    const arrListAllEnProceso = [];
    listaRestauraciones.filter((arr) => {
        if(arr.Estatus == "Terminado"){
            arrListAllTerminado.push(arr);
        }else if(arr.Estatus == "En Proceso"){
            arrListAllEnProceso.push(arr);
        }
    })
    const filterRestaruaciones = listaRestauraciones.filter((arr) => {
        if(arr.Estatus == filter){
            return arr;
        }else if(filter == "Todos"){
            return arr;
        }
    });



    const filterRestaruacionesPag = () => {
        return filterRestaruaciones.slice(paginacionCurrent, paginacionCurrent + 6);
    }

    /* Evento click para cambiar el estado del filter */
    const filtrado = (e) => {
        setPaginacionHojas(6);
        setPaginacionCurrent(0);
        setfilter(e.target.textContent);
    }



    /* Verificamos el estado filter para mostrar el estatus */
    const verificarEstatus = (v) => {
        if(v == "Terminado"){
            return "estatusResumen__taskStatus_terminado";
        }else{
            return "estatusResumen__taskStatus_enProceso";
        }
    }
    const prepararModal = (id_Restauracion, id_user) => {
        setMostrarModal(true);
        setLisIdRestauraciones({
            id_user: id_user,
            id_restauracion: id_Restauracion
        });
    }

  return (
    <div className="estatusResumen-container">
        <div className="estatusResumen">
            <h2 className="estatusResumen__title">Estatus de las Restauraciones</h2>
            <ul className="estatusResumen__filter">
                <li 
                    className={`estatusResumen__filterItem 
                    ${filter == "Todos" ? "estatusResumen__filterItem_active" : ""}`}>

                    <span onClick={filtrado}>Todos</span>
                    <span className='estatusResumen__filterItemIcon'>{listaRestauraciones.length}</span>
                </li>

                <li 
                    className={`estatusResumen__filterItem ${filter == "Terminado" ? "estatusResumen__filterItem_active" : ""}`}>
                    <span onClick={filtrado}>Terminado</span>
                    <span className='estatusResumen__filterItemIcon'>{arrListAllTerminado.length}</span>
                </li>

                <li 
                    className={`estatusResumen__filterItem ${filter == "En Proceso" ? "estatusResumen__filterItem_active" : ""}`} >
                    <span onClick={filtrado} >En Proceso</span>
                    <span className='estatusResumen__filterItemIcon'>{arrListAllEnProceso.length}</span>
                </li>
            </ul>
            
            <div className="estatusResumen__tasksContainer">
            {
                filterRestaruacionesPag().map((item) => {
                    console.log(item)
                    return (
                        <div key={item._id} className="estatusResumen__task">
                            <a onClick={() => prepararModal(item._id, item.cedula)} className="estatusResumen__taskStatusLink">Ver Estatus <BiLinkExternal /></a>
                            <p className="estatusResumen__taskText">
                                <span className="estatusResumen__taskNameUser">{`${item.nombre} ${item.apellido}`}</span>#{item.Restauracion}
                            </p>
                            <span 
                            className={`estatusResumen__taskStatus ${verificarEstatus(item.Estatus)}`}>
                                {item.Estatus}
                            </span>
                            <span className="estatusResumen__taskUserId"><span className="simbols">#</span>{item.cedula}</span>
                        </div> 
                    )
                })
            }
            </div>
            
        </div>
        <Paginacion
                pageCurrent={paginacionCurrent} 
                arrCompleto={filterRestaruaciones}
                actualizar={paginacion}
                hojas={paginacionHojas}
            />
        {
            mostrarModal ? <ModalStatus apiDataUsers={userStatus} idsUser={lisIdRestauraciones} mostrarModal={mostrarModal} actualizarEstadoModal={actualizarEstadoModal}/> : ""
        }
    </div>
  )
}
export default EstatusRegistros;