import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import waitlistRoutes from './routes/waitlistRoutes.js'

dotenv.config();
connectDB();

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors());
app.use(express.json())

app.use('/api/waitlist', waitlistRoutes);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})