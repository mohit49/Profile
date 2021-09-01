import React from 'react';
import List from '../list/list';
export default function Portfolio(props){

return(
    <List>
        
         <h3>{props.title}</h3>
         <div className='imsgeCont'>
          <img src={props.imageUrl} alt='portfolio image'/>
          </div>
          <p>{props.disCription}</p>
         
    </List>
)
}