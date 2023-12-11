import Dao from './dao.js'

/**
* Classe permettant d'intéragir avec la base de données SQLite.
* @class timingSqliteDao
* @extends Dao
*/
class timingSqliteDao extends Dao {

    /**
    * Fonction permettant de récupérer tous les objets dans la base de données.
    * @returns {Object} - Résultat de la requête.
    * @method
    * @async
    */
    async findAll() {
        return super.findAll('Timings')
    }

    /**
    * Fonction permettant de récupérer un objet dans la base de données.
    * @param {Object} timing - Objet à récupérer dans la base de données.
    * @returns {Object} - Résultat de la requête.
    * @method
    * @async
    */
    async findById(timing) {
        return super.findById(timing.id,"Timings")
    }

    /**
    * Fonction permettant d'insérer un objet dans la base de données.
    * @param {Object} timing - Objet à insérer dans la base de données.
    * @returns {Object} - Résultat de la requête.
    * @method
    * @async
    */
    async insert(timing) {
        return super.insert(timing,"Timings")
    }

    /**
    * Fonction permettant de mettre à jour un objet dans la base de données.
    * @param {Object} timing - Objet à mettre à jour dans la base de données.
    * @returns {Object} - Résultat de la requête.
    * @method
    * @async
    */
    async update(timing) {
        return super.update(timing,"Timings")
    }

    /**
    * Fonction permettant de supprimer un objet dans la base de données.
    * @param {Object} timing - Objet à supprimer dans la base de données.
    * @returns {Object} - Résultat de la requête.
    * @method
    * @async
    */
    async delete(timing) {
        return super.delete(timing.id,"Timings")
    }

    /**
    * Fonction permettant de supprimer tous les objets dans la base de données.
    * @returns {Object} - Résultat de la requête.
    * @method
    * @async
    */
    async deleteAll() {
        return super.deleteAll("Timings")
    }
}

export default timingSqliteDao;
