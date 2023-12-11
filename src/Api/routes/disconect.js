import express from 'express';
import jwt from 'jsonwebtoken';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const router = express.Router();

/**
 * Fonction permettant de déconnecter un utilisateur.
 * @name disconnect
 * @function
 * @param {Object} req - Requête envoyée par le client.
 * @param {Object} res - Réponse envoyée au client.
 * @returns {Object} - Résultat de la requête.
 */
router.get('/', async (req, res) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(400).send('Invalid token format');
    }

    const token = authHeader.split(' ')[1];

    try {
        const db = await open({
            filename: '../../db/database.db',
            driver: sqlite3.Database
        });

        const params = [token];

        await db.run("INSERT INTO Token (token) VALUES (?)", params);

        res.status(200).json({ message: 'Token inserted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;