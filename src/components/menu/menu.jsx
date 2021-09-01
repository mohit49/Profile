import React from 'react';
import './menu.scss'

export default function Menu(props) {
    const closeMenu = () => {
        
        props.menuStateIn(!props.menuOpen)
       };
return(
    <div className={`side-panel-menu ${props.menuOpen && 'menu-active'}` }>
    <ul>
        <li><a href='#intro' onClick={closeMenu}>Intro</a></li>
        <li><a href='#works' onClick={closeMenu}>Work</a></li>
        <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
   
    </ul>
    </div>
)
}