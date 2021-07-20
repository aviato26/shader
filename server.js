
let express = require('express');
let app = express();
const port = 3000;

app.use(express.static('ClientSide'));

app.listen(port, console.log(`server is running on port ${port}`))
