const React = require('react')
const DefaultLayout=require('./layout/DefaultLayout')
const mongoose = require('mongoose')
class Shopping extends React.Component{
    render(){
         const products = this.props.products
         
         let total = 0
         let quant = 0
        return(
            <DefaultLayout title="Shopping Cart">
            <div  >
                    <ul >
                        {
                            products[0].products.map((product,i) => {
                                let source= product.imag
                               
                                return (
                                    <li class="shopping"> <p>
                                       {`${product.name}`}

                                    </p> <img class="img-shopping"  src = {source}></img>
                                    <p>{product.price}$</p>

                                     <p class='hid'>  {total=product.price+total}</p> 
                                     <p class='hid'> {quant=quant+1} </p>

                                    </li>
                                )
                            })
                        }</ul>
 <p class="org"> quantity ordered {`${quant}`}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order Total {` ${total}$`}</p>
                 <button class='place'><a href={"/dresses"}>Place your order</a></button>
            </div>
       </DefaultLayout>
        )
    }
}
module.exports = Shopping