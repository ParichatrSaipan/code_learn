const express = require('express')
const app = express()
app.use(express.text());
app.use(express.json());

let id = 0

// สร้าง Array จำลองการเก็บข้อมูลใน Server (database)
let notes = []

// GET
app.get('/notes', (req, res) => {
    res.json(notes) // Server ตอบกลับมาว่าได้ข้อมูล notes ออกมาแล้ว
});

// POST
app.post('/notes', (req, res) => {
    const data = req.body
    const newNote = {
  id: ++id ,
  title: data.title,
  content: data.content
}
    notes.push(newNote)
    res.status(201).json(newNote)
});

// DELETE
app.delete('/notes/:id', function(req, res, next) {
    const removeId = req.params.id; // รับค่า params จาก url 
    const position = notes.findIndex((val) => { // หา Index จาก array notes
        return val.id == removeId;
    });
    notes.splice(position, 1); // ลบสมาชิกใน array
    return res.status(200).json({
        code: 1,
        message: 'OK',
        data: notes
    })
});
  

//PUT edit all data
app.put('/notes/:id', (req, res) => {
    const updateId = req.params.id; // รับค่า params จาก url
    const data = req.body; // รับค่า body จาก request

    const position = notes.findIndex((val) => { // หา Index จาก box database array notes
        return val.id == updateId;
    });

    if (position !== -1) {
        notes[position] = {
            id: notes[position].id,
            title: data.title,
            content: data.content
        }; // แทนที่ข้อมูลทั้งก้อน แต่เก็บ id เดิมไว้
        res.status(200).json(notes[position]);
    } else {
        res.status(404).json({ message: 'Note not found' });
    }
});


//PATCH some edit
app.patch('/notes/:id', (req, res) => {
    const updateId = req.params.id; // รับค่า params จาก url
    const data = req.body; // รับค่า body จาก request

    const position = notes.findIndex((val) => { // หา Index จาก box database array notes
        return val.id == updateId;
    });

    if (position !== -1) {
        if (data.title !== undefined) {
            notes[position].title = data.title;
        }
        if (data.content !== undefined) {
            notes[position].content = data.content;
        }
        res.status(200).json(notes[position]);
    } else {
        res.status(404).json({ message: 'Note not found' });
    }
});


const port = 3000;
const host = 'localhost';
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})