import Dao from './dao.js'

class timingSqliteDao extends Dao {

    async findAll() {
        return super.findAll('Timings')
    }

    async findById(timing) {
        return super.findById(timing.id,"Timings")
    }

    async insert(timing) {
        return super.insert(timing,"Timings")
    }

    async update(timing) {
        return super.update(timing,"Timings")
    }

    async delete(timing) {
        return super.delete(timing.id,"Timings")
    }

    async deleteAll() {
        return super.deleteAll("Timings")
    }
}

export default timingSqliteDao;
