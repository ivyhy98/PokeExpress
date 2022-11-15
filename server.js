const express = require("express");
const reactViews = require("express-react-views");
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.get('/pokemon', (req,res)=>{
    res.render('Index',{
        pokemon: pokemon,
    })
})

app.get('/pokemon/:id',(req,res)=>{
    res.send(req.params.id)
})
app.listen(port, () => {
  console.log("listening on port", port);
});
