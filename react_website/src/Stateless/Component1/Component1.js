import React from 'react';
import Contact from './Contact';
import ContactData from '../../Apis/ContactData';
function Component1(){   
   
    const sahil = ContactData.map(item =><Contact key={item.id} data={item}/>)
    return(   
            <div>
                {sahil}
            </div>
        )
    
}
export default Component1;