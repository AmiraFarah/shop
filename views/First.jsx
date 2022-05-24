const React = require('react')
class First extends React.Component {

    render() {
        const dress = this.props.dress
        console.log(' !!!!',dress)
        return (
            <div>
                 <h1> Products Page</h1>     
                <ul>
                    <li>
                        <a href='/dresses/:id'><img src={dress.imag} height="300" width="300"></img></a>
            
                    </li>
                </ul>
            </div>

            
        )
    }
}
module.exports = First