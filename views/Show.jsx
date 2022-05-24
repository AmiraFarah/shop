const React = require('react')
class Show extends React.Component {
    render() {
        const dress = this.props.dress
        return (
            <div>
                <h1>Show  Page</h1>
                <a href=""><h2>next </h2> </a>
               <h3>{(` name : ${dress.name}`)} </h3>
               <h3>{(`style: ${dress.style}`)}</h3>
            <h3>{(`color : ${dress.color}`)}</h3>
           
            <h3>Count    { `${dress.count}`}</h3>

            <img src={`${dress.imag}`}></img>
            <button> <a href = {"/Dresses"}> Back to main product page </a>
            </button>
                {/* { dress.map((elem,i)=>{
                    return(
                    <div>
                        <h2>{(`Name  ${ elem.name } color ${elem.color}  style ${elem.style}` )}</h2>
                      

                    </div>
                    )
                })} */}
            </div>
        )
    }
}
module.exports = Show