_NOTE _

**A faireau sprint 3**
ROUTES & composants

- Créé le composant "vous êtes inscrit"
- Créé le composant de la route 404
- Ajouter les liens sur les icones de la navBar
- Afficher les icones de valeur dynamique selon l'animal
- Mettre en place la route pour que la modification des données du profil soit prise en compte

CSS

- Ajouter le responsive sur toutes les pages
- Page account => modifier les icones et la mise en pages des animaux
- Bouton déconnexion
- NavBar toujours de la meme taille selon les pages + longueur + modifier icone en fonction de l'animal
- Register Radio

REFACTO

- Pensez à remplacer les clés unique par les ID,
- Refacto les formulaires dans un composant à part

**Aide au code**

- Seul le formulaire d'inscription doit avoir accès aux valeurs des inputs (que ce soit text, email, password ou radio) -> useState (inutile d'alourdir le projet avec Redux)

- Il faut intercepter le formulaire à sa soumission

- A la soumission du formulaire, on a deux choix :

  - Utiliser un middleware pour consommer l'API
  - Consommer l'API directement dans le composant de la page Register

- La consommation de l'API (via axios) doit inclure les différentes valeurs. Comme on ne passe pas par Redux, il faut faire ça :
  - Cas du middleware :
    - Transmettre dans l'action un payload (= charge utile, soit la donnée sous forme d'objet -> { username: '', password: '', /_ ... _/ })
  - Cas de la consommation dans le composant :
    - Utiliser les valeurs des useState (c'est directement dans le composant, c'est donc plus pratique !)
- Une fois la réponse obtenue (= await axios.post() || axios.post().then()), il faudrait envisager la redirection sur la page "/" (accueil)
