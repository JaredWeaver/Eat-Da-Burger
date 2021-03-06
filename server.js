const exphbs = require('express-handlebars');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./controllers/burgers_controller.js'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
