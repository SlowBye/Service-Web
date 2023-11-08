import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import Timing from '../tables/Timings.js'
import Event from '../tables/Event.js'
class Dao {
    constructor(){}

    async insert(data, type) {
        const db = await open({
            filename: './db/database.db',
            driver: sqlite3.Database
        });
    
        try {
            if (type === "Event") {
                const result = await db.run('INSERT INTO Event (title, description) VALUES (?, ?)', [data.title, data.description]);
                await data.setId(result.lastID);
                console.log(result.lastID);
            } else {
                const result = await db.run('INSERT INTO Timing (start, end, comment) VALUES (?, ?, ?)', [data.start, data.end, data.comment]);
                await data.setIdTiming(result.lastID);
                console.log(result.lastID);
            }
        } catch (err) {
            console.error(err.message);
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
            await db.run('DELETE FROM Event WHERE id_Event = ?', [data.id]);
        }
        else{
            await db.run('DELETE FROM Timing WHERE id_timing = ?', [data.id]);
        }
    }

    async findById(data,type){
        const db = await open({
            filename: './db/database.db',
            driver: sqlite3.Database
        })
        if(type==="Event"){
            return await db.get('SELECT * FROM Event WHERE id_Event = ?', [data.id]);
        }
        else{
            return await db.get('SELECT * FROM Timing WHERE id_timing = ?', [data.id]);
        }
    }

    async findAll(type){
        const db = await open({
            filename: './db/database.db',
            driver: sqlite3.Database
        })
        if(type==="Event"){
            const result = await db.all('SELECT * FROM Event');
            return result;
        }
        else{
            const result = await db.all('SELECT * FROM Timing')
            console.log(result);
            return result;
        }
    }
}

export default Dao;