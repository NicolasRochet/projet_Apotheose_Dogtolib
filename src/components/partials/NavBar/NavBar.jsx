// Page de Menu latéral

// Import de React
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Import des icons
import arrow from "/public/icons/arrow-left.svg";
import bell from "/public/icons/bell.png";
import reminder from "/public/icons/reminder.png";

// Import des images
import userBoy from "/public/images/userBoy.png";
import veterinary from "/public/images/Doc.png";
import cat from "/public/images/Cat.png";
import dog from "/public/images/Dog.png";
import rabbit from "/public/images/Rabbit.png";

import "./NavBar.scss";

function NavBar() {
  const { profil } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(true);

  const animals = [
    {
      id: 1,
      name: "Aquarelle",
      picture: dog,
    },
    {
      id: 2,
      name: "Berlioz",
      picture: cat,
    },
    {
      id: 3,
      name: "Reevers",
      picture: rabbit,
    },
  ];

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={isOpen ? "NavBar" : "NavBar-close"}>
      <img
        src={arrow}
        alt="arrow"
        className={isOpen ? "arrow" : "arrow-close"}
        defaultValue={isOpen}
        // value={isOpen}
        onClick={handleClick}
      />
      <div className={isOpen ? "NavBar-user" : "NavBar-user-close"}>
        <Link to="/account">
          <img
            src={userBoy}
            alt="profil"
            className={
              isOpen ? "NavBar-user-picture" : "NavBar-user-picture-close"
            }
          />
        </Link>
        {isOpen && (
          <div className="NavBar-user-name">
            {profil.firstname} {profil.lastname}
          </div>
        )}
      </div>

      <div className="NavBar-scroller">
        <div className={isOpen ? "NavBar-heading" : "NavBar-heading-close"}>
          👤 {isOpen && "Gestion de votre profil"}
        </div>

        <div className="NavBar-link">
          <img src={userBoy} alt="logo" className="NavBar-link-logo" />
          <NavLink to="/account/edit" className="NavBar-link-text">
            {isOpen && "Modification du profil"}
          </NavLink>
        </div>

        <div className={isOpen ? "NavBar-heading" : "NavBar-heading-close"}>
          🐕 {isOpen && "Gestion de vos compagnons"}
        </div>

        {isOpen && (
          <div className="NavBar-link">
            <NavLink to="/account/animals/new" className="NavBar-link-text">
              Ajouter un compagnon
              <span className="NavBar-heading-more">+</span>
            </NavLink>
          </div>
        )}

        {animals.map((item, i) => (
          <div className="NavBar-link" key={`NavBar--${i}`}>
            <img src={item.picture} alt="logo" className="NavBar-link-logo" />
            {isOpen && (
              <NavLink to="/account/animals/:id" className="NavBar-link-text">
                {item.name}
              </NavLink>
            )}
          </div>
        ))}

        <div className={isOpen ? "NavBar-heading" : "NavBar-heading-close"}>
          📓 {isOpen && "Gestion du carnet de santé"}{" "}
        </div>
        <div className="NavBar-link">
          <img src={reminder} alt="logo" className="NavBar-link-logo" />
          <NavLink to="/account/search" className="NavBar-link-text">
            {isOpen && "Mes rendez-vous"}
          </NavLink>
        </div>

        <div className="NavBar-link">
          <img src={bell} alt="logo" className="NavBar-link-logo" />
          <NavLink to="/account/reminders/new" className="NavBar-link-text">
            {isOpen && "Mes rappels"}
          </NavLink>
        </div>

        <div className="NavBar-link">
          <img src={veterinary} alt="logo" className="NavBar-link-logo" />
          <NavLink to="/account/favorite" className="NavBar-link-text">
            {isOpen && "Mon vétérinaire"}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
