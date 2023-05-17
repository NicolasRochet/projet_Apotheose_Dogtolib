import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://dogtolib.herokuapp.com",
});

const API = {
  auth: {
    async signin(email, password) {
      return axios.post("/auth/signin", { email, password });
    },
  },

  user: {
    async profil(token) {
      return axios.get("/profile", {
        headers: {
          "x-auth-token": token,
        },
      });
    },
  },

  register: {
    async newUser(mergeData) {
      await axios.post("/auth/register", mergeData);
      return;
    },
  },

  update: {
    async accountEdit(token, key, value) {
      console.log("console log de index", { key });
      console.log(token);

      await axios.patch(
        "/profile",
        {
          headers: {
            "x-auth-token": token,
          },
        },
        {
          [key]: value,
        }
      );
      return;
    },
  },
};

export default API;
