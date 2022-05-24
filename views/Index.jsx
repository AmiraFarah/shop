const React =require('react')
 class Index extends React.Component {

    render()
    {
        const dresses = this.props.dresses
        return(
            <div>
                <nav>
                    <a href ="/dresses/new">add new</a>
                </nav>
<h1> Products Index Page</h1>  
<ul>
    {
        dresses.map(dress=>{
            return (
<li>
     <a href={`/dresses/${dress._id}`}><img src={dress.imag} height="300" width="300"></img></a>

</li>
            )
        })
    }</ul>       
   </div>
        )
 }
 }
 module.exports = Index 