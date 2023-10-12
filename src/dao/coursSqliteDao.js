import courDao from './courDao.js';

class coursSqliteDao extends courDao{

    async findAll(){
        return this.db.all("SELECT * FROM cours");
    }

    async FindById(cours){
        return this.db.get('SELECT * FROM cours WHERE id = :id', [cours.id]);
    }

    async insert(cours){
        return this.db.run('INSERT INTO cours (nomProf, nom) VALUES (?, ?)', [cours.nomProf, cours.nom]);
    }

    async update(cours){
        return this.db.run('UPDATE cours SET nomProf = ?, nom = ? WHERE id = ?', [cours.nomProf, cours.nom, cours.id]);
    }

    async delete(cours){
        return this.db.run('DELETE FROM cours WHERE id = ?', [cours.id]);
    }

}