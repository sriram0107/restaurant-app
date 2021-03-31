const app = require("express")();
const cors = require("cors");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 5000;
const API_ENDPOINT = "";
app.use(cors);

app.get("/", async (req, res) => {
  try {
    const resp = await fetch(API_ENDPOINT);
    const data = resp.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send("Error Not Found");
  }
});
app.listen(PORT, `Backend running on http://localhost:${PORT}`);
