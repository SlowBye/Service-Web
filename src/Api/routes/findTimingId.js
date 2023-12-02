import express from 'express';
import Timming from '../../dao/timingSqliteDao.js';
const router = express.Router();
let timing = new Timming();

router.post('/', async (req, res) => {
    try {
        let oui = [] 
        oui["id"] = req.body.id;
        const result = await timing.findById(oui);
        res.send(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default router;