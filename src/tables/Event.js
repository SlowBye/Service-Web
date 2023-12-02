class Event {
    #id
    #title
    #description
    
  constructor(id=null, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  setId(id) {
        this.id = id;
    }

  getId() {
      return this.id;
  }

  getTitle() {
      return this.title;
  }

  getDescription() {
      return this.description;
  }
}

export default Event;
