const express = require('express');
const path = require('path');
const port = 3001;
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes');

const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(actorsRoutes);

app.listen(port, () => (console.log(`http://localhost:${port}`)));
