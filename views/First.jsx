const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')
class First extends React.Component{
    render() {
        return(
            <div class = 'div-First'>
            <DefaultLayout >
            <a href="/dresses"><img class="img" src="https://image.shutterstock.com/image-vector/memorial-day-sale-promotion-advertising-260nw-700023406.jpg"width="1000"height="400"  /></a>
            </DefaultLayout>
            </div>
            )
        }
    }
    module.exports=First