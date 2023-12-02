import express from 'express';
import Event from '../../dao/eventSqliteDao.js';
const router = express.Router();

router.delete('/', async (req, res) => {
    try {
        let event = new Event();
        const result = await event.deleteAll();
        res.send(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default router;