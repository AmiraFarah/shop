const React = require('react')

module.exports = class New extends React.Component {
    render() {
        return (
            <>
                <h1>Create new Dress</h1>
                <form action="/dresses" method="POST">
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

            </>


        )
    }
}
