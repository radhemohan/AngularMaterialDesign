//https://medium.com/@ryanchenkie_40935/angular-cli-deployment-host-your-angular-2-app-on-heroku-3f266f13f352
/* added in package.json 
"start": "node server.js",

and  "engines": {
    "node": "6.11.1",
    "npm": "3.10.9"
  },
*/
// server.js
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/AngularMaterialDesign'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/AngularMaterialDesign/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);