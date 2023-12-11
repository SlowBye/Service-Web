import express from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router();

/**
 * Fonction permettant de connecter un utilisateur.
 * @name connect
 * @function
 * @param {Object} req - Requête envoyée par le client.
 * @param {Object} res - Réponse envoyée au client.
 * @returns {Object} - Résultat de la requête.
 */
router.post('/', async (req, res) => {
    const user = {
        id: 1,
        username: 'admin',
        password: 'admin'
    };

    if (!req.body.username || !req.body.password) {
        res.status(400).send('Error. Please enter the correct username and password');
        return;
    }

    if (req.body.username !== user.username || req.body.password !== user.password) {
        res.status(401).send('Error. Please enter the correct username and password');
        return;
    }   
    
    const token = jwt.sign({ sub: user.id },'secret', { expiresIn: '10m' });
    res.header('Authorization', `Bearer ${token}`).status(200).json({ token });
});

export default router;