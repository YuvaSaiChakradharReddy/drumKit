const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public')); // Serve static files from the 'public' directory

app.get("/", function (request, response) {
    response.render("index.ejs")
});

/*app.post("/play", function (req, res) {
    // Logic to handle drum playing can be added here
    res.send("Drum sound played!");
});*/

app.listen(port, function () {
    console.log(`Server is running on http://localhost:${port}`);
});
