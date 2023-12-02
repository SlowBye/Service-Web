import express from 'express';
import Timming from '../../dao/timingSqliteDao.js';
const router = express.Router();
let timing = new Timming();

router.delete('/', async (req, res) => {
    try {
        const result = await timing.deleteAll();
        res.send(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default router;