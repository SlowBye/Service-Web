import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

function getDB(){
    return open({
        filename: '../../db/database.db',
        driver: sqlite3.Database
    });
}

export default getDB;