import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';

import '../../assets/styles/dashboard.css';
import "../../assets/styles/ModalsResumenEstatus.css";
import "../../assets/styles/Galeria.css";
import "../../assets/styles/PagosFaltantes.css";


import logo from '../../assets/imgs/logo-2.png';
import logo2 from '../../assets/imgs/LOG.png'

import { RiLayoutGridFill } from 'react-icons/ri';
import { AiOutlineBars } from "react-icons/ai";


function SidebarPanel() {

  const [showColapse, setShowColapse] = useState("");
  const refAside = useRef();
  const refLogo = useRef();

  useEffect(() => {
   setShowColapse(true);
  }, [0])
  
   
  const setShowBtn = () => {
    if(showColapse){
      setShowColapse(false);

      refAside.current.classList.add("dashboard__panel_collapse");
      refLogo.current.setAttribute("src", logo2);
      console.log("TRUE");
    }else{
      setShowColapse(true);

      refAside.current.classList.remove("dashboard__panel_collapse");
      refLogo.current.setAttribute("src", logo);

      console.log("FALSE");
    }
  }

  

  return (
    <div ref={refAside} className="dashboard__panel">
      <div className='dashboard__panel_container'> 
        <div className="dashboard__logo_container">
          <img ref={refLogo} src={logo} className="dashboard__logo"/>
        </div>
        <nav>
          <ul className='nav'>
            <li className='nav__item'><Link className='nav__item_link' to="/dashboard">Resume</Link></li>
            <li className='nav__item'><Link className='nav__item_link' to="/registrar">Registrar</Link></li>
            <li className='nav__item'><Link className='nav__item_link' to="/buscar">Buscar</Link></li>
            <li className='nav__item'><Link className='nav__item_link' to="/configuracion">Configuración</Link></li>
            <li className='nav__item'><Link className='nav__item_link' to="/perfil">Mi Perfil</Link></li>
            <li className='nav__item'><Link className='nav__item_link' to="/informe">Generar Informe</Link></li>
            <li className='nav__item'><Link className='nav__item_link' to="/salir">Salir</Link></li>
          </ul>
        </nav>
      </div>
      <div className='footer'>
        <Link className='footer__help'>¿NECESITAS AYUDA?</Link>
        <i onClick={setShowBtn} className='footer__btn_colapse'>
        {
          showColapse ? <RiLayoutGridFill/>  : <AiOutlineBars />
        }
        </i>
      </div>
    </div>
  )
}

export default SidebarPanel;