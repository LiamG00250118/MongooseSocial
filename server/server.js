const express = require('express');
const db = require('./db/connection');
const path = require('path');

const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3333;

app.use(userRoutes);
app.use(cors());
app.use(express.json());
app.use(cookieParser());

db.once('open', () => {
    app.listen(PORT, () => console.log('Server started on port %s', PORT));
  });