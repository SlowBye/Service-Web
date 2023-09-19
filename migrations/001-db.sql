--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------
CREATE TABLE Prof (
    pseudo VARCHAR(255) PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cours INTEGER NOT NULL,
    FOREIGN KEY (cours) REFERENCES Cours(id)
);

CREATE TABLE Cours(
    id Serial PRIMARY KEY,
    nom_prof INTEGER NOT NULL,
    nom VARCHAR(255) NOT NULL,
    FOREIGN KEY (nom_prof) REFERENCES Prof(pseudo)
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------
Drop table Cours;
Drop table Prof;