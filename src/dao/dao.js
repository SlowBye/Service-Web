import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

/**
* Class represente un DAO.
* @class
* @abstract
*/
class Dao {
    /**
    * Constructeur de la classe Dao.
    * @constructor
    */
    constructor(){}

    /**
    * Fonction permettant d'insérer un objet dans la base de données.
    * @method
    * @param {Object} data - Objet à insérer dans la base de données.
    * @param {number} type - Type de l'objet à insérer dans la base de données.
    * @returns {Object} - Résultat de la requête.
    * @throws {Error} - Lève une erreur si la requête échoue.
    */
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
    
    /**
    * Fonction permettant de mettre à jour un objet dans la base de données.
    * @method
    * @param {Object} data - Objet à mettre à jour dans la base de données.
    * @param {number} type - Type de l'objet à mettre à jour dans la base de données.
    * @returns {Object} - Résultat de la requête.
    */
    async update(data,type){
        const db = await open({
            filename: '../../db/database.db',
            driver: sqlite3.Database
        });
        if(type===1){
            return await db.run('UPDATE Event SET title = ?, description = ? WHERE id_Event = ?', [data.title, data.description, data.id]);
        }
        else{
            return await db.run('UPDATE Timing SET start = ?, end = ?, comment = ? WHERE id_Timing = ?', [data.start, data.end, data.comment, data.id]);
        }
    }

    /**
    * Fonction permettant de supprimer un objet dans la base de données.
    * @method
    * @param {Object} data - Objet à supprimer dans la base de données.
    * @param {number} type - Type de l'objet à supprimer dans la base de données.
    * @returns {Object} - Résultat de la requête.
    * @throws {Error} - Lève une erreur si la requête échoue.
    */
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

    /**
    * Fonction permettant de récupérer un objet a partir de l'id dans la base de données.
    * @method
    * @param {Object} data - Objet à récupérer dans la base de données.
    * @param {number} type - Type de l'objet à récupérer dans la base de données.
    * @returns {Object} - Résultat de la requête.
    * @throws {Error} - Lève une erreur si la requête échoue.
    */
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

    /**
    * Fonction permettant de récupérer tous les objets dans la base de données.
    * @method
    * @param {number} type - Type de l'objet à récupérer dans la base de données.
    * @returns {Object} - Résultat de la requête.
    * @throws {Error} - Lève une erreur si la requête échoue.
    */ 
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

    /**
    * Fonction permettant de supprimer tous les objets dans la base de données.
    * @method
    * @param {number} type - Type de l'objet à supprimer dans la base de données.
    * @returns {Object} - Résultat de la requête.
    * @throws {Error} - Lève une erreur si la requête échoue.
    */
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