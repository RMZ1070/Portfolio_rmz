import React from 'react'
import Img from '../images/ims.jpg'

const About = () => {
    
    return (
        <div className='tout' id ='out'>
            <div className ='tit' >

                <h2>About Me</h2>
                <hr />
                <hr />
            </div>
            <div className=' row conte'>
                
                <div className='col-3 col-s-3 flash'>
                    <img className='ss' src={Img} alt="" />
                </div>
                <div className='col-4 col-s-4'>
                    <span className='hhh'>Je suis Ramzi Chabli et <h3 className='spa'>je suis full stack developer</h3></span>
                    <p className='para'> Salut! Je m'appelle <span className='cou'>Ramzi Chabli.</span> Je suis développeur Web et je suis très passionné et dévoué de mon travail. Avec 7 mois d'expérience en tant que développeur Web professionnel, j'ai acquis les compétences et les connaissances nécessaires pour faire de votre projet un succès.
J'apprécie chaque étape du processus de conception, de la discussion et de la collaboration.</p>
                    <div className='row bo'>
                        <ul className='col-6 col-s-6 spo'>
                            <li>Date d'anniversaire: <span>10/09/1996</span></li>
                            <li>Localisation: <span>Bruxelles,anderlecht</span></li>
                            <li>Etude: <span>Molengeek</span></li>
                            <li>Mail: <span>xfa1070@hotmail.com</span></li>
                                
                        </ul>
                        <ul className='col-6 col-s-6 spo'>
                            <li>Age:<span>23 ans</span></li>
                            <li>mes points d'interet: <span>gaming</span></li>
                            <li>Niveau d'etude: <span>cess</span></li>
                            <li>Numero de telephone: <span>+32486034965</span></li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                        <li>
                            <button type="button" class="btn btn-danger">Download CV</button>
                            <button type="button" class="btn btn-danger">Send Message</button>
                        </li>
                    </ul>

                </div>
                </div>
                

            </div>
        </div>
    )
}

export default About