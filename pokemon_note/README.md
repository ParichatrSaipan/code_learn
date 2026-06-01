# Pokemon Note

1. Go to Pokemon Note folder and install dependencies

```bash
cd pokemon_note
npm init # First time only, to create package.json !!!
npm install # only that pakage need update or install new package !!!
npm install express # rest api framework
```

2. Crate file index.js and add code

3. Run the server

```bash
node index.js
```

4. Add code about Start API

```javascript
const express = require('express')
const app = express()
app.use(express.text());
app.use(express.json());


const port = 3000;
const host = 'localhost';
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
```

5. Add code about API

Objective:
 - Return all notes 
 - Create new note
 - Delete note by id

Stucture of note
```JSON
{
  id: number,
  title: string,
  content: string
}
```