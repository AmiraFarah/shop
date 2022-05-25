const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
class Index extends React.Component {

    render() {
        const dresses = this.props.dresses
        return (
           <DefaultLayout title="Index">
           <div>
                <nav>
                    <a href="/dresses/new">add new</a>
                </nav>
                <ul>
                    {
                        dresses.map(dress => {
                            return (
                                <li k= {dress._id}>    <a href={`/dresses/${dress._id}`}><img src={dress.imag} height="300" width="300"></img></a></li>

                            )
                        })
                    }</ul>
            </div>
            </DefaultLayout>
        )
    }
}
module.exports = Index 