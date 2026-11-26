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

    // const movementos = historial.map((m, i) => <button> {i == 0 && "Ir al inicio del juego"} {i != 0 && "Ir al movimiento #" + i} </button> 
    const movementos = historial.map((cadrados, index) => {
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

    const[ascendente, setAscendente] = useState(false)
    const movementosOrdenados = [...movementos]
    function ordenarLista(){
      if(ascendente === false){
        setAscendente(true)
        return movementos = movementosOrdenados.sort()

      } else {
        setAscendente(false)
        return movementos =  movementosOrdenados.reverse()


      }
      
    }


    return (
      <div className="game">
        <div className="game-board">
          {console.log(cadradosActuais)}
            <Taboleiro xTurno={xTurno} cadrados={cadradosActuais} onXogar={handleXogo}></Taboleiro>
        </div>
      <div className="game-info">
        
        
        <ol>
          {movementos}
        </ol>
        
        </div>

      </div>
    );
    
  }
  
  




