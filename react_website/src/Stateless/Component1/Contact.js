import React from 'react';

function Contact(props){
return(
<div> 
    <img src={props.data.path} alt="missing image" width="100px" height="100px" border="3px" />
    <br/>
    <label/>Name: 
    <span /> {props.data.name}
    <br/>
    <label/>number: 
    <span/> {props.data.no}  
    <hr/>    
</div>
)
}





export default Contact;