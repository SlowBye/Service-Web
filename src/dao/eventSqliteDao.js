import Dao from './dao.js'

class eventSqliteDao extends Dao {
// a faire sur dao
    async findAll() {
        return super.findAll(1)
    }

    async findById(event) {
        return super.findById(event.id,1)
    }

    async insert(event){
        return super.insert(event,1)
    }

    async update(event) {
        return super.update(event,1)
    }

    async delete(event) {
        return super.delete(event.id,1)
    }

    async deleteAll() {
        return super.deleteAll(1)
    }
}

export default eventSqliteDao;
