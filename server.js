const express = require("express");
const reactViews = require("express-react-views");
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.use((req,res,next)=>{
    next();
});

app.use(express.urlencoded({extended: false}));

app.get('/pokemon', (req,res)=>{
    res.render('Index',{
        pokemon: pokemon,
    });
});
app.get('/pokemon/new', (req, res) => {
  res.render('New');
});

app.get('/pokemon/:id',(req,res)=>{
    res.render('Show',{
        pokemon: pokemon[req.params.id],
    });
});



app.post('/pokemon',(req,res)=>{
    pokemon.push(req.body);
    res.redirect('/pokemon')
});

app.listen(port, () => {
  console.log("listening on port", port);
});
