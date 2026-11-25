
import { useState } from "react";

  

// EJERCICIO ESTADOS CUADRADO

  
   function Cadrado({valor, onCadradoClick}){
   
   
     return <button onClick={onCadradoClick}  className= "square">{valor}</button>
   }
  
  
  function calcularGanador(cadrados){
    const ganadoras = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    let ganador = null
    for(let i = 0; i<ganadoras.length; i++){
      const [a,b,c] = ganadoras[i];
     
      if(cadrados[a] && cadrados[a] == cadrados[b] && cadrados[a] == cadrados[c]){
        ganador = cadrados[a]
      }
      
    }
    return ganador
  }


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
      setXTurno(!xTurno);
      

    }

    function saltarA(movemento){
      setMovementoActual(movemento);
      setXTurno(movemento%2 === 0)
    }

    // const movementos = historial.map((m, i) => <button> {i == 0 && "Ir al inicio del juego"} {i != 0 && "Ir al movimiento #" + i} </button> 
    const movementos = historial.map((cadrados, index) => {
      return (
          <li key={index}>
            {movementoActual === index ? <div> Estás en el movimiento {movementoActual +1}
            
          </div> : 

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
  
  function Taboleiro({xTurno, cadrados, onXogar}) {
   
  // const [cadrados, setCadrados] = useState(Array(9).fill(null));

     const ganador = calcularGanador(cadrados);
      let estado;

      if(ganador){
        estado = "Ganador: " + ganador;

      } else {
        estado = "Seguinte xogador: " + (xTurno? "X" : "O");
      }

   function handleClick(i){
      const novosCadrados = cadrados.slice(); // se usa para copiar el array
     
      if(xTurno){
        novosCadrados[i] = "X";
      }else {
        novosCadrados[i] = "O";
      }
     
      
      onXogar(novosCadrados)
     
   }

   const totalDivs = [0, 3, 6]
   
   return (
     <>

        <div>{estado}</div>
        <div className="board-row">
          {totalDivs.map((d, index) => (cadrados.slice(totalDivs[index], (totalDivs[index + 1] -1))).map((c, i)=> <Cadrado valor={c} onCadradoClick={() => handleClick(cadrados[(index+1)*i])}></Cadrado>))}
         
         {/* <Cadrado valor={cadrados[0]} onCadradoClick={() => handleClick(0)}/>
         <Cadrado valor={cadrados[1]  }onCadradoClick={() => handleClick(1)}/>
         <Cadrado valor={cadrados[2] }onCadradoClick={() => handleClick(2)}/> */}
       </div>
       <div className="board-row">
         <Cadrado valor={cadrados[3]}onCadradoClick={() => handleClick(3)} />
         <Cadrado valor={cadrados[4]}onCadradoClick={() => handleClick(4)}/>
         <Cadrado valor={cadrados[5]}onCadradoClick={() => handleClick(5)}/>
       </div>
       <div className="board-row">
         <Cadrado valor={cadrados[6]}onCadradoClick={() => handleClick(6)}/>
         <Cadrado valor={cadrados[7]}onCadradoClick={() => handleClick(7)}/>
         <Cadrado valor={cadrados[8]}onCadradoClick={() => handleClick(8)}/>
       </div> 
     </>

   );
  }
  





