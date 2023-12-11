import Dao from './dao.js'

/**
 * Classe permettant d'intéragir avec la base de données SQLite.
 * @class eventSqliteDao
 * @extends Dao
 */
class eventSqliteDao extends Dao {


    /**
    * Fonction permettant de récupérer tous les objets dans la base de données.
    * @method
    * @returns {Object} - Résultat de la requête.
    */
    async findAll() {
        return super.findAll(1)
    }

    /**
    * Fonction permettant de récupérer un objet dans la base de données.
    * @method
    * @param {Object} event - Objet à récupérer dans la base de données.
    * @returns {Object} - Résultat de la requête.
    */
    async findById(event) {
        return super.findById(event.id,1)
    }

    /**
    * Fonction permettant d'insérer un objet dans la base de données.
    * @method
    * @param {Object} event - Objet à insérer dans la base de données.
    * @returns {Object} - Résultat de la requête.
    */
    async insert(event){
        return super.insert(event,1)
    }

    /**
    * Fonction permettant de mettre à jour un objet dans la base de données.
    * @method
    * @param {Object} event - Objet à mettre à jour dans la base de données.
    * @returns {Object} - Résultat de la requête.
    */
    async update(event) {
        return super.update(event,1)
    }

    /**
    * Fonction permettant de supprimer un objet dans la base de données.
    * @method
    * @param {Object} event - Objet à supprimer dans la base de données.
    * @returns {Object} - Résultat de la requête.
    */
    async delete(event) {
        return super.delete(event.id,1)
    }

    /**
    * Fonction permettant de supprimer tous les objets dans la base de données.
    * @method
    * @returns {Object} - Résultat de la requête.
    */
    async deleteAll() {
        return super.deleteAll(1)
    }
}

export default eventSqliteDao;
