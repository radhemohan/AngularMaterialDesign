const express = require('express');
const http = require('http')
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));

app.use(express.static(path.join(__dirname, 'dist/AngularMaterialDesign')));

app.route('/api/cats').get((req, res) => {
 //console.log(req.get('Content-Type'));

  res.send({
    cats: [{ name: 'lilly' }, { name: 'lucy' }]
  });
});
app.all('/*', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('index.html', { root: __dirname });
});

/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/AngularMaterialDesign/index.html'));
});*/



