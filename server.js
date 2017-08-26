var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles =  {
    'article-one' : {
        title: 'Article One |  Vivek',
        heading: 'Article One',
        date: 'Todays Date as now',
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
    },
    'article-two' : {
        title: 'Article Two |  Vivek',
        heading: 'Article two',
        date: 'Todays Date as now',
        content: `  <p>
                        This is the content paragraph. You can type anything here.
                    </p>
                    <p>
                        This is the content paragraph. You can type anything here.
                    </p>`

    },
    'article-three' : {
        title: 'Article Three |  Vivek',
        heading: 'Article Three',
        date: 'Todays Date as now',
        content: `  <p>
                        This is the content paragraph. You can type anything here.
                    </p>
                    <p>
                        This is the content paragraph. You can type anything here.
                    </p>`

    }

}

function createTemplate(data) {
    title= data.title;
    heading =  data.heading;
    date = data.date;
    content = data.content;
    var htmlTemplate = `<html>
        <head>
            <title>
                ${title}
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
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                  ${content}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}
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

app.get('/:articleName', function (req, res) {
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
