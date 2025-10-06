const express = require('express');
const {form} = require('./routes/form')
const handlerequest = require('./routes/handleresponse');
const path = require('path');
const errors = require('./controllers/errors');

const app = express();

app.set('view engine','ejs');
app.set('views','views');
app.use(express.static(path.join(__dirname,'public')));// for serving static css file and is important for serving tailwind


app.use(handlerequest);
app.use(express.urlencoded());
app.use(form);

app.use(errors.pagenotfound);

const PORT = 3001;
app.listen(PORT, ()=>console.log(`This server is running on http://localhost:${PORT}`));