import express from 'express';
import Event from '../../dao/eventSqliteDao.js';
const router = express.Router();
let event = new Event();

/**
 * Fonction permettant de supprimer un objet Event dans la base de données.
 * @name delete
 * @function
 * @param {Object} req - Requête envoyée par le client.
 * @param {Object} res - Réponse envoyée au client.
 * @returns {Object} - Résultat de la requête.
 */
router.post('/', async (req, res) => {
    try {
        let oui = [] 
        oui["id"] = req.body.id;
        const result = await event.findById(oui);
        res.send(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default router;