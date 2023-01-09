import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { action, originals, drama, animated, comedy, horror } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>  
      <RowPost url={action} title='Action' isSmall/>  
      <RowPost url={drama} title='Drama' isSmall/>  
      <RowPost url={animated} title='Animated' isSmall/> 
      <RowPost url={comedy} title='Comedy' isSmall/>    
      <RowPost url={horror} title='Horror' isSmall/>     




    </div>
  );
}

export default App;
