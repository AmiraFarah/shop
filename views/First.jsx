const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
class First extends React.Component{
    render() {
        return(
            <div class = 'div-First'>
            <DefaultLayout >
            <a href="/dresses"><img class="img" src="https://image.shutterstock.com/image-vector/memorial-day-sale-promotion-advertising-260nw-700023406.jpg"  /></a>
            </DefaultLayout>
            </div>
            )
        }
    }
    module.exports=First