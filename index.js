import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import fs from 'fs'
/**
 * Fonction permettant de savoir si une base de données existe.
 * @returns {bool} - vrai si la base de données existe, faux sinon. 
 */
function databaseExists() {
    const dbPath = './db/database.db';

    if (fs.existsSync(dbPath)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Fonction permettant de créer une base de données.
 * @param {sqlite3.Database} db - La base de données à créer.
 * @returns {sqlite3.Database} - La base de données créée.
 */
async function creerdb(db) {
    if (!databaseExists()) {
        db = await open({
            filename: './db/database.db',
            driver: sqlite3.Database,
        });
        await db.migrate();
    } else {
        console.log('La base de données existe déjà.');
    }
}

/**
 * Fonction principale de l'application permettant de créer une base de données.
 */
async function App() {
    console.log("App is running");
    var db 
    await creerdb(db);
    console.log("App is done");
}

App();