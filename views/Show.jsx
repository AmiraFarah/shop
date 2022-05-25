const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

class Show extends React.Component {
    render() {
        const dress = this.props.dress
        return (
            <DefaultLayout title="Show Page">
                <div>
               
               <h5>{(` name : ${dress.name}`)} </h5>
               <h5>{(`style: ${dress.style}`)}</h5>
            <h5>{(`color : ${dress.color}`)}</h5>
           
            <h5>Count { `${dress.count}`}</h5>
            <a href={'/cart'}><h2>Buy </h2> </a>
            <img src={`${dress.imag }`} ></img>
            <button> <a href = {"/Dresses"}> Back to main product page </a>
            </button>
            </div>
            </DefaultLayout>
        )
    }
}
module.exports = Show