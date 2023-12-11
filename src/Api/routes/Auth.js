import jwt from 'jsonwebtoken';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

/**
 * Middleware pour vérifier si le token est valide.
 * @name authenticateToken
 * @function
 * @param {Object} req - Requête envoyée par le client.
 * @param {Object} res - Réponse envoyée au client.
 * @param {Object} next - Fonction permettant de passer au middleware suivant.
 * @returns {Object} - Résultat de la requête.
 */
export default async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.sendStatus(401);
    }

    const token = authHeader.split(' ')[1];

    try {
        jwt.verify(token, 'secret', async (err, decoded) => {
            if (err) {
                return res.sendStatus(403);
            }

            const db = await open({
                filename: '../../db/database.db',
                driver: sqlite3.Database
            });

            const storedToken = await db.get('SELECT token FROM Token WHERE token = ?', [token]);
            if (storedToken && storedToken.token === token) {
                return res.sendStatus(401);
            }

            req.user = decoded;
            next();
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
