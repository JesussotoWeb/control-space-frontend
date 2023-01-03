import { useState, useEffect} from "react";

const Paginacion = ({pageCurrent, arrCompleto, actualizar, hojas}) => {
    const [cursorPageNumbers, setCursorPageNumbers] = useState(1);
    const [paginacionNumbersNextPrev, setPaginacionNumbersNextPrev] = useState(1);

    const page = Math.ceil(arrCompleto.length * 1 / 6);

    
    const recorrer = () => {
        const opc = [];

        for(let i = 1; i <= page; i++){
            opc.push(i)
        }
        return opc;
    }
    const prevPage = (showRestaruacionPage) => {
        if(showRestaruacionPage > 0){
            actualizar(showRestaruacionPage - 6, hojas - 6);
        }
    }
    const nextPage = (showRestaruacionPage) => {
        if(hojas < arrCompleto.length){
            actualizar(showRestaruacionPage + 6, hojas + 6);

        }
    }
   
    const verificador = (target) => {
        setCursorPageNumbers(target);
       
    }
    const verificadorEstilos = (i) => {
        if(cursorPageNumbers == i+1){
            return "paginacion__numbers_active";
        }
    }

    return(
        <div className="paginacion" >
            <button className="paginacion__btn-prev" onClick={() => prevPage(pageCurrent)}>Atras</button>
            {
                recorrer().map((conten, index) =>{
                    return(
                        <a onClick={(e) => verificador(e.target.innerHTML)} className={`paginacion__numbers ${verificadorEstilos(index)}`} key={index}>{conten}</a>
                    )
                })
            }
            <button className="paginacion__btn-next" onClick={() => nextPage(pageCurrent)}>Siguiente</button>
            
        </div>
    )
}
export default Paginacion;
