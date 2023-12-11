import express from 'express';
import Timing from '../../dao/timingSqliteDao.js';
import T from '../../tables/Timings.js';
const router = express.Router();

/**
 * Fonction permettant d'insérer un objet Timing dans la base de données.
 * @name insertTiming
 * @function
 * @param {Object} req - Requête envoyée par le client.
 * @param {Object} res - Réponse envoyée au client.
 * @returns {Object} - Résultat de la requête.
 */
router.post('/', async (req, res) => {
    try {
        let Te = new Timing();
        let time = new T(req.body.id,req.body.start, req.body.end, req.body.comment);
        const result = await Te.update(time);
        res.send(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default router;