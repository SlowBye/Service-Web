/**
 * Timing class
 * @class Timing
 * @property {number} id
 * @property {string} start
 * @property {string} end
 * @property {string} comment
 */

class Timing {
    #id;
    #start;
    #end;
    #comment;
  
  /**
  * @constructor
  * @param {number} id - id du timing
  * @param {string} start - heure de début du timing
  * @param {string} end - heure de fin du timing
  * @param {string} comment - commentaire du timing
  */
  constructor(id=null, start, end, comment) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.comment = comment;
  }

  /**
  * fonction permettant de mettre à jour l'id du timing
  * @method
  * @param {number} id - id du timing
  */
  setIdTiming(id) {
    this.id_Timing = id;
  }

  /**
  * fonction permettant de recuperer l'id du timing
  * @method
  * @return {string} id - id du timing
  */
  getIdTiming() {
    return this.id_Timing;
  }

  /**
  * fonction permettant de recuperer l'heure de début du timing
  * @method
  * @returns {string} - heure de début du timing
  */
  getStart() {
    return this.start;
  }

  /**
  * fonction permettant de recuperer l'heure de fin du timing
  * @method
  * @returns {string} - heure de fin du timing
  */
  getEnd() {
    return this.end;
  }

  /**
  * fonction permettant de recuperer le commentaire du timing
  * @method
  * @returns {string} - commentaire du timing
  */
  getComment() {
    return this.comment;
  }
}

export default Timing;
