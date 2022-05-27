const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create new Product">

            <>
                <form  id="form"action="/dresses" method="POST">
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="color">Color</label>
                    <input type="text" id="color" name="color" />
                    <label htmlFor="style">Style</label>
                    <input type="style" id="style" name="style" />
                    <label htmlFor="count">Count</label>
                    <input type="count" id="count" name="count" />
                    <label htmlFor="imag">Image</label>
                    <input type="text" id="imag" name="imag" />
                    <input type="submit" />
                </form>
                    <button> <a href="/dresses"> Back to Index</a></button>
            </>

            </DefaultLayout>

        )
    }
}
