const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`La aplicación está funcionando en el puerto ${port}`);
});
