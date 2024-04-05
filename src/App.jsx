// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';



function App() {
  return (
  <div className="App">
    <h1>this is tictoctoe game</h1>
   <Board></Board>
   

  </div>
  )
}

function Board(){
  const [marks, setMarks] = useState([0,0,0,0,0,0,0,0,0]);
  const [player, setPlayer] = useState(1);
  const changeMark = (i) =>{
   const m = [...marks];
   m[i] = 1;
   setMarks(m);
   setPlayer(player === 1 ? 2 : 1);
  }
  return(
    <div className="Board">
      
      <div>
      <Block mark={marks[1]} position={0} changeMark={changeMark}></Block>
      <Block mark={marks[2]} position={1} changeMark={changeMark}></Block>
      <Block mark={marks[3]} position={2} changeMark={changeMark}></Block>
      </div>
      <div>
      <Block mark={marks[4]} position={3} changeMark={changeMark}></Block>
      <Block mark={marks[5]} position={4} changeMark={changeMark}></Block>
      <Block mark={marks[6]} position={5} changeMark={changeMark}></Block>
      </div>
      <div>
      <Block mark={marks[7]} position={6} changeMark={changeMark}></Block>
      <Block mark={marks[8]} position={7} changeMark={changeMark}></Block>
      <Block mark={marks[9]} position={8} changeMark={changeMark}></Block>
      </div>
    </div>
  )
}

function Block({mark, changeMark, position}){
  return(
    <div className={`Block marks${mark}`}
    onClick={e=>changeMark(position)}></div>

     
  )
}

export default App;
