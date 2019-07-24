import React, { Component }  from 'react';
import './App.css';
import Menu_container from '../components/Menu_container/Menu_container';
import Header_image_container from '../components/Header_image_container/Header_image_container';
import Cards from '../components/Cards/Cards';
import Lamp from '../components/Lamp/Lamp';


class App extends Component {
 render(){
  return (
    <div className="App">
    <Menu_container />
    <Header_image_container />
    <h2>Kiemelt terkmékek</h2>
    <Cards />
    <Lamp />
    </div>
    
   );
}
}
export default App;
