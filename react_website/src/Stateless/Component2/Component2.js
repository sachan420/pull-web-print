import React from 'react'
import Product from './Product'
import ProductData from '../../Apis/ProductData'
class Component2 extends React.Component{    
    render(){
        const sahil=ProductData.map(item => <Product key={item.id} data={item}/>)         
        return(
            <div>
                {sahil}
            </div>   
        )
    }
}
export default Component2