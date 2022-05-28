const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
class Index extends React.Component {

    render() {
        const dresses = this.props.dresses
        return (
            <DefaultLayout  title="INDEX">
                <div >
                    <nav>
                        <a class='main' href="/dresses/new">ADD NEW</a>
                    </nav>
                    <ul class='div1'>
                        {
                            dresses.map(dress => {
                                return (
                                    <li  k={dress._id}>    <a href={`/dresses/${dress._id}`}><img  src={dress.imag} height="300" width="300"></img></a>

                                       <h5 id='pri'>{dress.price}$</h5>

                                        <form action={`/dresses/${dress._id}?_method=DELETE`} method='POST'>
                                            <input class='input1' type="submit" value="DELETE" />

                                        </form>

                                        <button class="btn"><a href={`/dresses/${dress._id}/edit`}>Edit</a></button>
                                        <hr></hr>
                                    </li>
                                )
                            })
                        }</ul>
                </div>
            </DefaultLayout>
        )
    }
}
module.exports = Index 