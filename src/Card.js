import React from 'react';
import image from './puce-card.png';
import imageright from './image-right.png';
import './Card.css';



const Card=() =>{
 return  <div className="card">
       <div className="main">
          <div className="exemple">
                  <h1> <strong className="title">CREDIT CARD </strong></h1>
          </div>
          <div className="image">
            <img className="puce" src={image} alt=""/>
          </div>
          <div className="rib">
             <span className="chiffre">4123  4567  8910 1112</span>
          </div>
        
          <div  className="digits">
            
            <div className="first-digit"><strong> 5422</strong></div>
            <div className="left">
            <div className="second-digit"> VALID <br/>THRU </div>
            <div className="third-digit">
                  <div className="upper-labels">MONTH/YEAR</div>
                  <div className="date" title="01/17"><strong>01/17</strong></div>
            </div>
            </div>
            
        </div>
        <div className="footer">
             <h3 className="titre2">CARDHOLDER</h3>
          </div>
          <div className="image-right">
            <img className="right" src={imageright} alt=""/>
          </div>
          
   </div>
   </div>
}

export default Card;
