import React from 'react';
import Lamp from './lampaNagy.png'
import './Lamp.css'

const lamp = () =>
{
    return (

        <div class="container">
    	<div class="row">
    		<div class="col">
    			<img id="nagylampa" src={Lamp}  alt="nagylampa"/>
    		</div>
             <div class="col">
             	<div id="text">
             		<h2>ESZTÉTIKUS <br/> modern desgin</h2>
             		<p> Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur</p>

             		<button type="button" class="button1">Részletek</button>

             </div>
             </div>
    </div>
    </div>
    );
}
export default lamp;