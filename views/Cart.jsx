const React = require('react')
class Cart extends React.Component{
    render(){
         const product = this.props.product
        return(
            <div>
                 <h1> Shopping Cart</h1> 
                
                 <img src={`${product.imag}`} height="200" width="200"></img>

                 <button><a href={"/dresses"}>back</a></button>
            </div>
        )
    }
}
module.exports = Cart