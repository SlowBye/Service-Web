class Event {
  constructor(id=null, title, description) {
      this.title = title;
      this.description = description;
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
