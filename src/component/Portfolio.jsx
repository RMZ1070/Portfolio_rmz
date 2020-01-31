import React from 'react'

const Portfolio = () => {

    return (
        <div class="wrapper done" id='por'>
            <h1>Portfolio</h1>
            <h2>Projet Realiser</h2>
            <div class="parent" onclick="">
                <div class="child bg-one">
                    <a href="#">Projet Emporium</a>
                </div>
            </div>

            <div class="parent right" onclick="">
                <div class="child bg-two">
                    <a href="#">Emporium</a>
                </div>
            </div>

            <div class="parent" onclick="">
                <div class="child bg-three">
                    <a href="#">Emporuim</a>
                </div>
            </div>

            <div class="parent right" onclick="">
                <div class="child bg-four">
                    <a href="#">Projet Site du Chef</a>
                </div>
            </div>

            <div class="parent" onclick="">
                <div class="child bg-five">
                    <a href="#">Projet Youcommunik</a>
                </div>
            </div>

            <div class="parent right" onclick="">
                <div class="child bg-six">
                    <a href="#">Youcommunik</a>
                </div>
            </div>
        </div>
    )
}
export default Portfolio