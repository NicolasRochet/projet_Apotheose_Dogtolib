// import axios from "axios";
import API from "../api";

// import des fichiers action
import { LOAD_PROFIL, saveProfil } from "../actions/user";

// Notre UserhMiddleware est appelé à chaque connexion de la part de l'utilisateur
const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_PROFIL:
      // Je crée ma variable pour récupérer les informations du user
      const { token } = store.getState().user;

      if (token === "") {
        console.warn("No token, not fetching profile data");
        return;
      }

      // On requete notre api avec les données enregistrées par l'user
      API.user.profil(token).then((response) => {
        // et on stock la réponse renvoyée
        const profil = response.data;
        store.dispatch(saveProfil(profil));
      });
      break;
    default:
  }
  next(action);
};

export default userMiddleware;
