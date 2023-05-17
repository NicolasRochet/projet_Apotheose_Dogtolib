// export des actions
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const SAVE_AUTH_TOKEN = "SAVE_AUTH_TOKEN";
export const CHANGE_PROFIL = "CHANGE_PROFIL";
export const LOAD_PROFIL = "LOAD_PROFIL";
export const SAVE_PROFIL = "SAVE_PROFIL";
export const LOGOUT = "LOGOUT";

// Action pour se connecter
export const submitLogin = (email, password) => ({
  type: SUBMIT_LOGIN,
  email,
  password,
});

// Action pour sauvegarder ce que renvoie l'API pour le stocker dans le store
export const saveAuthToken = (token) => ({
  type: SAVE_AUTH_TOKEN,
  token,
});

// Action pour charger les données du profil
export const loadProfil = () => ({
  type: LOAD_PROFIL,
});

// Action pour sauvegarder les données du profil
export const saveProfil = (profil) => ({
  type: SAVE_PROFIL,
  profil,
});

// Action pour modifier les informations dans les champs du profil
export const updateField = (identifier, newValue) => ({
  type: CHANGE_PROFIL,
  newValue,
  identifier,
});

//Action pour se déconnecter
export const logout = () => ({
  type: LOGOUT,
});
