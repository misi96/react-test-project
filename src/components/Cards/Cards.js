import  React from 'react';
import './Card.css';
import Button from 'react-bootstrap/Button';
import Lampa from './lampa.png';


const card = () =>{

    return(
<div class="container">
	<div class="card">
    <div class="row">
    <div class="col">
        <div class="lampa"> 
        <img src={Lampa} alt="lampa" />
        <p>Kék asztali lámpa</p>
        <p class="price">2000 ft</p>
        <Button variant="success" block>Részletek</Button>
        </div>
    </div>
    <div class="col">
        <div class="lampa">
        <img src={Lampa} alt="lampa" />
        <p>Kék asztali lámpa</p>
             <p class="price">2000 ft</p>
             <Button variant="success" block>Részletek</Button>
    </div>
    </div>    
    <div class="col">
        <div class="lampa">
        <img src={Lampa} alt="lampa" />
        <p>Kék asztali lámpa</p>
             <p class="price">2000 ft</p>
             <Button variant="success" block>Részletek</Button>
    </div>
    </div>
    </div>
    </div>
    </div>
    );
}

export default card;