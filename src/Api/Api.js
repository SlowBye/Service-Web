import express from 'express';
import timing from '../dao/timingSqliteDao.js';
import event from '../dao/eventSqliteDao.js';


const app = express();
const port = 3001;

// Endpoint pour afficher "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Endpoint pour afficher tous les timings
app.get('/timing', (req, res) => {
    const time = new timing();
    time.findAll().then((result) => {
        res.send(result);
    });
});



// Endpoint pour afficher tous les events
app.get('/event', (req, res) => {
    event.getAllEvents().then((result) => {
        res.send(result);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
