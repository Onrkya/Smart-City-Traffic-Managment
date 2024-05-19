const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
require("./Smart-City-Traffic-Managment/Src/Db/db.connection");
const port = process.env.PORT || 5001;
const errorHandlerMiddleware = require("./Smart-City-Traffic-Managment/Src/Middlewares/errorHandler")

app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});

// express.json middleware'ini kullan
app.use(express.json());
app.use(bodyParser.json());





// Router'ı çağır
const router = require("./Smart-City-Traffic-Managment/Src/Router");

// Router'ı express uygulamasına bağla
app.use("/api", router);
app.use(errorHandlerMiddleware)




app.listen(port, () => {
    console.log(`Server ${port} portunda çalışıyor`);
});
