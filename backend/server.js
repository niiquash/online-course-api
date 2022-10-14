express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db')
const cors = require('./middleware/corsMiddleware')

connectDB();
const app = express();

app
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cors)
    .use('/', require('./routes'))


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));