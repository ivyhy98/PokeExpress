const React = require('react');

class Index extends React.Component{
    render(){
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            height: '100vh',
        };

        return(
           <div style={myStyle}>
            <h1>See All the Pokemon!</h1>
           </div>
        );
    }
}

module.exports = Index;