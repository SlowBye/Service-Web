import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

class Dao {
    constructor(){}

    async insert(data, type) {
        try {
            const db = await open({
                filename: '../../db/database.db',
                driver: sqlite3.Database
            });
            if (type === 1) {
                const result = await db.run('INSERT INTO Event (title, description) VALUES (?, ?)', [data.title, data.description]);
                await data.setId(result.lastID);
                return result
            } else {
                const result = await db.run('INSERT INTO Timing (start, end, comment) VALUES (?, ?, ?)', [data.start, data.end, data.comment]);
                await data.setIdTiming(result.lastID);
                return result
            }
        } catch (err) {
            console.error(err.message);
        }
    }
    

    async update(data,type){
        const db = await open({
            filename: '../../db/database.db',
            driver: sqlite3.Database
        });
        if(type===1){
            return await db.run('UPDATE Event SET title = ?, description = ? WHERE id_Event = ?', [data.title, data.description, data.id]);
        }
        else{
            console.log(data);
            return await db.run('UPDATE Timing SET start = ?, end = ?, comment = ? WHERE id_Timing = ?', [data.start, data.end, data.comment, data.id]);
        }
    }

    async delete (data,type){
        const db = await open({
            filename: '../../db/database.db',
            driver: sqlite3.Database
        });
        if(type===1){
            return await db.run('DELETE FROM Event WHERE id_Event = ?', [data]);
        }
        else{
            return await db.run('DELETE FROM Timing WHERE id_timing = ?', [data]);
        }
    }

    async findById(data,type){
        const db = await open({
            filename: '../../db/database.db',
            driver: sqlite3.Database
        });
        if(type===1){
            return await db.get('SELECT * FROM Event WHERE id_Event = ?', [data]);
        }
        else{
            return await db.get('SELECT * FROM Timing WHERE id_timing = ?', [data]);
        }
    }

    async findAll(type){
        const db = await open({
            filename: '../../db/database.db',
            driver: sqlite3.Database
        });
        if(type===1){
            const result = await db.all('SELECT * FROM Event');
            return result;
        }
        else{
            const result = await db.all('SELECT * FROM Timing')
            return result;
        }
    }

    async deleteAll(type){
        const db = await open({
            filename: '../../db/database.db',
            driver: sqlite3.Database
        });
        if(type===1){
            return await db.run('DELETE FROM Event');
        }
        else{
            return await db.run('DELETE FROM Timing');
        }
    }
}

export default Dao;