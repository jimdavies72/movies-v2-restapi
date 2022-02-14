require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.HTTP_PORT;

app.use("/profile", express.static("./public/profile.html"));
app.use("/static/orders", express.static("./public/orders.html"));
app.use("/static", express.static("public"));
app.use("/static/products", express.static("./public/products.html"));

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
