import express from 'express';
import Timing from '../../dao/timingSqliteDao.js';
const router = express.Router();
const time = new Timing();

/**
 * Fonction permettant de récupérer tous les objets Timing dans la base de données.
 * @name findAll
 * @function
 * @param {Object} req - Requête envoyée par le client.
 * @param {Object} res - Réponse envoyée au client.
 * @returns {Object} - Résultat de la requête.
 */
router.get('/', async (req, res) => {
    await time.findAll().then((result) => {
        res.send(result);
    });
});

export default router;
