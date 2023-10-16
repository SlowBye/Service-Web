--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------
CREATE TABLE Event (
    id_Event INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE Timing (
    id_Timing INTEGER PRIMARY KEY AUTOINCREMENT,
    start DATE NOT NULL,
    end DATE NOT NULL,
    comment VARCHAR(255) NOT NULL
);

CREATE TABLE Link (
    id_event INT NOT NULL,
    id_timing INT NOT NULL,
    FOREIGN KEY (id_event) REFERENCES Event(id_Event),
    FOREIGN KEY (id_timing) REFERENCES Timing(id_timing)
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------
DROP TABLE Event;
DROP TABLE Timing;
DROP TABLE Link;