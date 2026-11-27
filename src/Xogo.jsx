import { useState } from "react";
import Taboleiro from './Taboleiro.jsx'


export default function Xogo(){
   
    const [historial, setHistorial] = useState([Array(9).fill(null)])
    const [movementoActual, setMovementoActual] = useState(0);
    const xTurno = movementoActual % 2 === 0;
    const cadradosActuais= historial[movementoActual];
   

    function handleXogo(novosCadrados){

      //TODO
      const novoHistorial = [...historial.slice(0, movementoActual+1), novosCadrados];
      setHistorial(novoHistorial);
      setMovementoActual(novoHistorial.length - 1)
      
      

    }

    function saltarA(movemento){
      setMovementoActual(movemento);
      
    }

    const[ascendente, setAscendente] = useState(false)
    const movementosOrdenados = [...historial]
    function ordenarLista(){

      
        setAscendente(!ascendente)
        setHistorial(movementosOrdenados.reverse()); 

    
      
    }

  
     const movementos=historial.map((cadrados, index) => {
      return (
          <li key={index}>
            {movementoActual === index ? <div> Estás en el movimiento {movementoActual +1}
            
          </div> 
          : 

          <button onClick={ () => saltarA(index) }>
            
            {index == 0 && "Ir al inicio del juego"}{index != 0 && "Ir al movimiento " + (index+ 1)}

          </button>

          }

        </li>

      )
    })

   


    return (
      <div className="game">
        <div className="game-board">
          
            <Taboleiro xTurno={xTurno} cadrados={cadradosActuais} onXogar={handleXogo}></Taboleiro>
        </div>
      <div className="game-info">
        
        
        <ol>
          {movementos}
        </ol>
        <button onClick={() => ordenarLista}>{ascendente ? "Pulsa para ascender" : "Pulsa para descender"}</button>
        
        
        </div>

      </div>
    );
    
  }
  
  




