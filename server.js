require("dotenv").config();
const express = require("express");
const reactViews = require("express-react-views");
const app = express();
const port = 3000;
const Pokemon = require("./models/pokemon");
const mongoose = require("mongoose");

//connect to database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to db");
});

//setup view engine
app.set("view engine", "jsx");
app.engine("jsx", reactViews.createEngine());
//setup middleware
app.use((req, res, next) => {
  next();
});
app.use(express.urlencoded({ extended: false }));

//setup routes
app.get("/pokemon", (req, res) => {
    Pokemon.find({},(error, allPokemon)=>{
        if(!error) {
            res.status(200).render('Index',{
                pokemon: allPokemon,
            });
        }else {
            res.status(400).send(error);
        }
    });
});
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});
app.get("/pokemon/:id", (req, res) => {
    Pokemon.findById(req.params.id,(error, pokemonById)=>{
        if(!error){
            res.status(200).render('Show',{
                pokemon: pokemonById,
            });
        } else {
            res.status(400).send(error);
        }
    });
});

//post routes
app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body,(error, createdPokemon)=>{
    if(!error){
        res.status(200).redirect('/pokemon')
        //res.status(200).send(createdPokemon)
    } else{
        res.status(400).send(error);
    }
  })
});

app.listen(port, () => {
  console.log("listening on port", port);
});
