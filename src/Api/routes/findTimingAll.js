import express from 'express';
import Timing from '../../dao/timingSqliteDao.js';
const router = express.Router();
const time = new Timing();

router.get('/', async (req, res) => {
    await time.findAll().then((result) => {
        res.send(result);
    });
});

export default router;
