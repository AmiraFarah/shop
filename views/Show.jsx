const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        const dress = this.props.dress

        return (
            <DefaultLayout title="Show Page">
                <div >
                    <h5>{(` Name ${dress.name}       Style  ${dress.style}  Color  ${dress.color}`)} </h5>
                    {(`${dress.count == 0}`) ? <h1>out off stock</h1> : <h1>Quantity `${dress.count}`</h1>}

                    <img src={`${dress.imag}`} height="400px" width="400" px ></img>
                    <h5>{dress.price} $</h5>
                    <a href='/cart'><h2>Buy </h2> </a>

                    <button> <a href={"/Dresses"}> Back to main product page </a>
                    </button>
                    <button><a href={`/dresses/${dress._id}/edit`}>Edit</a></button>
                    <form action={`/dresses/${dress._id}?_method=DELETE`} method='POST'>
                        <input class='input1' type="submit" value="DELETE" />

                    </form>
                </div>
            </DefaultLayout>
        )
    }
}
module.exports = Show