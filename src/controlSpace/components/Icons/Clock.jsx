import {RxCounterClockwiseClock} from "react-icons/rx";
import {BsCheck2Circle} from "react-icons/bs";
import {MdOutlineCancel} from "react-icons/md";


const Clock = ({type, size, color}) => {
    const iconTypes = {
        "check": <BsCheck2Circle style={{fontSize: size + "px", color: color}}/>,
        "process": <RxCounterClockwiseClock style={{fontSize: size + "px", color: color}}/>,
        "cancel": <MdOutlineCancel style={{fontSize: size + "px", color: color}}/>
    }

  return (
    <span>
        {
            iconTypes[type]
        }
    </span>
  )
}

export default Clock;