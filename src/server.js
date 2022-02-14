const express = require("express");
const app = express();
const port = 5001;

app.use("/static", express.static("public"));
app.use("/static/products", express.static("./public/products.html"));
app.use("/profile", express.static("./public/profile.html"));

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
