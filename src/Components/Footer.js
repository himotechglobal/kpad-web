import React,{useState} from 'react'
import Img7 from "./Images/img7.png";
import Img8 from "./Images/img8.png";
import Img9 from "./Images/img9.png";
import { Link } from 'react-router-dom';
function Footer() {

 
  return (
    <>
          <section className="wrap-6">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bag-25">
                <a href="https://t.me/KlaytnPad"><img src={Img7} alt="" /></a>
                <a href="https://t.me/KlaytnPadAnn"><img src={Img7} alt="" /></a>
                <a href="https://medium.com/@KlaytnPad"><img src={Img8} alt="" /></a>
                <a href="https://twitter.com/KlaytnPad"><img src={Img9} alt="" /></a>
                <a href="https://discord.gg/WfzypA9k4W"><i class="bi bi-discord"></i></a>
              </div>
              <div className="col-md-12">
             
             <div className="bag-66">
             <Link to="/PDF" target="_blank" rel="noopener noreferrer">KpadPaper</Link>
             <Link to="/PDF1" target="_blank" rel="noopener noreferrer">KpadPitchDeck</Link>
             </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer