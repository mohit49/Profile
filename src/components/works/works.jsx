import React from 'react'
import Portfolio from '../portfolio/portfolio'
import './works.scss'
export default function Works() {
    const workArray = [{
        title:'IWC',
        imageUrl:'http://myfrontend.work/wp-content/uploads/2021/05/Screenshot-2021-05-26-at-2.36.32-AM-1536x1242.png',
        disCription:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.'
    },
    {
        title:'Manforce',
        imageUrl:'http://myfrontend.work/wp-content/uploads/2021/05/manforce.gif',
        disCription:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.'
    },
    {
        title:'Pannarai',
        imageUrl:'http://myfrontend.work/wp-content/uploads/2021/05/Screenshot-2021-05-26-at-11.15.17-PM-1024x555.png',
        disCription:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.'
    },
    {
        title:'VCA',
        imageUrl:'http://myfrontend.work/wp-content/uploads/2021/05/manforce.gif',
        disCription:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.'
    },{
        title:'IWC',
        imageUrl:'http://myfrontend.work/wp-content/uploads/2021/05/Screenshot-2021-05-26-at-2.36.32-AM-1536x1242.png',
        disCription:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.'
    },
    {
        title:'Manforce',
        imageUrl:'http://myfrontend.work/wp-content/uploads/2021/05/manforce.gif',
        disCription:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.'
    },
    {
        title:'Pannarai',
        imageUrl:'http://myfrontend.work/wp-content/uploads/2021/05/Screenshot-2021-05-26-at-11.15.17-PM-1024x555.png',
        disCription:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.'
    },
    {
        title:'VCA',
        imageUrl:'http://myfrontend.work/wp-content/uploads/2021/05/manforce.gif',
        disCription:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.'
    }]
    return(
        <div className='works' id='works'>
            <h2>Works</h2>
            <ul className='work-container'>{
  workArray.map((ele,index)=>(
      <Portfolio
      key={index}
      title={ele.title}
      imageUrl={ele.imageUrl}
      disCription={ele.disCription}

      ></Portfolio>

  ))
            }
          
            </ul>
        </div>
    )

}
