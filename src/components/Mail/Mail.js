import React from 'react';
import './Mail.css'

const mail=()=>{
return (
    <div className="flex-container">
        <div className="title_items">
            <h1 id="header">HÍRLEVÉL</h1>
            <p id="paragraf">Íratkozz fel,hogy értesülj a legfrisebb <br/> akcióinkról</p>
        </div>

        <div className="input_items">

            <form className="flex">
                <div className="hirlevel">
                    <input className="input1" type="text" placeholder="Név" />
                        <input className="input2" type="text" placeholder="Email" />
                </div>
            </form>
        </div>
        <div className="button_item">
            <button type="button" className="button5">Feliratkozás</button>
        </div>
    </div>
);
}

export default mail;