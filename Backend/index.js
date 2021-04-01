const app = require("express")();
const cors = require("cors");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 5000;
const API_ENDPOINT =
  "https://digitebl-staging.herokuapp.com/api/v1/common/getItemCategories";
app.use(cors());

app.get("/", async (req, res) => {
  console.log("fetching data");
  try {
    const resp = await fetch(API_ENDPOINT);
    const data = await resp.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send("Error Not Found");
  }
});
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
