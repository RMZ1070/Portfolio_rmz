import React from 'react';
import '../css/style.css';
import Nav from 'react-bootstrap/Nav';
import Img1 from '../images/profil.jpg';
import Img3 from '../images/logo.webp';
import '@fortawesome/fontawesome-free/css/all.min.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const Nave = () => {
    
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS

};

    return (
        <div className='row a'>
            <video autoPlay muted loop className='video col-1 col-s-1 '>
                <source src="./video/matrix1.mp4" type="video/mp4" />
                </video>
                <div className='cont'>
<img className='imgs' src={Img1} alt="" />
                <h1 className ='text-white'>Ramzi  <span className ='text-danger'>   Chabli</span></h1>
  <a href="" className="typewrite" data-period="2000" data-type='[ "Je Suis full stack developer", " Je suis Travailleur indépendant"]'>
    <span class="wrap"></span>
  </a>
  
                </div>
                <div className = 'con'>
                {/* className ='fas fa-chevron-down fa-2x' href = '#out' data-scroll-nav ='1' */}
                <a href="#out"><i class="fas fa-chevron-down fa-3x"></i></a>
                </div>
            
            <div className='content col-6 sha'>


                <Nav defaultActiveKey="/home" className="flex-column oh" id ='ho'>
                    <img className='imgt' src={Img3} alt="" />
                    <Nav.Link href ='#ho' className='yo' href="/home">Home</Nav.Link>
                    <Nav.Link href ='#out' className='yo' eventKey="link-1">About</Nav.Link>
                    <Nav.Link href ='#ful' className='yo' eventKey="link-2">Services</Nav.Link>
                    <Nav.Link href ='#por' className='yo' eventKey="link-3">Portfolio</Nav.Link>
                    <Nav.Link href ='#gl' className='yo' eventKey="link-4">Contact</Nav.Link>
                </Nav>
            </div>

            
                

            
        </div>

    )
    
}

export default Nave 