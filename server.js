const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

// dotenv config
dotenv.config();

// initialize express
const app = express();

// MONGO DB CONNECTION
connectDB();

// middlewares
app.use(express.json()); // to reduce parsing errors
app.use(morgan('dev'));
app.use(cors({
  origin: 'https://doctor-appointment-system-i8f8-cay8h9myn-siddarth2810s-projects.vercel.app/', // Specify your client URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));
// routes
app.use("/api/v1/user", require('./routes/userRoutes'));

app.listen(8082, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} Mode on port 8082`);
});

