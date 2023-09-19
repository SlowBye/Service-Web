class Prof {
    constructor(pseudo, nom, prenom, email, cours) {
      this.pseudo = pseudo;
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.cours = cours;
    }
  
    getPseudo() {
      return this.pseudo;
    }
  
    getNom() {
      return this.nom;
    }
  
    getPrenom() {
      return this.prenom;
    }
  
    getEmail() {
      return this.email;
    }
  
    getCours() {
      return this.cours;
    }

    getTiming() {}
  }
  