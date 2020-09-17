
import path from 'path'
import express from 'express'

const app = express();
const routers = require('./routers');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routers.authRouter);
app.use(routers.slideRouter);
app.use(routers.pageRouter);
app.use(routers.InstantEarthquakesRouter);
app.use(routers.institutionRouter);

app.get('/', function (req, res) {
    res.json('MyFIS Serve Project');
});

app.use((req, res, next) => {
    res.send("404 NOT FOUND");
});

module.exports = app;