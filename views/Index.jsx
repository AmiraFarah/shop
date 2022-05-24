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
<h1> Dresses Index Page</h1>  
<ul>
    {
        dresses.map(dress=>{
            return (
<li>
   <p>Its a  <a href={`/dresses/${dress._id}`}>{dress.name}</a> dress , color is {dress.color} , Style is {dress.style}</p> 

</li>
            )
        })
    }</ul>       
   </div>
        )
 }
 }
 module.exports = Index