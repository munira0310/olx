import "./Header.css";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header py-2">
            <div className="container d-flex justify-content-between">
      <Link to = "/">  
      <img src="https://static.olx.uz/static/olxuz/naspersclassifieds-regional/olxeu-atlas-web-olxuz/static/img/fb/fb-image_redesign.png?t=21-08-01 "className="logo" alt="" />
      </Link>
      
      <div className="d-flex align-items-center text-white">
      <span className="me-3">O'z | Ru</span>   
      <FontAwesomeIcon icon={faHeart}/>
      <button className="btn text-white me-4">
      <FontAwesomeIcon icon={faUser}/>
    <strong className="ms-2"> 
    Мой профиль
    </strong>
    </button>
   
   

      </div>
            </div>
        </div>
    )
    
}

export default Header


