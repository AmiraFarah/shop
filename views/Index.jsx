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
                                  <li k={dress._id}><a href={`/dresses/${dress._id}`}> <div className="image"><img  className="img-index" src={dress.imag} ></img></div></a>

                                        <div  className="info"><h5>{dress.name}{"    "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dress.price}$</h5>
                                        <h5></h5>
                                             <div class="stars">
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star"></i>
                                                 <i class ="fas fa-star-half"></i>
                                             </div>
                                             <h5>  Quantity{'    '}{ dress.count}</h5>
                                        </div>
                                       

                                        <form action={`/dresses/${dress._id}?_method=DELETE`} method='POST'>
                                            <input className ='input1' type="submit" value="DELETE" />

                                        </form>

                                        <button className="btn"><a href={`/dresses/${dress._id}/edit`}>Edit</a></button>
                                        <hr></hr>
                                    </li>
                                )
                            })
                        }</ul>
                    <nav>
                        
                    </nav>
                </div>
                <a class='main' href="/dresses/new"><h5 class="add-new">ADD NEW Product</h5></a>

            </DefaultLayout>
        )
    }
}
module.exports = Index 