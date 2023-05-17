// Page de compte
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";

// Import des actions
import { loadProfil } from "../../actions/user";

// Styles
import "./Account.scss";

// Import de Semantic-UI
import { Image } from "semantic-ui-react";

// Components partials
import NavBar from "../partials/NavBar/NavBar";
import Reminders from "../Reminders/Reminders";

const companions = [
  {
    image: "../../../public/images/Dog.png",
    name: "Misao",
    link: "/companions/1",
  },
  {
    image: "../../../public/images/Dog.png",
    name: "Aquarelle",
    link: "/companions/2",
  },
  {
    image: "../../../public/images/Cat.png",
    name: "Berlioz",
    link: "/companions/3",
  },
  {
    image: "../../../public/images/Cat.png",
    name: "Prune",
    link: "/companions/4",
  },
];

const veterinary = [
  {
    name: "Dr. Jean-Michel",
    address: "1 rue du vétérinaire",
    paiement: "espèces, chèque, CB",
    contact: "01 23 45 67 89",
  },
];

function Account() {
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.user.profil);
  // console.log('token à la connexion: ', token)

  useEffect(() => {
    dispatch(loadProfil());
    // console.log('token', token);
  }, []);

  const loader = async () => {
    const user = await getUser();
    if (!user) {
      return redirect("/login");
    }
    return null;
  };
  // redirect("/veterinary");

  return (
    <div className="component-container">
      <NavBar />
      <div className="account">
        <Reminders />
        <h2>Mes compagnons 🐕</h2>
        <section className="myCompanions">
          <ul className="companions">
            {companions.map((item, i) => (
              <li className="companion" key={`companion--${i}`}>
                <Link to={item.link}>
                  {" "}
                  <Image src={item.image} avatar /> {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <h2>Mon vétérinaire 👤</h2>
        <section>
          {veterinary.map((item, i) => (
            <div
              className="favouriteVeterinary"
              key={`favourite-veterinary--${i}`}
            >
              <img
                className="avatar"
                src="../../../public/images/Doc.png"
                alt="doc"
              />{" "}
              <span className="avatarName">{item.name}</span>
              <div>
                {" "}
                <h3>ADRESSE</h3>
                <p className="account-description">{item.address}</p>
                <h3>MOYENS DE PAIEMENTS</h3>
                <p className="account-description">{item.paiement}</p>
                <h3>CONTACT</h3>
                <p className="account-description">{item.contact}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Account;
