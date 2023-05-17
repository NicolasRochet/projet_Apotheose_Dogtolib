// Page de souscription
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import "./Register.scss";

// Import de Semantic-UI
import { Card } from "semantic-ui-react";

//Import API
import API from "../../api";

const advertising = [
  {
    image: "/images/avatar/large/elliot.jpg",
    link: "https://www.croquetteland.com/",
    header: "CroquetteLand",
    meta: "site de croquette",
    description:
      "Chez Croquetteland, trouvez tout pour vos animaux de compagnie",
  },
  {
    image: "/images/avatar/large/elliot.jpg",
    link: "https://www.croquetteland.com/",
    header: "CroquetteLand",
    meta: "site de croquette",
    description:
      "Chez Croquetteland, trouvez tout pour vos animaux de compagnie",
  },
  {
    image: "/images/avatar/large/elliot.jpg",
    link: "https://www.croquetteland.com/",
    header: "CroquetteLand",
    meta: "site de croquette",
    description:
      "Chez Croquetteland, trouvez tout pour vos animaux de compagnie",
  },
];

// Définition des labels pour chaque champs
const labelName = {
  email: "Adresse email",
  firstname: "Prénom",
  lastname: "Nom",
  phone_number: "Numéro de téléphone",
  address: "Adresse",
  zip_code: "Code postal",
  city: "Ville",
  password: "Mot de passe",
  repeat_password: "Confirmer le mot de passe",
};

function Register() {
  // J'initialise le state de mon register
  const [register, setRegister] = useState("");
  const [radioData, setRadioData] = useState("");

  // Récupérez les valeurs des champs du formulaire
  // Récupérez les valeurs des champs du formulaire
  const formData = {};
  Object.keys(labelName).forEach((prop) => {
    formData[prop] = register[prop];
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  }

  function handleChangeRadio(e) {
    const { name, value } = e.target;
    setRadioData({ [name]: value });
  }

  const mergeData = { ...formData, ...radioData };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("TODO");
    API.register.newUser(mergeData);
  }

  return (
    <div className="register">
      {/* // description de l'application       */}
      <h2>Veuillez vous inscrire</h2>
      <p className="register-description">
        Merci de votre confiance, remplissez les champs suivants pour commencer
        votre aventure par-minous
      </p>

      {/* // formulaire de connexion */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="profil-inputs">
          {Object.keys(labelName)
            .filter((prop) => prop !== "role") // Exclure le champ "role"
            .map((prop, i) => (
              <div key={`form--${i}`} className="input-container">
                <label
                  htmlFor={`input-${prop.toLowerCase().replace(" ", "-")}`}
                  className="label"
                  key={`input-${prop.toLowerCase().replace(" ", "-")}`}
                >
                  {labelName[prop]}
                  <input
                    id={`input-${prop.toLowerCase().replace(" ", "-")}`}
                    className="input"
                    type="text"
                    placeholder={labelName[prop]}
                    name={prop}
                    value={register[prop]}
                    onChange={handleChange}
                  />
                </label>
              </div>
            ))}
        </div>

        <div>
          <fieldset>
            <legend>Vous êtes ? </legend>

            <div className="register-radio">
              <input
                type="radio"
                name="role"
                id="owner"
                value="O"
                defaultChecked
                onChange={handleChangeRadio}
              />
              <label htmlFor="user">Particulier</label>

              <input
                type="radio"
                name="role"
                id="veterinary"
                value="V"
                onChange={handleChangeRadio}
              />
              <label htmlFor="veterinary">Vétérinaire</label>
            </div>
          </fieldset>
        </div>
        <div>
          <button className="button button-subscribe" type="submit">
            S'inscrire
          </button>
          <p>
            {" "}
            Votre mot de passe doit contenir huit caractères minimum, un
            chiffre, une lettre majuscule minimum et un caractère spécial
          </p>
        </div>
      </form>

      {/* // publicité */}

      <hr />
      <h2>Nos partenaires</h2>
      <div className="advertising-container">
        {advertising.map((item, i) => (
          <Link key={`advertising--${i}`} className="linkCard" to={item.link}>
            <Card
              className="card"
              image={item.image}
              header={item.header}
              meta={item.meta}
              description={item.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Register;
