const express = require("express");
const cors = require("cors");
const app = express();
// To allow all domains
app.use(cors());
// Or, to allow specific domains
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
const PORT = 3000;
app.use(express.json()); // Body parser for JSON requests

const kudosRoutes = require("./kudosRoutes/kudosRoutes");
app.use("/kudos", kudosRoutes); // Use kudos routes for paths starting with "/kudos"

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Welcome to my app!");
});
app.get("/sample-path", (req, res) => {
  res.send("This is a sample response.");
});
