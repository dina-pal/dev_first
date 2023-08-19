import express from "https://esm.sh/express?target=denonext";
const app = express();


app.get("/", (req, res) => {
 res.send('deno dev working fine!')

});
app.listen(8080);