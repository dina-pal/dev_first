import express from "https://esm.sh/express?target=denonext";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from Deno Deploy! working fine!!");
});
app.listen(8080);