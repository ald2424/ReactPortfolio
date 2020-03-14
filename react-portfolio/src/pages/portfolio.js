import React from 'react';

function Portfolio() {
    return (
        <div class="container-fluid container-bg p-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="fColor my-border">Portfolio</h1>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4 my-2 imgCaption">
                        <div class="container mx-5">
                            <a href="https://alyssabarnett06.github.io/Project1/" target="_blank">
                                <img class="  d-flex" src={require("./assets/images/Spontanago.png")} alt="coming soon" />
                                <div class="caption  d-flex justify-content-center">
                                    <h6 class="bColor text-white width350 text-center">Spontanago</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4 my-2n imgCaption">
                        <div class="container mx-5">
                            <a href="https://ald2424.github.io/weather-dashboard/" target="_blank">
                                <img class="d-flex" src={require("./assets/images/weatherDash.png")} alt="coming soon" />
                                <div class="caption  d-flex justify-content-center">
                                    <h6 class="bColor text-white  width350 text-center">Weather Dashboard</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 my-2 imgCaption">
                        <div class="container mx-5">
                            <a href="https://ald2424.github.io/jsQuiz/" target="_blank">
                                <img class="d-flex" src={require("./assets/images/jsQuiz.png")} alt="javascript Quiz" />
                                <div class="caption  d-flex justify-content-center">
                                    <h6 class="bColor text-white  width350 text-center">Javascript Quiz</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4 my-2 imgCaption">
                        <div class="container mx-5">
                            <a href="https://obscure-beyond-14281.herokuapp.com/" target="_blank">
                                <img class="d-flex" src={require("./assets/images/note_taker.png")} alt="Note Taker" />
                                <div class="caption  d-flex justify-content-center">
                                    <h6 class="bColor text-white  width350 text-center">Note Taker</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 my-2  imgCaption">
                        <div class="container mx-5">
                            <a href="https://radiant-everglades-64199.herokuapp.com/" target="_blank">
                                <img class="d-flex" src={require("./assets/images/eat-da-burger.png")} alt="eat-da-burger" />
                                <div class="caption d-flex justify-content-center">
                                    <h6 class="bColor text-white width350 text-center">Eat-Da-Burger!</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4 my-2  imgCaption">
                        <div class="container mx-5">
                            <a href="https://aqueous-refuge-48419.herokuapp.com/" target="_blank">
                                <img class="d-flex" src={require("./assets/images/shelfie.png")} alt="Shelfie" />
                                <div class="caption d-flex justify-content-center">
                                    <h6 class="bColor text-white width350 text-center">Shelfie</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Portfolio;