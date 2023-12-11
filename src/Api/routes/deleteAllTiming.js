import express from 'express';
import Timming from '../../dao/timingSqliteDao.js';
const router = express.Router();
let timing = new Timming();

/**
 * Fonction permettant de supprimer tous les objets Timing dans la base de données.
 * @name deleteAll
 * @function
 * @param {Object} req - Requête envoyée par le client.
 * @param {Object} res - Réponse envoyée au client.
 * @returns {Object} - Résultat de la requête.
 */
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