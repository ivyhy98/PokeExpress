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
                    return(
                        <li>{poke.name.toUpperCase()}</li>
                    )
                })}
            </ul>
           </div>
        );
    }
}

module.exports = Index;