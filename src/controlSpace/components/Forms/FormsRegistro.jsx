import { useRef, useState } from "react";
import "./FormsRegistro.css";
import { BiUser, BiDollar } from "react-icons/bi";
import { RiMapPinUserFill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsCalendarCheck } from "react-icons/bs";
import { ImEye } from "react-icons/im";
import { TbEngine } from "react-icons/tb";
import { FiUpload } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import { HiHashtag } from "react-icons/hi";
import Clock from "../Icons/Clock";



const FormsRegistro = () => {
    const [file, setFile] = useState(["Subir Fotos"]);
    const refIArrow = useRef();
    const [masRestaruacionex, setMasRestaruacionex] = useState(false)
    const [dataForm, setDataForm] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        email: "",
        telefono: "",
        cedula: "",
        observaciones: "",
        restauracion: "",
        descripcion: "",
        fotos: "",
        fecha: "",
        abono: "",
        presupuesto: "",
        estatus: "",
        pago_completado: ""
    });



    const mostrarTituloArchivo = (e) => {
        let arrFile = [];
       
        if(e.target.files != 0){
            for(let item of e.target.files){
                arrFile.push(item.name);
            }
            setFile(arrFile);
        }else{
            return file;
        }
        setDataForm({
            ...dataForm,
            [e.target.name]: arrFile
        })
    }



    let opc = true;
    const arrowClickSelect = () => {

        if(opc){
            refIArrow.current.classList.add("form__input-select-arrow");
            opc = false;

        }else{
            refIArrow.current.classList.remove("form__input-select-arrow");
            opc = true;

        }
        

    }
   /*  const crearRegistro = (e) => {
        e.preventDefault();

        console.log("Enviando")
    } */

    const mostrarRestauracione = () =>{
        if(masRestaruacionex)
        {
            return(
                <div className="panel-registros__listRestaruaciones">
                    <span className="panel-registros__listRestaruaciones-agregar">Agregar</span>
                    <div className="panel-registros__restaruacionesContainer">
                        <div className="panel-registros__resConten panel-registros__resConten_active">
                            <span className="panel-registros__resConten-title">Restaruacion #1</span>
                            <span className="panel-registros__resContenLine"></span>
                            <span className="panel-registros__resContenLine"></span>
                            <span className="panel-registros__resContenLine panel-registros__resContenLineMit"></span>
                            <span className="panel-registros__resContenLine panel-registros__resContenLineMit"></span>
                            <span className="panel-registros__resContenLine panel-registros__resContenLineMit"></span>
                            <span className="panel-registros__resContenLine panel-registros__resContenLineMit"></span>
                        </div>
                        
                    </div>
                </div>
            )
        }
        
    }

   
    const sendDataForm = (ev) =>{
        ev.preventDefault();
        console.log(dataForm)
    }



    const handleChangeCheck = (e) => {
        const {name, value} = e.target;
        setDataForm({
            ...dataForm,
            [name]: value
        })
    }



    const handleChange = (e) => {
        const {name, value} = e.target;
        setDataForm({
            ...dataForm,
            [name]: value
        })

    }
    


  return (
    <div className="form-registrar">
        
        <form onSubmit={(ev) => sendDataForm(ev)} className="form__data">
            <div className="form__dataContainner">
                <div className="form__datosPersonales">
                    <h2 className="form__datosPersonalesTitle">Datos Personales</h2>
                    <div className="form__inputs form__inputs-nombre form__input-required">
                        <input
                        name="nombre" 
                        value={dataForm.nombre} 
                        onChange={handleChange} 
                        className="form__input" 
                        type="text" 
                        placeholder="Nombre" />
                        <BiUser className="form__inputIcon"/>
                    </div>
                    <div className="form__inputs form__inputs-apellido form__input-required">
                        <input 
                        name="apellido"
                        value={dataForm.apellido}
                        onChange={handleChange} 
                        className="form__input" 
                        type="text" 
                        placeholder="Apellido" />
                        <BiUser className="form__inputIcon"/>
                    </div>
                    <div className="form__inputs">
                        <input 
                        name="direccion"
                        value={dataForm.direccion}
                        onChange={handleChange} 
                        className="form__input" 
                        type="text" 
                        placeholder="Direccion" />
                        <RiMapPinUserFill className="form__inputIcon"/>
                    </div>
                    <div className="form__inputs form__inputs-email">
                        <input 
                        name="email"
                        value={dataForm.email}
                        onChange={handleChange} 
                        className="form__input" 
                        type="email" 
                        placeholder="Correo Electronico" />
                        <MdOutlineAlternateEmail className="form__inputIcon"/>
                    </div>
                    <div className="form__inputs form__inputs-telefono form__input-required">
                        <input 
                        name="telefono"
                        value={dataForm.telefono}
                        onChange={handleChange} 
                        className="form__input" 
                        type="number" 
                        placeholder="Numero de Telefono" />
                        <BsFillTelephoneFill className="form__inputIcon"/>
                    </div>
                    <div className="form__inputs form__input-required">
                        <input 
                        name="cedula"
                        value={dataForm.cedula}
                        onChange={handleChange}
                        className="form__input" 
                        type="number" 
                        placeholder="Cedula" />
                        <HiHashtag className="form__inputIcon"/>
                    </div>
                    <div className="form__inputs form__input-required">
                        <textarea 
                        name="observaciones"
                        value={dataForm.observaciones}
                        onChange={handleChange}
                        className="form__input" 
                        placeholder="Observaciones"
                        ></textarea>
                        <ImEye className="form__inputIcon"/>
                    </div>
                </div>
                <div className="form__datosPersonales">
                    <h2 className="form__datosPersonalesTitle">Datos de Restauración</h2>
                    <div className="form__inputs form__input-required">
                        <input 
                        name="restauracion"
                        value={dataForm.restauracion}
                        onChange={handleChange} 
                        className="form__input" 
                        type="text" 
                        placeholder="Restauracion" />
                        <TbEngine className="form__inputIcon"/>
                    </div>
                    <div className="form__inputs">
                        <textarea 
                        name="descripcion"
                        value={dataForm.descripcion}
                        onChange={handleChange}
                        className="form__input" 
                        placeholder="Descripción"></textarea>
                        <TbEngine className="form__inputIcon"/>
                    </div>
                    <div className="form__inputs form__inputs-fotos">
                        <label htmlFor="fotos" className="form__input-required form__label-foto form__input">
                           {
                            file.map((conten, index) => {
                                return <span className="fotosCircle" key={index}>{conten}</span>
                            })
                           }
                        </label>

                        <input 
                        name="fotos"
                        onChange={(e) => mostrarTituloArchivo(e)} 
                        id="fotos" multiple 
                        accept=".png, .jpg, .jpeg" 
                        className="form__label-fotoInable" 
                        type="file" 
                        placeholder="Subir Fotos" />

                        <FiUpload className="form__inputIcon"/>
                    </div>
                    <div className="form__inputs form__inputs-fecha form__input-required">
                        <input 
                        name="fecha"
                        value={dataForm.fecha}
                        onChange={handleChange}
                        className="form__input form__inputDate" 
                        type="date" />
                        <BsCalendarCheck className="form__inputIcon"/>
                    </div>
                    <div className="form__inputs form__inputs-abono">
                        <input 
                        name="abono"
                        value={dataForm.abono}
                        onChange={handleChange}
                        className="form__input" 
                        type="number" 
                        placeholder="Abono" />
                        <BiDollar className="form__inputIcon"/>
                    </div>
                    <div className="form__inputs form__inputs-presupuesto form__input-required">
                        <input 
                        name="presupuesto"
                        value={dataForm.presupuesto}
                        onChange={handleChange}
                        className="form__input" 
                        type="number" 
                        placeholder="Presupuesto" />
                        <BiDollar className="form__inputIcon"/>
                    </div>
                    <div className="form__inputs form__inputs-status form__input-required">
                        <select 
                        name="estatus"
                        value={dataForm.estatus}
                        onChange={handleChange}
                        onClick={() => arrowClickSelect()} 
                        className="form__input form__input-select" >
                            <option value="Terminado">Terminado</option>
                            <option value="En Proceso">En Proceso</option>
                        </select>
                        <span ref={refIArrow} className="form__inputIcon">
                            <SlArrowDown className="form__input-select-arrow"/>
                        </span>
                    </div>
                    <div className="form__inputs form__inputs-status form__input-required">
                        <label className="form__label">Pago Completo</label>
                        <div className="form__inputs-statusRadios">
                            <input 
                             value="Completado" 
                             onChange={handleChangeCheck}
                             id="check" 
                             className="form__inputs-statusRadio form__inputs-statusRadio1" 
                             type="radio" 
                             name="pago_completado" />

                            <input 
                            onChange={handleChangeCheck}
                            value="Pendiente" 
                            id="process" className="form__inputs-statusRadio form__inputs-statusRadio2" type="radio" 
                            name="pago_completado" 
                            />
                            <input 
                            onChange={handleChangeCheck}
                            value="Cancelado" 
                            id="cancel" 
                            className="form__inputs-statusRadio form__inputs-statusRadio3" type="radio" 
                            name="pago_completado" />

                            <label htmlFor="check" className="labels-radio labels-radio1">
                                <Clock type={"check"} size={30} color={"#00ff00"}/>
                            </label>
                            <label htmlFor="process" className="labels-radio labels-radio2">
                                <Clock type={"process"} size={30} color={"#399ccd"}/>
                            </label>
                            <label htmlFor="cancel" className="labels-radio labels-radio3">
                                <Clock type={"cancel"} size={30} color={"#cf1010"}/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="panel-registros">
                <div className="panel-registros__ajustes">
                    <h2 className="panel-registros__title">Ajustes</h2>
                    <div className="panel-registros__controlPanel-restauraciones">
                        <label className="panel-registros__controlPanel-restauracionesTitle">Varias Restauraciones</label>

                        <label htmlFor="sweetCheck" className="sweetCheck">
                            <input onChange={(e) => setMasRestaruacionex(e.target.checked)} id="sweetCheck" className="sweetCheck__input"type="checkbox" />
                            <div className="sweetCheck__circle"></div>
                        </label>    
                    </div>
                    {mostrarRestauracione()}
                </div>
                <div className="panel-registros__submitContainer">
                    <input className="panel-registros__submit" type="submit" value="Crear Registro" /* onClick={(e) => crearRegistro(e)} *//>
                </div>
            </div>
        </form>
    </div>
  )
}

export default FormsRegistro;