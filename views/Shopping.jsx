const React = require('react')
const DefaultLayout=require('./layout/DefaultLayout')
const arr = []
class Shopping extends React.Component{
    render(){
         const obj = this.props.obj
         arr.push(obj)
        return(
            <DefaultLayout title="Shopping Cart">
            <div >
                    <ul>
                        {
                            obj.map(product => {
                                return (
                                    <li>  
                                        <img  src={products[product]}> </img>


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