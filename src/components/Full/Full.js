import React from 'react';
import No from './no.png';
import './Full.css';

const full = () =>{

    return (
        <div class="full">
<div class="container">
       <div class="row">
         <div class="col">
           <div class="tags">
             <button class="button2" type="rounded">Vélemények</button>
             <button class="button3" type="rounded">Értékelések</button>
           </div>
         </div>
       </div>

       <div class="row">
         <div class="col">
           <div class="opinion">
             <div class="opinion__image" > <img src={No} alt="no_arckep" /> </div>
             <div class="opinion__text">
               <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam,<br />
                 eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                 Nemo enim ipsam voluptatem <br />
                 quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi <br>
                 nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</p>
                 <p class="opinion__text__name">Példa Kata</p>
             </div>
           </div>
         </div>
       </div>

       <div class="row">
         <div class="col">
           <div class="sep-line">
             <hr />
           </div>
         </div>
       </div>

       <div class="row">
         <div class="col">
           <div class="opinion">
             <div class="opinion__image"> <img src={No} alt="no_arckep" /> </div>
             <div class="opinion__text">
               <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                 accusantium doloremque laudantium, totam rem aperiam,<div><br/>
                 eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                 Nemo enim ipsam voluptatem <br /></div>
                 quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi <br>
                 nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</p>
                 <p class="opinion__text__name">Példa Kata</p>
             </div>
           </div>
         </div>
       </div>

       <div class="row">
         <div class="col">
           <div class="sep-line">
             <hr />
           </div>
         </div>
       </div>

       <div class="row">
         <div class="col">
           <div class="more">
             <a href="" class="more__text">MÉG TÖBB</a>
           </div>
         </div>
       </div>
     </div>

<p class="inline_text">Gyakran ismétlődő kérdések</p>



<div class="row">
	<div class="col">
		<div class="first_gyik"><button type="button" class="button4"><i class="flaticon-down-arrow-1"></i>Mennyibe kerülnek  a lámpák?</button></div>
	</div>
</div>
<div class="row"> 
<div class="col">
	<div class="text1">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	</div>
</div>
</div>
<div class="row">
	<div class="col">
		<div class="first_gyik"><button type="button" class="button4"><i class="flaticon-down-arrow"></i>Mennyibe kerülnek  a lámpák?</button></div></div>
	</div>

<div class="row">
	<div class="col">
		<div class="first_gyik"><button  type="button4" class="button4"><i class="flaticon-down-arrow"></i>Mennyibe kerülnek  a lámpák?</button></div></div>
	</div>


</div>
    );
}

export default full;