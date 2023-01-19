import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import "./BotonInfo.css";
import { FaInfoCircle } from "react-icons/fa";

const BotonInfo = ({type, restauracionesList}) => {
    const [show, setShow] = useState(false)
    const [showStyle, setShowStyle] = useState(false)
    const [data, setData] = useState([]);
    const [suma, setSuma] = useState(0);
    const [titulos, setTitulos] = useState()

    useEffect(() => {
        if(type == "abono"){
            extraerDataAbono();
            setTitulos("Abono");

        }else if(type == "presupuesto"){
            extraerDataPresupuesto();
            setTitulos("Presupuesto");
        }   
    }, [0])
    const extraerDataAbono = () => {
        let arr = [];
        let sumatoria = 0;
        restauracionesList.map((content) => {
            sumatoria += content.Abono;
            arr.push({
                "index": content.Abono,
                "nombre": content.Restauracion
            })
        })
        setSuma(sumatoria);
        setData(arr);
    }
    const extraerDataPresupuesto = () => {
        let arr = [];
        let sumatoria = 0;
        restauracionesList.map((content) => {
            sumatoria += content.Presupuesto;
            arr.push({
                "index": content.Presupuesto,
                "nombre": content.Restauracion
            })
        })
        setSuma(sumatoria);
        setData(arr);
    }
    
    const showStyles = (value) => {
        setShow(value)
       setTimeout(() => {
        setShowStyle(value)
       }, 100)
    }
    const hiddeStyles = (value) => {
        setShowStyle(value)
       setTimeout(() => {
        setShow(value)
       }, 300)
    }
    return (
    <div className="btn-i-modal">
        <FaInfoCircle 
        className="btn-i-modal__icon" 
        onMouseEnter={() => showStyles(true)}
        onMouseLeave={() => hiddeStyles(false)}
        />
        {show ? ReactDOM.createPortal(
            <div 
            className={`btn-i-modal__descripcion ${showStyle ? "btn-i-modal__descripcion_active" : ""}`}>
                <h2 className="btn-i-modal__title">{titulos} de cada Restaruacion</h2>
                <table className="btn-i-modal__table">
                    <thead>
                        <tr className="btn-i-modal__row">
                            <td className="btn-i-modal__col btn-i-modal__col1 btn-i-modal__colTitle">Nombre</td>
                            <td className="btn-i-modal__col btn-i-modal__col2 btn-i-modal__colTitle">{titulos}</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((content, index) => {
                                return(
                                    <tr key={index}>
                                        <td className="btn-i-modal__col btn-i-modal__col1">
                                            <span className="btn-i-modal__colIcon">{index}</span>
                                            {content.nombre}
                                        </td>
                                        <td className="btn-i-modal__col">{content.index}$</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
                <table className="btn-i-modal__table">
                    <thead>
                        <tr className="btn-i-modal__row">
                            <td className="btn-i-modal__col btn-i-modal__colTitle">Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="btn-i-modal__row">
                            <td className="btn-i-modal__col">{suma}$</td>
                        </tr>
                    </tbody>
                </table>
    
            </div>, 
        document.querySelector("#modal-gallery")) : ""}
        
    </div>
  )
}

export default BotonInfo