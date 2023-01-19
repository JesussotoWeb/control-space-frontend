import { Link } from "react-router-dom";
import {IoIosEye} from "react-icons/io";

const BotonEje = ({url ,customClass, size, top, left}) => {
  return (
    <Link to={`/dashboard/ver/${url}`} 
    className={customClass} 
    style={{fontSize: size + "px", top: top + "px", left: left + "px"}}>
      <IoIosEye/>
    </Link>
  )
}

export default BotonEje;