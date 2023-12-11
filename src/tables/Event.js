/**
* Event class
* @class Event
* @param {number} id - id de l'event
* @param {string} title - titre de l'event
* @param {string} description - description de l'event
*/

class Event {
  #id
  #title
  #description

  /**
  * @constructor
  * @param {number} id - id de l'event
  * @param {string} title - titre de l'event
  * @param {string} description - description de l'event
  */
  constructor(id=null, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  /**
  * fonction permettant de mettre à jour l'id de l'event
  * @method
  * @param {number} id - id de l'event
  */
  setId(id) {
    this.id = id;
  }

  /**
  * fonction permettant de recuperer l'id de l'event
  * @method
  * @return {string} id - id de l'event
  */
  getId() {
    return this.id;
  }

  /**
  * fonction permettant de recuperer le titre de l'event
  * @method
  * @returns {string} - titre de l'event
  */
  getTitle() {
    return this.title;
  }

  /**
  * fonction permettant de recuperer la description de l'event
  * @method
  * @returns {string} description - descritpion de l'event
  */
  getDescription() {
    return this.description;
  }
}

export default Event;
