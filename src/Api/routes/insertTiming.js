import express from 'express';
import Timing from '../../dao/timingSqliteDao.js';
import T from '../../tables/Timings.js';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let Te = new Timing();
        let time = new T("",req.body.start, req.body.end, req.body.comment);
        const result = await Te.insert(time);
        res.send(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default router;