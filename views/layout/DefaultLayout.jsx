const React = require('react')

class Default extends React.Component {

    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
                    <title class ="title1">{this.props.title}</title>
                </head>
                <body>
                    <img id="prince" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu34nUrvLfahQYi0qsNGYU68VIkVl1F9aJaToB_a3D_osbhHhTWnmFEGEpgZeWyPrDRbI&usqp=CAU" height ="100" width="200"/>
                    <h1>

                            {this.props.title}
                        {this.props.children}
                    </h1>
                </body>
            </html>
        )
    }
}
module.exports = Default