import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPhone  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Header.css'


const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <div className="left">
              <h1>Magali Jouan,<br /><span className="purple">responsable pédagogique</span>.</h1>
              <p>Forte d'une expérience de 15 années et ayant occupé différents postes telles que développeuse, cheffe de projet, enseignante ou encore responsable pédagogique, ma passion pour le digital reste mon unique ligne conductrice.</p>
              <div className="buttons">
                <a href="cv_magali_jouan.pdf" class="btn btn-pink" target="_blank">Télécharger CV</a>
                <a href="mailto:jouan.magali@gmail.com" class="btn">Contactez-moi</a>
              </div>
              <div className="icons">
                <a href="https://www.linkedin.com/in/jouan-magali/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} className="fa-linkedin" />
                </a>
                <a href="https://github.com/mjouan23" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="fa-github" />
                </a>
                <a href="tel:0662412212">
                  <FontAwesomeIcon icon={faPhone} className="fa-phone" />
                </a>
              </div>
          </div>
          <div className="right">
              <div className="avatar">
                <img className="avatar" src="./avatar.png" alt="Photo Magali JOUAN" />
              </div>
          </div>
        </div>
        {/* <FontAwesomeIcon icon={faChevronDown}  className="fa-chevron-down" /> */}
      </div>
    </header>
  )
}

export default Header