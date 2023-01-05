import React from "react"
import cardImg from './images/Shelbin.png'
import buttonImg from './images/Mail.png'

export default function Info() {
    return ( 
        <div className = "info" >
            <img className="info-img" src= {cardImg} alt='shelbin'/>
            <h1 className="info-header"> Shelbin M Biju </h1>   
            <p className="info-para"> Frontend Developer </p>   
            <a className="info-web" href="https://shelbinshells.website">shelbinshells.website</a>
            <button className="info-button"> 
                <img className="info-button-mail" src={buttonImg} alt='mail'/>
                <a className="info-button-link" href="shelbinshells@gmail.com">Email</a> 
            </button > 
        </div> 
        )
}