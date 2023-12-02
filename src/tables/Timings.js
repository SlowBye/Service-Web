class Timing {
    #id;
    #start;
    #end;
    #comment;
    
  constructor(id=null, start, end, comment) {
    this.id = id;
    this.start = start;
    this.end = end;
    this.comment = comment;
  }

    setIdTiming(id) {
        this.id_Timing = id;
    }

  getIdTiming() {
      return this.id_Timing;
  }

  getStart() {
      return this.start;
  }

  getEnd() {
      return this.end;
  }

  getComment() {
      return this.comment;
  }
}

export default Timing;
