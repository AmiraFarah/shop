const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Create new Product">

            <>
                <form class='new-form'  id="form"action="/dresses" method="POST">
                    <label class='L' htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />

                    <label class='L' htmlFor="color">Color</label>
                    <input type="text" id="color" name="color" />
                    <label class='L' htmlFor="style">Style</label>
                    <input type="text" id="style" name="style" />
                    <label class='L' htmlFor="count">Count</label>
                    <input type="text" id="count" name="count" />
                    <label class='L' htmlFor="imag">Image</label>
                    <input type="text" id="imag" name="imag" />
                    <label class='L' htmlFor="price">Price</label>
                    <input type="text" id="price" name="price" />
<hr />
                    <input class='new-btn'type="submit" />
                </form>
                    <button class="new-back-to-index"> <a href="/dresses"> Back to Index</a></button>
            </>

            </DefaultLayout>

        )
    }
}
