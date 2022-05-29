const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
class Edit extends React.Component {
    render() {
        const product = this.props.product
        return (
            <DefaultLayout title="Edit">

                <div class='form-div'>
                    <div class='image1'>
                          <h4 class='main'>{product.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {product.price}</h4>
                          <img class='img-edit'src={product.imag} height="250" width="250" />
                          <div class="star1">
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star-half"></i>
                                             </div>
                    </div>
                <div>
                <form class="form" action={`/dresses/${product._id}?_method=PUT`} method='POST'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" defaultValue={product.name} />

                    <label htmlFor="color">Color</label>
                    <input type="text" id="color" name="color" defaultValue={product.color} />
                    <label htmlFor="style">Style</label>
                    <input type="style" id="style" name="style" defaultValue={product.style} />
                    <label htmlFor="count">Count</label>
                    <input type="count" id="count" name="count" defaultValue={product.count} />
                    <label htmlFor="imag">Image</label>
                    <input type="text" id="imag" name="imag" defaultValue={product.imag} />
                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" name="price" defaultValue={product.price} />

                    <input class ='sub-button'type="submit" />
                </form>
                </div>
                </div>

                <hr></hr>
                <button class='sub-button'> <a href="/dresses">back to products Page</a></button>

            </DefaultLayout>
        )
    }
}
module.exports = Edit