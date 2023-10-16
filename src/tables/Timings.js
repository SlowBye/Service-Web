class Timing {
  constructor(id_Timing=null, start, end, comment) {
      this.start = start;
      this.end = end;
      this.comment = comment;
  }

  getIdTiming() {
      return this.id_timing;
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
