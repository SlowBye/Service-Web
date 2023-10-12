import profDao from './profDao';

class profsqliteDao extends profDao{

    async findAll(){
        return this.db.all("SELECT * FROM prof");
    }

    async FindById(prof){
        return this.db.get('SELECT * FROM prof WHERE id = :pseudo', [prof.pseudo]);
    }

    //a modifier
    async insert(prof){
        return this.db.run('INSERT INTO prof (pseudo, nom, prenom, email, cours) VALUES (?, ?, ?, ?, ?)', [prof.pseudo, prof.nom, prof.prenom, prof.email, prof.cours]);
    }
    
    // a modifier
    async update(prof){
        return this.db.run('UPDATE prof SET nom = ?, prenom = ?, email = ?, cours = ? WHERE pseudo = ?', [prof.nom, prof.prenom, prof.email, prof.cours, prof.pseudo]);
    }

    // a modifier
    async delete(prof){
        return this.db.run('DELETE FROM prof WHERE pseudo = ?', [prof.pseudo]);
    }

}
