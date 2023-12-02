import express from 'express';
import Event from '../../dao/eventSqliteDao.js';
const router = express.Router();
let event = new Event();

router.delete('/', async (req, res) => {
    try {
        let oui = [] 
        oui["id"] = req.body.id;
        const result = await event.delete(oui);
        res.send(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default router;