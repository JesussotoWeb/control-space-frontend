import { BiZoomOut } from "react-icons/bi";
import { useState, useEffect } from "react";

const Galeria = ({ ocultarGalleryModal, imagenesModal }) => {
    const [posicionImagen, setposicionImagen] = useState(imagenesModal.posicion);
    const [mostrarEstilos, setMostrarEstilos] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setMostrarEstilos(true)
        }, 400);
    }, [0]);

    const ocultarModalGallery = () => {
        setMostrarEstilos(false);
        setTimeout(() => {
            ocultarGalleryModal(false);
        }, 400);
    }

    
  return (
    <div className={`modal-gallery ${mostrarEstilos ? "modal-gallery_active" : ""}`}>
        <div className="modal-gallery__tarjeta">
            <div className="modal-gallery__imagenPrincipalContainer">
                <img className="modal-gallery__imagenPrincipal" src={imagenesModal.imagenes[posicionImagen]} alt="" />
            </div>
            <ul className="modal-gallery__imagenesSecundarios">
                {
                    imagenesModal.imagenes.map((imagen, index) => {
                        return (
                            <li onClick={() => setposicionImagen(index)} className={`modal-gallery__imagenContainer ${posicionImagen == index ? "modal-gallery__imagenContainer_active" : ""}`} key={index}>
                                <img className="modal-gallery__imagen" src={imagen} alt="" />
                            </li>
                        )
                    })
                }
            </ul>
            <span onClick={() => ocultarModalGallery()} className="modal-gallery__cerrarModal"><BiZoomOut /></span>
            
        </div>
    </div>
  )
}

export default Galeria