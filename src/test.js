import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

function test(){
    open({
        filename: '../db/database.db',
        driver: sqlite3.Database
    }).then( (db) => {
        db.run('select * from Timing').then( (result) => {
            console.log(result);
        });
    });
}


test();

