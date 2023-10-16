import Dao from './dao.js'

class eventSqliteDao extends Dao {
// a faire sur dao
    async findAll() {
        super.findAll("Event")
    }

    async findById(event) {
        super.findById(event.getIdEvent,"Event")
    }

    async insert(event){
        super.insert(event,"Event")
    }

    async update(event) {
        super.update(event,"Event")
    }

    async delete(event) {
        super.delete(event.getIdEvent,"Event")
    }
}

export default eventSqliteDao;
