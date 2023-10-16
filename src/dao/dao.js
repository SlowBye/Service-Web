import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
class Dao {
    constructor(){}

    async insert(data,type) {
        const db = await open({
            filename: './db/database.db',
            driver: sqlite3.Database
        })
        if(type==="Event"){
            await db.run('INSERT INTO Event (title, description) VALUES (?, ?)', [data.title, data.description]);
        }
        else{
            await db.run('INSERT INTO Timing (start, end, comment) VALUES (?, ?, ?)', [ data.start, data.end, data.comment]);
        }
    }

    async update(data,type){
        const db = await open({
            filename: './db/database.db',
            driver: sqlite3.Database
        })
        if(type==="Event"){
            await db.run('UPDATE Event SET title = ?, description = ? WHERE id_Event = ?', [data.title, data.description, data.id_Event]);
        }
        else{
            await db.run('UPDATE Timing SET start = ?, end = ?, comment = ? WHERE id_timing = ?', [data.start, data.end, timing.comment, data.id_Timing]);
        }
    }

    async delete (data,type){
        const db = await open({
            filename: './db/database.db',
            driver: sqlite3.Database
        })
        if(type==="Event"){
            await db.run('DELETE FROM Event WHERE id_Event = ?', [data.id_Event]);
        }
        else{
            await db.run('DELETE FROM Timing WHERE id_timing = ?', [data.id_Timing]);
        }
    }

    async findById(data,type){
        const db = await open({
            filename: './db/database.db',
            driver: sqlite3.Database
        })
        if(type==="Event"){
            await db.get('SELECT * FROM Event WHERE id_Event = ?', [data.id_Event]);
        }
        else{
            await db.get('SELECT * FROM Timing WHERE id_timing = ?', [data.id_Timing]);
        }
    }

    async findAll(type){
        const db = await open({
            filename: '../../db/database.db',
            driver: sqlite3.Database
        })
        if(type==="Event"){
            await db.all("SELECT * FROM Event");
        }
        else{
            await db.all("SELECT * FROM Timing");
        }
    }
}

export default Dao;