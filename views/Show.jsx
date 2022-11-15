const React = require("react");

class Show extends React.Component {
  render() {
    const myStyle = {
      color: "#ffffff",
      backgroundColor: "#000000",
      height: "100vh",
    };
    const pokemon = this.props.pokemon;
    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name.toUpperCase()}</h2>
        <img src={`${pokemon.img}.jpg`} alt={pokemon.name} />
        <br />
        <a href={'/pokemon'}>Back to Home</a>
      </div>
    );
  }
}

module.exports = Show;
