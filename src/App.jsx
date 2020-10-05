import React from 'react';
import SlotM from './Slotmach';

const App = () => {
    return(
         <>
            <h1 className = "heading">🎰 Welcome to slot machine game 🎰 </h1>
        
           <SlotM x='😄' y='😄' z='😄'/> 
           <SlotM x='😄' y='💗' z='😄' /> 
           <SlotM x='🚁' y='🚴' z='🚢' /> 
           <SlotM x='👍' y='👍' z='👍' /> 
         
         </>
         
    )
};

export default App;