// import {creerdb} from "./src/Migration.js"
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

//creation de la base de donnée
async function creerdb () {
    const db = await open({
      filename: './db/database.db',
      driver: sqlite3.Database
    })
    await db.migrate()
}

//code général de l'application
async function App() {
    console.log("App is running");
    //cration d'une base de donnée 
    await creerdb();
    //
    console.log("App is done");
}

App();