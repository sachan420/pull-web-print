import React from 'react'
class Product extends React.Component{
    render(){
        return(
            <div>
                <input type="radio" checked={this.props.data.completed} />
                <label />name:
                <span />{this.props.data.name}                
                <br/>
                <label />price:
                <span />{this.props.data.price}
                <hr />
            </div>
        )
    }
}
export default Product