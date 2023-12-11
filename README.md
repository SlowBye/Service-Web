# Service-Web

## Description

c'est un service web qui permet de faire appel a des routes pour faire des requetes sur une base de donnée simple (ici une base de donnée d'Evenement et de Timing).

## Installation

Pour utiliser ce service web, il faut faire:

```npm install```

ensuite il faut lancer le index.js avec la commande:

```npm start```

ceci va creer la base de donnée si elle n'existe pas.

ensuite il faut aller dans le repertoire src et ensuite dans le repertoire Api et lancer le fichier Api.js avec la commande:

```node Api.js```

ceci va lancer le service web.

## Test unitaire

Pour lancer les test unitaire il faut lancer le service web a l'aide de la commande precendente et ensuite utiliser la commande:

```npm test```

cecis va lancer les test unitaire de chaque route afin de verifier qu'elle fonctionne correctement.

## details des routes

Login : permet de se connecter a l'application et de recuperer un token.
lien: POST http://localhost:3000/login
parametre : {username: (nom d'utilisateur), password: (mot de passe)}
Token: aucun

disconnect : permet de se deconnecter de l'application.
lien: POST http://localhost:3000/disconnect
parametre : aucun
Token: necessaire

eventFindAll : permet de recuperer tout les evenements de la base de donnée.
lien: GET http://localhost:3000/eventFindAll
parametre: aucun
Token: necessaire

eventDeleteAll : permet de supprimer tout les evenements de la base de donnée.
lien: DELETE http://localhost:3000/eventDeleteAll
parametre : aucun
Token: necessaire

findEventId : permet de recuperer un evenement de la base de donnée en fonction de son id.
lien: POST http://localhost:3000/findEventId
parametre : {id: (id de l'evenement)}
Token: necessaire

insertEvent : permet d'inserer un evenement dans la base de donnée.
lien: POST http://localhost:3000/insertEvent
parametre : {title: (titre de l'evenement), description: (description de l'evenement)}

updateEvent : permet de modifier un evenement de la base de donnée en fonction de son id.
lien: POST http://localhost:3000/updateEvent
parametre : {id: (id de l'evenement), title: (nouveau titre de l'evenement), description: (nouvelle description de l'evenement)}
Token: necessaire

eventDelete : permet de supprimer un evenement de la base de donnée en fonction de son id.
lien: DELETE http://localhost:3000/eventDelete
parametre : {id: (id de l'evenement)}
Token: necessaire

timingFindAll : permet de recuperer tout les timing de la base de donnée.
lien: GET http://localhost:3000/timingFindAll
parametre: aucun
Token: necessaire

timingDeleteAll : permet de supprimer tout les timing de la base de donnée.
lien: DELETE http://localhost:3000/timingDeleteAll
parametre : aucun
Token: necessaire

findTimingId : permet de recuperer un timing de la base de donnée en fonction de son id.
lien: POST http://localhost:3000/findTimingId
parametre : {id: (id du timing)}
Token: necessaire

insertTiming : permet d'inserer un timing dans la base de donnée.
lien: POST http://localhost:3000/insertTiming
parametre : {idEvent: (id de l'evenement), start: (date et heure debut du timing), end: (date et heure de fin du timing)}

updateTiming : permet de modifier un timing de la base de donnée en fonction de son id.
lien: POST http://localhost:3000/updateTiming
parametre : {id: (id du timing), idEvent: (id de l'evenement), start: (nouvelle date et heure debut du timing), end: (nouvelle date et heure de fin du timing)}
Token: necessaire

timingDelete : permet de supprimer un timing de la base de donnée en fonction de son id.
lien: DELETE http://localhost:3000/timingDelete
parametre : {id: (id du timing)}
Token: necessaire


