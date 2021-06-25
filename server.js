
let express = require('express');
let app = express();

app.use(express.static('ClientSide'));

app.listen(3000, console.log('server is running'))
