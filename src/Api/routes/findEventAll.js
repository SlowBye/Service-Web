import express from 'express';
import Event from '../../dao/eventSqliteDao.js';
const router = express.Router();
const event = new Event();

router.get('/', async (req, res) => {
    try {
        const result = await event.findAll();
        res.send(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
