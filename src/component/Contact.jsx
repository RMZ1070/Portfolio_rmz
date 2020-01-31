import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {

    return (
        <div className='row glo' id='gl'>
            <div className='col-6 chem'>
                <h2><strong>Get in Touch</strong></h2>
                <hr className='coulo' />
                <hr />
                <ul>
                    <li><i class="fas fa-location-arrow fa-1x"></i>  Location : <span>bruxelles,Anderlecht,Aumale</span></li>
                    <li><i class="fas fa-phone-volume fa-1x"></i> Phone : <span>+32486034966</span></li>
                    <li><i class="fas fa-globe fa-1x"></i>  Website : <span>MonAdresseSiIlExiste.com</span></li>
                    <li><i class="fab fa-twitter-square"></i>  Twitter : <span>@Rmz1070</span></li>
                    <li><i class="fab fa-facebook fa-1x"></i>  Facebook : <span>@Ramzichab</span></li>
                    <li><i class="fab fa-instagram fa-1x"></i>  Instagram : <span>@Ramzichab1070</span></li>
                    <li><i class="fab fa-whatsapp fa-1x"></i>  WhatsApp : <span>+32486034965</span></li>
                </ul>
            </div>
            <div className='col-6 chom'>
                <input placeholder="Nom" tye="text" />
                <input placeholder="E-mail" type="text" />
                <input placeholder="Téléphone" type="text" />
                <input placeholder="Commentaire" type="text" />
                <button>Envoyer</button>

            </div>
        </div>
    )
}
export default Contact