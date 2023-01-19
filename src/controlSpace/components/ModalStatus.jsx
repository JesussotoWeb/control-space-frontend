import { useState, useEffect} from "react";
import { BiZoomIn, BiXCircle } from "react-icons/bi";
import Galeria from "./modales/Galeria";
import ReactDOM from 'react-dom';
import BotonEje from "./botones/BotonEje";

const ModalStatus = ({apiDataUsers, idsUser, mostrarModal, actualizarEstadoModal}) => {
    const [mostrarModalStyles, setMostrarModalStyles] = useState(false);
    const [mostrarModalGallery, setMostrarModalGallery] = useState(false);
    const [imagenesModal, setImagenesModal] = useState({
        imagenes: null,
        posicion: null
    });

    useEffect(() => {
        setTimeout(() => {
            setMostrarModalStyles(true);
        }, 100)
    }, [0])
    
    const dataShowUser = {};

    const mostrarData = () => {

        return <h2 className="estatusResumen-Modal__textPricipal">Status de <span className="estatusResumen-Modal__textPricipal-markerData">{dataShowUser.nombre} {dataShowUser.apellido}</span><span className="estatusResumen-Modal__textPricipal-marker">#</span><span className="estatusResumen-Modal__textPricipal-markerDataC">{dataShowUser.cedula}</span>
        <BotonEje 
        url={dataShowUser.cedula} 
        customClass="pagos-faltantes__btnMostrarData"
        top={40}
        left={40}
        size={25}
        />
        </h2>;
    }
    apiDataUsers.map((items) => {

        for(let item of items.restauraciones){
            if(items.Cedula == idsUser.id_user && item._id == idsUser.id_restauracion){
                dataShowUser.nombre = items.Nombre;
                dataShowUser.apellido = items.Apellido;
                dataShowUser.direccion = items.Direccion;
                dataShowUser.telefono = items.Telefono;
                dataShowUser.email = items.Correo;
                dataShowUser.cedula = items.Cedula;
                dataShowUser.restauraciones = items.restauraciones;


                mostrarData();
            }
        }

    })
    mostrarData();

    const showFotos = (fotos) => {
        /* console.log("Lo pasamos a la funcion y retornamos", fotos) */
        return fotos.map((f, index, fotos) => {

            return (
                <div key={index} className="estatusResumen-container-Modal__restauracion-fotocontainer">
                    <img 
                        className="estatusResumen-container-Modal__restauracion-foto"  
                        src={f} title={f} alt="Internet Error"
                    />
                    
                        <span           
                        onClick={() => pasarDataModalGallery(fotos, index)}
                        className="estatusResumen-container-Modal__restauracion-foto-iconMas">
                            <BiZoomIn/>
                        </span>
                </div>
            );
        })
       
    }
    const pasarDataModalGallery = (imagenes, i) => {
        setMostrarModalGallery(true)
        setImagenesModal({
            imagenes: imagenes,
            posicion: i
        })
    }
    const ocultarGalleryModal = (opc) => {
        setMostrarModalGallery(opc)
    }

    const estyleModalClose = (opc) => {
        setMostrarModalStyles(opc);
            setTimeout(() => {
                actualizarEstadoModal(opc);
            },500);
    }

    
    return (
        <div 
            className={`estatusResumen-container estatusResumen-container-Modal ${mostrarModalStyles ? "estatusResumen-container-Modal_avtive" : ""}`}
        >
            {mostrarData()}
            <div className="estatusResumen-Modal__datos">
                <p className="estatusResumen-Modal__datosPersonales-title">Datos Personales</p>
                <h2 className="estatusResumen-Modal__datosPersonales-text">
                    <span className="estatusResumen-Modal__datosPersonales-marker">Nombre y Apellido: </span>{dataShowUser.nombre} {dataShowUser.apellido}
                </h2>
                <h3 className="estatusResumen-Modal__datosPersonales-text">
                    <span className="estatusResumen-Modal__datosPersonales-marker">Direccion: </span>
                    {dataShowUser.direccion}
                </h3>
                <h3 className="estatusResumen-Modal__datosPersonales-text">
                    <span className="estatusResumen-Modal__datosPersonales-marker">Telefono: </span>{dataShowUser.telefono.Pais} {dataShowUser.telefono.numero}
                </h3>
                <h3 className="estatusResumen-Modal__datosPersonales-text">
                    <span className="estatusResumen-Modal__datosPersonales-marker">Email: </span>{dataShowUser.email}
                </h3>

            </div>
            <div className="estatusResumen-Modal__datos estatusResumen-Modal__datos_restauracion">
                <p className="estatusResumen-Modal__datosPersonales-title">Datos de Restauracion  <span className="estatusResumen__datosPersonales-titleIcon">{dataShowUser.restauraciones.length}</span></p>
                <div className="estatusResumen-Modal__containerRestauraciones">
                    {
                        dataShowUser.restauraciones.map((conten, index) => {
                            /* console.log("Vuelta " + index, conten) */
                            return(
                                <div className="estatusResumen-Modal__datos estatusResumen-Modal__dato" key={index}>
                                    <div 
                                        className="estatusResumen-container-Modal__restauracion-fotos">
                                        {showFotos(conten.Fotos)}
                                    </div>  
                                    <div className="container-Modal__descripcion">
                                        <p className="estatusResumen-Modal__datosPersonales-text estatusResumen-Modal__restaruacionDescripcion">
                                            <span className="estatusResumen-Modal__datosPersonales-marker">Descripcion: </span>
                                            <span className="estatusResumen-Modal__datosPersonales-valorText">{conten.Descripcion}</span>
                                        </p>
                                        <div className="estatusResumen-Modal__restaruacioDatas">
                                            <span className="estatusResumen-Modal__restaruacionNombre">{conten.Restauracion}</span>
                                            <span className="estatusResumen-Modal__restaruacionData">{conten.Fecha}</span>
                                            <span className="estatusResumen-Modal__restaruacionData">Abono: {conten.Abono}$</span>
                                            <span className="estatusResumen-Modal__restaruacionData">Presupuesto: {conten.Presupuesto}$</span>
                                            
                                        </div>
                                        <span className={`estatusResumen-Modal__restaruacionEstatus ${conten.Estatus == "Terminado" ? "estatusResumen-Modal__restaruacionEstatusTerminado" : "estatusResumen-Modal__restaruacionEnProceso"}`}>{conten.Estatus}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div onClick={() => estyleModalClose(false)} className="estatusResumen-Modal__closeModal">
                <span>Cerrar <BiXCircle /></span>
            </div>
            {
            mostrarModalGallery ? ReactDOM.createPortal(
            <Galeria ocultarGalleryModal={ocultarGalleryModal} imagenesModal={imagenesModal}/>, document.querySelector("#modal-gallery")) : ""
            }
        </div>

    )
}

export default ModalStatus;