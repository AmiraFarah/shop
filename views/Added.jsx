const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
class Added extends React.Component{
    render() {
        return(
            <DefaultLayout >
            <h1>product added  successfully</h1>
            <a href="/cart"> Shopping Cart</a>

            </DefaultLayout>
            )
        }
    }
    module.exports= Added
