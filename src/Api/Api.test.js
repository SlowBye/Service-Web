const axios = require('axios');
let Token;

describe('Connexion recuperation de token', () => {
    it('responds with JSON containing a token', async () => {
        try {
            const response = await axios.post(`http://localhost:3001/login`, {
                username: 'admin',
                password: 'admin'
            });
            expect(response.status).toBe(200);
            Token = response.data.token;
        } catch (error) {
            throw error;
        }
    }
    );
});

describe('FindAll d\'Event', () => {
    it('renvoi tout les evenements', async () => {
        try {
            const response = await axios.get('http://localhost:3001/eventFindAll', {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            expect(response.status).toBe(200);
        } catch (error) {
            throw error;
        }
    });
});

describe('FindAll de Timing', () => {
    it('renvoi tout les timings', async () => {
        try {
            const response = await axios.get('http://localhost:3001/timingFindAll', {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });
            expect(response.status).toBe(200);
        } catch (error) {
            throw error;
        }
    });
});

describe('insert de Event', () => {
    it('Permet d\'inserer un Evenement à la base de données', async () => {
        try {
            const eventData = {
                title: "premier essai",
                description: "desc du premier"
            };

            const response = await axios.post('http://localhost:3001/insertEvent', eventData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            expect(response.status).toBe(200);
        } catch (error) {
            throw error;
        }
    });
});

describe('insert de Timing', () => {
    it('Permet d\'inserer un Timing à base de données', async () => {
        try {
            const eventData = {
                start: "10/12/2023 10h50",
                end: "10/12/2023 12h50",
                comment: "premier comment"
            };

            const response = await axios.post('http://localhost:3001/insertTiming', eventData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            expect(response.status).toBe(200);
        } catch (error) {
            throw error;
        }
    });
});

describe('find by id de Timing', () => {
    it('Permet de retrouver un Timing de la bdd à partir d\'un id', async () => {
        try {
            const eventData = {
                id: 1
            };

            const response = await axios.post('http://localhost:3001/findTimingId', eventData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            expect(response.status).toBe(200);
        } catch (error) {
            throw error;
        }
    });
});

describe('find by id d\'Event', () => {
    it('Permet de retrouver un Event de la bdd à partir d\'un id', async () => {
        try {
            const eventData = {
                id: 1
            };

            const response = await axios.post('http://localhost:3001/findEventId', eventData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            expect(response.status).toBe(200);
        } catch (error) {
            throw error;
        }
    });
});

describe('Update d\'Event', () => {
    it('Permet de changer la valeur d\'un evenement deja dans la bdd', async () => {
        try {
            const eventData = {
                id: 1,
                title: "premier modif",
                description: "desc de la modif"
            };

            const response = await axios.post('http://localhost:3001/updateEvent', eventData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            expect(response.status).toBe(200);
        } catch (error) {
            throw error;
        }
    });
});

describe('Update de Timing', () => {
    it('Permet de changer la valeur d\'un timing deja dans la bdd', async () => {
        try {
            const eventData = {
                id: 1,
                start: "10/12/2023 10h50",
                end: "10/12/2023 12h50",
                comment: "premier modif"
            };

            const response = await axios.post('http://localhost:3001/updateTiming', eventData, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            expect(response.status).toBe(200);
        } catch (error) {
            throw error;
        }
    });
});

// describe('Delete d\'Event', () => {
//     it('Permet de supprimer un Evenement dans la bdd a partir d\'un id', async () => {
//         try {
//             const eventData = {
//                 id: 1,
//             };

//             const response = await axios.delete('http://localhost:3001/eventDelete', eventData, {
//                 headers: {
//                     Authorization: `Bearer ${Token}`,
//                 },
//             });

//             expect(response.status).toBe(200);
//         } catch (error) {
//             throw error;
//         }
//     });
// });

// describe('Delete de Timing', () => {
//     it('Permet de supprimer un Timing dans la bdd a partir d\'un id', async () => {
//         try {
//             const eventData = {
//                 id: 1,
//             };

//             const response = await axios.delete('http://localhost:3001/timingDelete', eventData, {
//                 headers: {
//                     Authorization: `Bearer ${Token}`,
//                 },
//             });

//             expect(response.status).toBe(200);
//         } catch (error) {
//             throw error;
//         }
//     });
// });

describe('Delete All d\'Event', () => {
    it('Permet de supprimer tout les Evenements dans la bdd', async () => {
        try {

            const response = await axios.delete('http://localhost:3001/eventDeleteAll', {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            expect(response.status).toBe(200);
        } catch (error) {
            throw error;
        }
    });
});

describe('Delete All de Timing', () => {
    it('Permet de supprimer tout les Timings dans la bdd', async () => {
        try {
            const response = await axios.delete('http://localhost:3001/timingDeleteAll', {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            expect(response.status).toBe(200);
        } catch (error) {
            throw error;
        }
    });
});