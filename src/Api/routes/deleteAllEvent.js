import express from 'express';
import Event from '../../dao/eventSqliteDao.js';
const router = express.Router();

/**
 * Fonction permettant de supprimer tous les objets Event dans la base de données.
 * @name deleteAll
 * @function
 * @param {Object} req - Requête envoyée par le client.
 * @param {Object} res - Réponse envoyée au client.
 * @returns {Object} - Résultat de la requête.
 */
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