const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        const dress = this.props.dress
        return (
            <DefaultLayout title="Show Page">
                <div  class='out'>
                    <div class="outer">
                         <div class='inner'>
                         <h5>{(` Name : ${dress.name}       Style :  ${dress.style}  Color :  ${dress.color}`)} &nbsp;&nbsp;</h5>

                         {dress.count == 0 ? <h5>out off stock</h5> : <h5>Quantity {dress.count}</h5>}
                         </div>
                         <div class='inner-img'>
                         <img src={ ` ${dress.imag}`} height="400px" width="400" px ></img>
                         <h5>{dress.price} $</h5>
                         <div class="star">
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star-half"></i>
                                             </div>
                        </div>
                    </div>
                    <div class='show-form'>
                    <form action='/dresses/62917536eeaee9bd53d7f84f/cart?_method=PUT' method="POST">

                        {/* <input class='input1' type="text" id="products" name="products" defaultValue={dress._id} /> */}
                        <input class={dress.count > 0 ? "buyButton" : "noBuyButton"} type="submit" value="buy" />

                    </form>

                    <button class='back'> <a href={"/Dresses"}> Back to main product page </a>
                    </button>
                    <button class='back'><a href={`/dresses/${dress._id}/edit`}>Edit</a></button>
                    <form action={`/dresses/${dress._id}?_method=DELETE`} method='POST'>
                        <input class='input1' type="submit" value="DELETE" />

                    </form>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}
module.exports = Show