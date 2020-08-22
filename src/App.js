import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['programing hero', 'mridul', 'khan', 'payel'];
  return (
    <div className="App">
      <header className="App-header">
        <p>my first react work</p>
        <MovieCounter></MovieCounter>
        {
          nayoks.map(naok => <Nayok name={naok}></Nayok>)
        }

        <Nayok name={nayoks[0]}></Nayok>
        <Nayok name="alia"></Nayok>
        <Nayok name={nayoks[3]}></Nayok>
        <Nayok name={nayoks[1]}></Nayok>

      </header>
    </div>
  );
}
function MovieCounter(){
  const [count, setCount]= useState(2);
  const handleClick = () => setCount(count+1);
  return(
    <div>
        <h4>number of the movie {count}</h4>
        <button onClick={handleClick}>add movie</button>
        <MovieDisplay movie={count}></MovieDisplay>
        <MovieDisplay movie={count + 10}></MovieDisplay>
        <MovieDisplay movie={count + 20}></MovieDisplay>
        <MovieDisplay movie={count * 2}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return <h4>movie {props.movie} </h4>
}

function Nayok(props){
  const nayokStyle = {
    border:'1px solid gold',
    margin:'30px',
    padding:'20px',
    backgroundColor:'gray',
    borderRadius:'15px'
  }
  return(
    <div style={nayokStyle}>
      <h1>who {props.name}</h1>
      <p> am you dad</p>
    </div>
  )
}



export default App;
