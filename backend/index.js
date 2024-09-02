const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const taskRoutes = require('./routes/tasks')

require('dotenv').config();


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});

app.use('/api', taskRoutes);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});