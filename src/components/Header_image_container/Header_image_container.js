import React from 'react';
import Button from 'react-bootstrap/Button';
import './Header_image_container.css';

const header_image_container = () =>{
    return (<div id="header_image_container">
        <div id="header_image">
            <div id="header_image_content">
                <div id="header_text">Üzletünkben több mint <b>10000 lámpa</b></div>

                <Button variant="success">MEGNÉZEM</Button>

            </div>
        </div>
    </div>);
}

export default header_image_container;