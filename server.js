var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var Pool = require('pg').Pool;
var config = {
    user: 'amansrivastav9a33',
    database: 'amansrivastav9a33',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: 'db-amansrivastav9a33-35158'
    };
    
var pool = new Pool(config);   
app.get('/test-db/', function (req, res) {
    //make a select request and return a response
    pool.query('SELECT * fROM test', function (err, result) {
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(result.rows));
        }
    })
});
var names = [];
app.get('/submit-name/', function (req, res) {
    //Get the name from request
    var name = req.query.name;
    names.push(name);
    //JSON = Javascript Object Notation
    res.send(JSON.stringify(names));
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var article = {
    'article-one' : {
  title: 'Article-one',
  date: '5th Feb, 2018',
  content: 
                `<p>
                    This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                </p>
                <p>
                    This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                </p>`
},
    'article-two' : {
      title: 'Article-two',
      date: '6th Feb, 2018',
      content: 
                    `<p>
                        This is the content for my second article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>
                    <p>
                        This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>`
},
    'article-three': {
      title: 'Article-three',
      date: '7th Feb, 2018',
      content: 
                    `<p>
                        This is the content for my third article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>
                    <p>
                        This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                    </p>`
}
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var content = data.content;
    
var htmltemplate =
   ` <html>
    <head>
        <title>
        ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="k">
            <div>
                <a href="/">Home</a>
            </div>
            <hr>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter +1;
    res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(article[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
