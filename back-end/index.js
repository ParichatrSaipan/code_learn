const express = require('express')
const app = express()
app.use(express.text());
app.use(express.json());




const port = 3000;
const host = 'localhost';
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})