const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const compression = require('compression');


let port = process.env.PORT || 3000;
app.use(compression());
app.use("/", serveStatic ('./dist') );
app.use(history());

app.listen(port, () => console.log('app listening on port: ' + port));