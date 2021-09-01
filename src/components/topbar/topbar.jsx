import React from 'react'
import './topbar.scss'
import Menu from "../menu/menu";
export default function Topbar(props) {
    const makeMenuActive = () => {
        props.menuState(!props.menuActive)
       };
    return(
        <div className={`topbar ${props.menuActive && 'active'}` }>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro'>UI</a>
                    <ul className='user-links'>
                        <li>Contact : 9717944941</li>
                        
                        <li>mailTo: mohitanim@gmail.com</li>
                    </ul>
                </div>
                <div className='right'>
                    <div className='humberger'  onClick={makeMenuActive}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                  </div>

                </div>
            </div>
           <Menu menuOpen={props.menuActive} menuStateIn = {props.menuState}/>
        </div>
    )

}
