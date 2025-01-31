const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
