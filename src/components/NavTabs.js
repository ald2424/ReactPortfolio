import React from 'react';
import { Link, useLocation } from "react-router-dom";

function NavTabs(){
    
    const location = useLocation();

    return(



      <header className="mx-auto alignIt text-center touch-bottom">
            
      <div className="container-fluid">
        <div className="container p-0">
          <nav className="navbar navbar-expand-md navbar-light px-0 ">
            <h1 className="align navbar-text bColor text-white px-5 py-3">Abigail DeVries</h1>
              <div className="navbar-collapse  justify-content-center" id="navbarNav">
                  <ul className=" navLinks navbar-nav ml-auto">
                  <li className="nav-item">
                     <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                      About
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                       Portfolio
                     </Link>
                  </li>
                  </ul>
                </div>
              </nav>
          </div>
        </div>
                
        </header>
    )
}
export default NavTabs;