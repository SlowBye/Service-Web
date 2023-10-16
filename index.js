// import {creerdb} from "./src/Migration.js"
import Timing from './src/tables/Timings.js'
import Event from './src/tables/Event.js'
import EventSqliteDao from './src/dao/eventSqliteDao.js'
import TimingSqliteDao from './src/dao/timingSqliteDao.js'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import fs from 'fs'

function databaseExists() {
    const dbPath = './db/database.db'; // Chemin vers la base de données

    if (fs.existsSync(dbPath)) {
        return true; // La base de données existe
    } else {
        return false; // La base de données n'existe pas
    }
}

async function creerdb() {
    if (!databaseExists()) {
        const db = await open({
            filename: './db/database.db',
            driver: sqlite3.Database,
        });
        await db.migrate();
    } else {
        console.log('La base de données existe déjà.');
    }
}

//code général de l'application
async function App() {
    console.log("App is running");
    
    //cration d'une base de donnée 
    await creerdb();

    //creation d'un event
    const event = new Event("","test","test");

    //creation d'un timing
    const timing = new Timing("","2021-01-01 00:00:00","2021-01-01 00:00:00","test");

    //creation d'un dao
    const eventSqliteDao = new EventSqliteDao();
    const timingSqliteDao = new TimingSqliteDao();

    //ajouter a la bdd
    await eventSqliteDao.insert(event);
    await timingSqliteDao.insert(timing);

    console.log("App is done");
}

App();