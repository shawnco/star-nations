const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Add services here

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(cors());

require('./routes/account')(app);
require('./routes/player')(app);

app.get('/api/test', (req, res, next) => {
    res.end(JSON.stringify('Api works!'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
const PORT = 5000;  // but put this in config

app.listen(process.env.PORT || PORT, () => {
    console.log('VERB is now live on port', process.env.PORT || 5000);
});