![Epsi](https://www.epsi.fr/wp-content/uploads/2018/10/logomonogramme.jpg)

# MSPR2
## _Administration & Conception de Solutions d’Infrastructure_


Portail sécurisé vers Active Directory comportant:

- Authentification à double facteur par mail
- Anti Brute-Force
- Vérification de l'adresse IP de l'utilisateur
- Vérification du navigateur de l'utilisateur

## Installation

Le portail nécessite [Node.js](https://nodejs.org/) pour fonctionner.

Installer les dépendance et lancer le serveur:

```sh
cd conceptionGestionInfrastructure
npm install
npm start
```

## Manuel utilisateur pour l'authentification
Shéma de l'architecture

![My animated logo](https://github.com/ClementGit-hub/conceptionGestionInfrastructure/blob/master/assets/Architecture_MSPR2.jpg)

Guide de l'utilisateur
> L'authentification à deux facteurs ajoute une couche supplémentaire de sécurité à aux comptes des utilisateurs. En vérifiant l’identité des utilisateurs à l'aide 
> d'un second facteur, il est plus difficile qu’un tierce ce connecte à votre compte même en sachant le nom d’utilisateur et le mot de passe de l’utilisateur.

> ![My animated logo](https://github.com/ClementGit-hub/conceptionGestionInfrastructure/blob/master/assets/unknown.png)

> 1. L’utilisateur saisi son nom d'utilisateur et son mot de passe sur son ordinateur.
> 2. L’utilisateur reçoit un message avec un mot de passe à sa boite mail pour valider son identité.
> 3. L’utilisateur tape le code qu’il a reçu sur son ordinateur.
> 4. Si le mot de passe est correct la connexion sécurisée est établie.

Processus d'authentification

![My animated logo](https://github.com/ClementGit-hub/conceptionGestionInfrastructure/blob/master/assets/FlowChart_MSPR2.drawio.png)
