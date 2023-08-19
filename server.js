import express from "https://esm.sh/express?target=denonext";
const app = express();


app.get("/", (req, res) => {
  res.render('./index.html');

});
app.listen(8080);