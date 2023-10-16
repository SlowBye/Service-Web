import Dao from './dao.js'

class timingSqliteDao extends Dao {

    async findAll() {
        super.findAll('Timings')
    }

    async findById(timing) {
        super.findById(timing.getIdTiming(),"Timings")
    }

    async insert(timing) {
        super.insert(timing,"Timings")
    }

    async update(timing) {
        super.update(timing,"Timings")
    }

    async delete(timing) {
        super.delete(timing.getIdTiming(),"Timings")
    }
}

export default timingSqliteDao;
