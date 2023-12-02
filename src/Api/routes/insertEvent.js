import express from 'express';
import Event from '../../dao/eventSqliteDao.js';
import E from '../../tables/Event.js';
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        let EV = new Event();
        let event = new E("",req.body.title, req.body.description);
        const result = await EV.insert(event);
        res.send(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default router;