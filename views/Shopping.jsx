const React = require('react')
const DefaultLayout=require('./layout/DefaultLayout')
const mongoose = require('mongoose')
class Shopping extends React.Component{
    render(){
         const products = this.props.products
         console.log(products,'ppppppp')
        return(
            <DefaultLayout title="Shopping Cart">
            <div  >
                    <ul >
                        {
                            products[0].products.map((product) => {
                                console.log(product,'single product')
                                let source= product.imag

                                return (
                                    <li class="shopping"> <p>
                                       {`${product.name}`}
                                    </p>
                                    
                

                                        <img class="img-shopping"  src = {source}></img>


                                    </li>
                                )
                            })
                        }</ul>
                  {/* <img src={`${product.imag}`} height="200" width="200"></img> */}

                 <button><a href={"/dresses"}>back</a></button>
            </div>
       </DefaultLayout>
        )
    }
}
module.exports = Shopping