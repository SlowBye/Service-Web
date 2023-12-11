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
import Login from './routes/login.js';
import disconect from './routes/disconect.js';
import authenticateToken from './routes/Auth.js';

const app = express();
const port = 3001;

/**
* Middleware permettant de parser les données en JSON.
* @name express.json()
* @function
* @memberof module:express
* @inner
*/
app.use(express.json());

/**
* Fonction permettant de se connecter à l'api et d'obtenir son token
* @name Login
* @route {POST} /login
*/
app.use('/login', Login);

/**
* Fonction permettant de se déconnecter de l'api.
* @name disconect
* @route {GET} /disconect
*/
app.use('/disconect', disconect);

/**
* Middleware permettant de vérifier si le token est valide.
* @name authenticateToken
* @route {POST} /authenticateToken
*/
app.use(authenticateToken);

/**
* Fonction permettant de récupérer tous les objets Timing dans la base de données.
* @name timingRoute
* @route {GET} /timingFindAll
*/
app.use('/timingFindAll', timingRoute);

/**
* Fonction permettant de récupérer tous les objets Event dans la base de données.
* @name eventRoute
* @route {GET} /eventFindAll
*/
app.use('/eventFindAll', eventRoute);

/**
* Fonction permettant de supprimer un objet Event dans la base de données.
* @name eventDelete
* @route {DELETE} /eventDelete
*/
app.use('/eventDelete', eventDelete);

/**
* Fonction permettant de supprimer un objet Timing dans la base de données.
* @name timingDelete
* @route {DELETE} /timingDelete
*/
app.use('/timingDelete', timingDelete);

/**
* Fonction permettant d'insérer un objet Event dans la base de données.
* @name insertEvent
* @route {POST} /insertEvent
*/
app.use('/insertEvent', insertEvent);

/**
* Fonction permettant d'insérer un objet Timing dans la base de données.
* @name insertTiming
* @route {POST} /insertTiming
*/
app.use('/insertTiming', insertTiming);

/**
* Fonction permettant de récupérer un objet Event dans la base de données.
* @name findEventId
* @route {POST} /findEventId
*/
app.use('/findEventId', findEventId);

/**
* Fonction permettant de récupérer un objet Timing dans la base de données.
* @name findTimingId
* @route {POST} /findTimingId
*/
app.use('/findTimingId', findTimingId);

/**
* Fonction permettant de mettre à jour un objet Timing dans la base de données.
* @name updateTiming
* @route {POST} /updateTiming
*/
app.use('/updateEvent', updateEvent);

/**
* Fonction permettant de mettre à jour un objet Timing dans la base de données.
* @name updateTiming
* @route {POST} /updateTiming
*/
app.use('/updateTiming', updateTiming);

/**
* Fonction permettant de supprimer tous les objets Event dans la base de données.
* @name eventDeleteAll
* @route {DELETE} /eventDeleteAll
*/
app.use('/eventDeleteAll', eventDeleteAll);

/**
* Fonction permettant de supprimer tous les objets Timing dans la base de données.
* @name timingDeleteAll
* @route {DELETE} /timingDeleteAll
*/
app.use('/timingDeleteAll', timingDeleteAll);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});