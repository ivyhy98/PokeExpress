const React = require('react');

class Index extends React.Component{
    render(){
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            height: '100vh',
        };
        const pokemon = this.props.pokemon;
        return(
           <div style={myStyle}>
            <h1>See All the Pokemon!</h1>
            <ul>
                {pokemon.map((poke, i)=>{
                    return (
                      <li key={i}>
                        <a href={`/pokemon/${poke._id}`}>{poke.name.toUpperCase()}</a>
                      </li>
                    );
                })}
            </ul>
            <h3>Add a <a href="/pokemon/new">New Pokemon</a></h3>
           </div>
        );
    }
}

module.exports = Index;