var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article One |  Vivek',
    heading: 'Article One',
    date: 'Todays Date',
    content: `  <p>
                    This is the content paragraph. You can type anything here.
                </p>
                <p>
                    This is the content paragraph. You can type anything here.
                </p>
                <p>
                    This is the content paragraph. You can type anything here.
                </p>
                <p>
                    This is the content paragraph. You can type anything here.
                </p>
                <p>
                    This is the content paragraph. You can type anything here.
                </p>`
};

var htmlTemplate = `<html>
    <head>
        <title>
            Article one | Vivek
        </title>
        <meta name="viewport" content="width=device-width, intial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
      <div class="container">
              <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                Article One
            </h3>
            <div>
                Todays Date.
            </div>
            <div>
              ${content}
            </div>
        </div>
    </body>
</html>
`
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/article-one', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});


app.get('/article-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
