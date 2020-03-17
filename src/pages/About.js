import React from "react";

function About(){
    return(
        <div className=" pb-5 pl-5 pr-5 touch-top">  
        <div className="container containerB">
        
        <div className="row">
              <div className="col-md-12">
                  <nav className="navbar navbar-expand-md navbar-light px-0 ">
                      <h1 className="align my-border fColor pl-4">About Me</h1>
                        <div className="navbar-collapse  justify-content-center my-border" id="navbarNav">
                            <ul className=" navLinks navbar-nav ml-auto">
                              <li className="nav-item">
                                <a className="nav-link border-right" href="assets/images/Abigial_DeVries_Resume.pdf"target="_blank" >Resume <span className="sr-only"></span></a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link border-right" href="https://github.com/ald2424"target="_blank"rel='noreferrer noopener'>GitHub</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/abigail-devries-9734ba190/"target="_blank"rel='noreferrer noopener'>LinkedIn</a>
                              </li>
                            </ul>
                          </div>
                        </nav>
              </div>
        </div>
        
        <div className="row sing-post no-gutters pW">
            <div className="col-sm-12">
                 <div className="image-wrapper float-left pr-3 wrapper">
                  <img className="img-fluid mt-5 pt-2 mr-3 ml-5"src={require("../assets/images/portfolio-about-me.jpg")} alt="portfolio picture"    width="220" height="260"/>
                  </div>
              <div className="single-post-content-wrapper unwrap p-5">
              <p>
                  I am a student of the UNC coding bootcamp with some background experience in both front end and back end languages. I am eager to sharpen my skills and continue my learning so I can become a successful developer.  My past experience working with front end and back end languages comes from a coding certification I aquired while working towards a Bachelor's degree in computer science. I found that I thoroughly enjoyed learning how to code despite how challenging it can be at times.  I look forward to continuing my education in order to pursue my goal of becoming a full stack developer. 
              </p> 
              <p>     
       Aside from my coding bootcamp course, I work full time at a Toyota dealership as a Delivery Coordinator.  My job revolves around ensuring that the new car customers have had an excellent buying experience.  My primary task is to greet the customer with their new keys and go over all of the functions and features with the customer to familiarize them with their new vehicle.  I also work part time as a horseback riding instructor.
              </p>
              <p>
       Working two jobs while completing a bootcamp and finishing my Bachleor's degree does not leave me with much free time.  However, I make sure to put time away each week to do the things I love.  I have a 10 year old daughter and every Thursday, we spend some bonding time doing our favorite pastime activity- horseback riding.  I also love to watch football (Go Panthers!) and running.
              </p>
            </div>
              
           </div>
          </div>
      </div> 
   </div>
   
    )
}

export default About;