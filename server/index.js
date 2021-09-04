import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import potluckRoutes from './routes/potlucks.js'

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }))
app.use(cors());

app.use('/potlucks', potluckRoutes)

app.get('/', (req, res) => {
    res.send('whatLuck API running')
})

const CONNECTION_URL = 'mongodb+srv://gordon:gordon123@cluster0.a8rai.mongodb.net/whatLuck?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));  