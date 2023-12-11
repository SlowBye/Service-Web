import express from 'express';
import Event from '../../dao/eventSqliteDao.js';
const router = express.Router();
const event = new Event();

/**
 * Fonction permettant de récupérer tous les objets Event dans la base de données.
 * @name findAll
 * @function
 * @param {Object} req - Requête envoyée par le client.
 * @param {Object} res - Réponse envoyée au client.
 * @returns {Object} - Résultat de la requête.
 */
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
