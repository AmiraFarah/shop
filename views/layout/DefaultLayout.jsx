const React = require('react')

class Default extends React.Component {

    render() {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css" />
                    <title>{this.props.title}</title>
                </head>
                <body>
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