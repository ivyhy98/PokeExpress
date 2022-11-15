const express = require("express");
const reactViews = require("express-react-views");
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon');
app.get('/pokemon', (req,res)=>{
    res.send(pokemon)
})
app.listen(port, () => {
  console.log("listening on port", port);
});
