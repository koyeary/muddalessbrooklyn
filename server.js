const express = require('express');
const exphbs = require('express-handlebars');


const app = express();
const PORT = 3000;


app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
layoutsDir: __dirname + '/views/layouts',
}));

app.use(express.static('public'))
app.get('/', (req, res) => {

res.render('main', {layout : 'index'});
});

app.listen(PORT, () => console.log(`App listening to port ${PORT}`));