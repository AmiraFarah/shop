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
            <button> <a href = {"/Dresses"}> Back </a>
            </button>
            <img src="https://imgs.mkdress.co.uk/lalamira/s1140/5c/ac/bbb1e2fa1713bad7504e9c91c7365cac.jpg" width="300" height="300">
            </img>
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