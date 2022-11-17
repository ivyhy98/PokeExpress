const React = require('react');

class New extends React.Component{
    render(){
        return (
          <div>
            <h1>Add A New Pokemon</h1>
            <a href="/pokemon">Back to Index</a>

            <form action="/pokemon" method="post">
                Name: <input type="text" name="name" /> <br />
                Image <input type="text" name="img" /> <br />
                <input type="submit" value="Create Pokemon" />
            </form>
          </div>
        );
    }
}

module.exports = New;