const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
class Edit extends React.Component{
    render() {
        const product = this.props.product
        return(
            <DefaultLayout title="Edit">
                <h4 class='main'>{product.name}</h4>
                <img src={product.imag} height="250" width="250" />

                <form  class ="form" action ={`/dresses/${product._id}?_method=PUT`} method='POST'>
                <label htmlFor="name">name</label>
                    <input type="text" id="name" name="name" defaultValue={product.name}/>

                    <label htmlFor="color">Color</label>
                    <input type="text" id="color" name="color" defaultValue={product.color} />
                    <label htmlFor="style">Style</label>
                    <input type="style" id="style" name="style" defaultValue={product.style} />
                    <label htmlFor="count">Count</label>
                    <input type="count" id="count" name="count" defaultValue={product.count} />
                    <label htmlFor="imag">Image</label>
                    <input type="text" id="imag" name="imag" />
                    <input type="submit" />
                    </form>
                    <hr></hr>
                    <button> <a href="/dresses">back to products Page</a></button>

            </DefaultLayout>
        )
    }
}
module.exports=Edit