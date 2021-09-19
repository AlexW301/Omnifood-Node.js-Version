const {readFile} = require('fs').promises;

const express = require('express');
const app = express();
const port = 3000

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/', express.static(__dirname + '/manifest.webmanifest'));


// *** FOR EJS ONLY *** //////
// Set Views
// app.set('views', './')
// app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    // res.send('hello world!!!!');
    res.sendFile(__dirname + '/index.html');
    // *** FOR EJS ONLY *** //////
    // res.render('index', {text: 'This is EJS!!!!!'});
});







// Listen on port 3000
// app.listen(port, () => {console.info(`Listen on port ${port}`)})
app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));






// app.get("/", async (request, response) => {
//     app.use(express.static('css'));
//     app.use(express.static('js'));
//     app.use(express.static('img'));
//     response.send(await readFile('./index.html', 'utf8'));
// });

// app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));