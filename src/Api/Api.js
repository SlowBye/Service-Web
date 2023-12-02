import express from 'express';
import timingRoute from './routes/findTimingAll.js';
import eventRoute from './routes/findEventAll.js'; 
import eventDelete from './routes/deleteEvent.js';
import timingDelete from './routes/deleteTiming.js';
import insertEvent from './routes/insertEvent.js';
import insertTiming from './routes/insertTiming.js';
import findEventId from './routes/findEventId.js';
import findTimingId from './routes/findTimingId.js';
import updateEvent from './routes/updateEvent.js';
import updateTiming from './routes/updateTiming.js';
import eventDeleteAll from './routes/deleteAllEvent.js';
import timingDeleteAll from './routes/deleteAllTiming.js';

const jwt = require('jsonwebtoken')
const app = express();
const port = 3001;

const user = {
    id: 1,
    username: 'user',
    password: 'mdp',
};

app.use(express.json());

app.use('/timingFindAll', timingRoute);
app.use('/eventFindAll', eventRoute);

app.use('/eventDelete', eventDelete);
app.use('/timingDelete', timingDelete);

app.use('/insertEvent', insertEvent);
app.use('/insertTiming', insertTiming);

app.use('/findEventId', findEventId);
app.use('/findTimingId', findTimingId);

app.use('/updateEvent', updateEvent);
app.use('/updateTiming', updateTiming);

app.use('/eventDeleteAll', eventDeleteAll);
app.use('/timingDeleteAll', timingDeleteAll);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
