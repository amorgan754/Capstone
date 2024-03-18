// imports
import express from "express";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// initialize express
const app = express();

//  logging
const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};

// get the PORT from the environment variables, OR use 4040 as default
const PORT = process.env.PORT || 4040;

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

// handle request from localHost
app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
