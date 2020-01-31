import React from 'react'

const Service = () => {



    return (
        <div className='dep'>
            <div className='row'>
                <div class="card text-white bg-info mb-3 full col-lg-4 col-sm-12" id='ful'>
                    <div class="card-header"><span>01</span></div>
                    <div class="card-body">
                        <h5 class="card-title"><strong>Web Development</strong></h5>
                        <p class="card-text">Web development is the work involved in developing a web site for the Internet...</p>
                    </div>
                </div>
                <div class="card text-white bg-info mb-3 full col-lg-4 col-sm-12" id='ful'>
                    <div class="card-header"><span>02</span></div>
                    <div class="card-body">
                        <h5 class="card-title"><strong>Web Organize</strong></h5>
                        <p class="card-text">Graphic organizers guide learners’ thinking as they fill in and build upon a visual map or diagram. Graphic organizers are some of the most effective visual learning...</p>
                    </div>
                </div>
                <div class="card text-white bg-info mb-3 full col-lg-4 col-sm-12" id='ful'>
                    <div class="card-header"><span>03</span></div>
                    <div class="card-body">
                        <h5 class="card-title"><strong>Brand Identity</strong></h5>
                        <p class="card-text">Le capital-marque (brand-equity) se définit comme la valeur ajoutée qu’une marque apporte à un produit.Le capital-marque peut être positif ou négatif....</p>
                    </div>
                </div>

            </div>

            <div class="pos row">
                <div className='col-8 pld'>
                    <h2><strong>In a <span>short time</span> , I have been able to achieve excellence in all areas of app and web development.</strong></h2>
                    <p>I provide cost-effective and high quality products to meet our Clients’ needs of timely delivery World Wide. I want to be local in a global world to be where our Customers need our services.</p>

                </div>
                <div className='place col-3'>
                    <h3>Html: <span>85%</span></h3>
                    <div className="progress">
                        <div className="progress-bar progress-bar-success cc"></div>
                    </div>
                    <h3>Css: <span>65%</span></h3>
                    <div className="progress">
                        <div className="progress-bar progress-bar-info dd"></div>
                    </div>
                    <h3>Javascript: <span>60%</span></h3>
                    <div className="progress">
                        <div className="progress-bar progress-bar-warning ee"></div>
                    </div>
                    <h3>Bash: <span>75%</span></h3>
                    <div className="progress">
                        <div className="progress-bar progress-bar-danger ii"></div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Service