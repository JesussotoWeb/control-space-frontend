import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FiEdit } from 'react-icons/fi';
import {BsCheck2Circle, BsCheckLg} from "react-icons/bs";
import {RxCounterClockwiseClock} from "react-icons/rx";
import {FaBell, FaRegBell, FaBellSlash} from "react-icons/fa";
import { BiLoaderCircle, BiZoomIn } from "react-icons/bi";
import Galeria from "./Galeria";


const DetallesRegistro = ({userId}) => {
	const [estatus, setEstatus] = useState("Terminado");
	const [campana, setCampana] = useState(false);
	const [idUser, setIdUser] = useState(21119078);
	const [apiData, setApiData] = useState([]);
	const [mostrarModalGallery, setMostrarModalGallery] = useState(false);
	const [imagenesModal, setImagenesModal] = useState({
        imagenes: null,
        posicion: null
    });


	useEffect(() => {
	  	fetch("http://127.0.0.1:5173/ejemplo.json")
	  	.then(res => res.json())
	  	.then(json => {
			setApiData(json);
		}).catch(err => console.error(err))
	}, [0])
	
	const datosOrdenados = apiData.filter((data) => data.Cedula == idUser ? data : "");
	const restauraciones = [];
	for(let restauracion of datosOrdenados){
		restauracion.restauraciones.forEach(element => {
			restauraciones.push(element);
		});
	}
	const mostrarFotos = (fotos) => {
		return fotos.map((f, index) => {
			return (
				<div key={index} className="estatusResumen-container-Modal__restauracion-fotocontainer modal-registros__restauracionFoto">
					<img src={f} className="estatusResumen-container-Modal__restauracion-foto" alt="internet error"/>
					<span           
						onClick={() => pasarDataModalGallery(fotos, index)}
						className="estatusResumen-container-Modal__restauracion-foto-iconMas">
						<BiZoomIn/>
					</span>
				</div>
			)
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
    <div className="modal-registros">
      <div className="modal-registros__datosPersonalesContainer">
        <div className="modal-registros__datosPersonales">
            <h2 className="modal-registros__datosTitle">Datos Personales</h2>
			{
				datosOrdenados.map((conten, index) => {
					return (
						<div key={index} className="modal-registros__datosPersonalesDatos">
							<h3 className="modal-registros__dato">
								<span className="modal-registros__dato-marker">Nombre y Apellido: </span> 
								{conten.Nombre} {conten.Apellido}
							</h3>
							<h3 className="modal-registros__dato">
								<span className="modal-registros__dato-marker">Direccion: </span>
								{conten.Direccion} 
							</h3>
							<h3 className="modal-registros__dato">
								<span className="modal-registros__dato-marker">Email: </span>
								{conten.Correo} 
							</h3>
							<h3 className="modal-registros__dato modal-registros__dato-telefono">
								<span className="modal-registros__dato-marker">Telefono: </span>
								{conten.Telefono.Pais} {conten.Telefono.numero} 
							</h3>
							<h3 className="modal-registros__dato modal-registros__dato-cedula">
								<span className="modal-registros__dato-marker">Cedula: </span>
								{conten.Cedula} 
							</h3>
							<h3 className="modal-registros__dato">
								<span className="modal-registros__dato-marker">Observaciones: </span>
								{conten.Observaciones}
							</h3>
						</div>
					)
				})
			}
        </div>
        <div className="modal-registros__botonEditarContainer">
          <div className="modal-registros__botonEditar">
            <span className="modal-registros__botonEditar-text"><FiEdit className="modal-registros__botonEditar-textIcon"/> Editar Registro</span>
          </div>
        </div>
      </div>
	  <div assName="modal-registros__restauracionesDiv">
	  	<div className="modal-registros__restauracionesContainer">
			{
				restauraciones.map((conten, index) => {
					console.log(conten);
					return (
						<div key={index} className="modal-registros__restauraciones">
							<h2 className="modal-registros__datosTitle">Datos de Restauracion</h2>

							<div className="modal-registros__restauracionDatos">
								<h3 className="modal-registros__dato">
									<span className="modal-registros__dato-marker">Restauracion: </span> 
									{conten.Restauracion}
								</h3>
								<h3 className="modal-registros__dato">
									<span className="modal-registros__dato-marker">Descripcion: </span> 
									{conten.Descripcion}
								</h3>
								<h3 className="modal-registros__dato modal-registros__dato-abono">
									<span className="modal-registros__dato-marker">Abono: </span> 
									{conten.Abono}$
								</h3>
								<h3 className="modal-registros__dato modal-registros__dato-presupuesto">
									<span className="modal-registros__dato-marker">Presupuesto: </span> 
									{conten.Presupuesto}$
								</h3>
								<h3 className="modal-registros__dato modal-registros__dato-fecha">
									<span className="modal-registros__dato-marker">Fecha: </span> 
									{conten.Fecha}
								</h3>
								<div className="modal-registros__restauracionFotosContainer">
									<h3 className="modal-registros__dato modal-registros__datoFotos">
										<span className="modal-registros__dato-marker">Fotos: </span> 
									</h3>
									<div className="modal-registros__restauracionFotos">
										{mostrarFotos(conten.Fotos, index)}
									</div>
								</div>
								<div className="modal-registros__restauracionMetaData">
									<h3>
										<span className="modal-registros__dato-marker modal-registros__dato-status">Estatus: </span>
										<span className={`modal-registros__dato-marker ${conten.Estatus == "Terminado" ? "modal-registros__dato-status_terminado" : "modal-registros__dato-status_noTerminado"}`}>{estatus == "Terminado" ? conten.Estatus : conten.Estatus}</span>
									</h3>
									<h3>
										<span className="modal-registros__dato-marker">Pago Completado: </span>
										{conten.Pago_completado == "Completado" ? <BsCheck2Circle className='btn-check-iconCompletado modal-registros__btnPagoCompletado' /> : <RxCounterClockwiseClock className='btn-check-iconNoCompletado' />}
										
									</h3>
								</div>
								<FaBell onClick={() => setCampana(!campana)} className={`modal-registros__restauracionCampana ${campana ? "modal-registros__restauracionCampana_process" : ""}`} />
								{campana ? <BiLoaderCircle className="loading modal-registros__restauracionCampana_animate"/> : ""}
							</div>
							
						</div>
					)
				})
			}
			{
            	mostrarModalGallery ? ReactDOM.createPortal(
            	<Galeria ocultarGalleryModal={ocultarGalleryModal} imagenesModal={imagenesModal}/>, document.querySelector("#modal-gallery")) : ""
            }
      	</div>
	</div>
    </div>
  )
}

export default DetallesRegistro;