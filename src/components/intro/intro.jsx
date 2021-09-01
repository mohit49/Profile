
import React, { useEffect, useRef } from 'react'
import './intro.scss';
import {init} from 'ityped';
export default function Intro() {
    const textRef = useRef()
    useEffect(()=>{
        init(textRef.current,{
            showCurser: false,
            strings:['Graphics','UI', 'React','AEM']
        })
    },[])
    return(
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='image-container'>
                    <img src="https://www.logicspice.com/app/webroot/img/images/man_slide.png" alt='man'/>
                </div>
            </div>
            <div className='right'>
                <h1>Jhon Deo !</h1>
                <h2>Portfolio <span ref={textRef}></span></h2>

            </div>
        </div>
    )

}

