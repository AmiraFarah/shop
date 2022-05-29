const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
class Index extends React.Component {

    render() {
        const dresses = this.props.dresses
        return (
            <DefaultLayout  title="INDEX" >
                <div class="box-container" >

                    <ul class='box'>
                        {
                            dresses.map(dress => {
                                return (
                                  <li k={dress._id}><a href={`/dresses/${dress._id}`}> <div class="image"><img  class="img-index" src={dress.imag} ></img></div></a>

                                        <div  class="info"><h5>{dress.name}{"    "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dress.price}$</h5>
                                        <h5></h5>
                                             <div class="stars">
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star-half"></i>
                                             </div>
                                        </div>
                                       

                                        <form action={`/dresses/${dress._id}?_method=DELETE`} method='POST'>
                                            <input class='input1' type="submit" value="DELETE" />

                                        </form>

                                        <button class="btn"><a href={`/dresses/${dress._id}/edit`}>Edit</a></button>
                                        <hr></hr>
                                    </li>
                                )
                            })
                        }</ul>
                    <nav>
                        
                    </nav>
                </div>
                <a class='main' href="/dresses/new"><h4>ADD NEW Product</h4></a>

            </DefaultLayout>
        )
    }
}
module.exports = Index 