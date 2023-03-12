const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const pinRoute = require('./routes/pinsRoutes')
const userRoute = require('./routes/userRoutes')

dotenv.config();

app.use(express.json());

mongoose.connect('mongodb+srv://kraigmansfield:UghColts21@cluster0.mscwfeb.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology:true }).then(() => {
    console.log("Mongo_DB connected")
}).catch(err=> console.log(err))

app.use('/api/pins', pinRoute)
app.use('/api/user', userRoute)

app.listen(3000, () => {
    console.log("Backend server is running on PORT 3000")
});

