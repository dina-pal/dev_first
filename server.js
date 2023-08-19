import express from "https://esm.sh/express?target=denonext";
const app = express();

app.get('/help', (req, res) =>{
  res.send('<h1>This is Help Page </h1>');
})

app.get("/", (req, res) => {
 res.send('deno dev working fine! <a href="/help">Goto help </a>');

});
app.listen(8080);