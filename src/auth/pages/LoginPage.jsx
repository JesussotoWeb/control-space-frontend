import "../../assets/styles/global.css";
import logo from '../../assets/imgs/Logo.png';
import { useState } from "react";


function Login(){
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const validarUsuario = (e) => {
        e.preventDefault();

        const dataApi = {
            usuario: "Jesus",
            pass: "Soto"
        }

        if(user === dataApi.usuario && pass === dataApi.pass)
        {
            console.log("Bievenido");
            
        }else {
            console.log("ERROR");
        }

        
    }
    
    return(
        <div className="login">
            <div className="login__background_image">
                <h4 className="login__background_title">El espacio de trabajo a tu alcance <br/> en cualquier lado del mundo</h4>
                <img className="login__logo" src={logo} />
            </div>
            <div className="login__form_container">
                <h2 className="login__form_title">BIENVENIDO</h2>
                <form onSubmit={validarUsuario} className="form">
                    <input onChange={(e) => setUser(e.target.value)} className="form__text" type="text" placeholder="Usuario" />
                    <input onChange={(e) => setPass(e.target.value)} className="form__pass" type="password" placeholder="Pass*****" />

                    <button className="form__submit">Acceder</button>
                    <a className="form__restore_pass">Perdí mi contraseña</a>
                </form>
            </div>
        </div>
    )
}

export default Login;