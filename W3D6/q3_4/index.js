const express = require("express");
const path = require("path");
const app = express();

let Cart = require("./model/Cart");
let Product = require("./model/Product");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { products: Product.getAllProducts() });
});

app.post("/shoppingCart", (req, res) => {

let tempCart = new Cart();
let id=req.body.id;

let item =Product.getAllProducts();





 for (let product of Product.getAllProducts()) {
   
    tempCart.add(product, Math.ceil(Math.random() * 100));
  
  }
    

  
  res.render("shoppingCart", { items: tempCart.getAll() });


});


app.listen(3001, () => console.log('server is running at port 3000...'));
