import express from "express";
import cors from "cors";
import fetch from "node-fetch";
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  // fetch(
  //   "https://api.themoviedb.org/3/movie/popular?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=1"
  // )
  //   .then((response) => console.log(response))
  // .then((data) => console.log(data));
  const data = fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=2e1d9e703d345ef35e7a54d9ac882a26&language=en-US&page=1"
  ).then((response) => response.json()).then(data => res.json(data));
  
});

app.listen(5000, () => {
  console.log("ready to serve");
});
