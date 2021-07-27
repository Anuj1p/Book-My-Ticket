const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const dotenv  = require('dotenv')
const cors = require('cors')

const PORT = process.env.PORT || 4000

console.clear()
dotenv.config();

app.listen(PORT, () => {
  console.log(`Server is running /`);
});