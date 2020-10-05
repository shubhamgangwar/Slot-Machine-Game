import React from 'react';


const SlotM = (props) => {

    let x = props.x;
    let y = props.y;
    let z = props.z;

    if (x==y && y==z) {
        return(
        <>
        <div className = "slots">
          <h1>  {x} {y} {z} </h1>
          <h2> Matching</h2>
          
        </div>   
        </>

        )
        
    } else {
        return(
            <>
            <div className = "slots">
              <h1>  {x} {y} {z} </h1>
              <h2> Not matching</h2>
              
            </div>
               
            </>
    
            )
       }
    }

    export default SlotM;