// Modules
import React from "react";
import { Routes, Route } from "react-router-dom";
import useUser from "@/hooks/useUser";

// Components partials
import Header from "@/components/partials/Header/Header";

// Components
import Register from "@/components/Register/Register";
import Home from "../Home/Home";
import Account from "../Account/Account";
import AccountEdit from "../AccountEdit/AccountEdit";
import Veterinary from "../Veterinary/Veterinary";
import VeterinaryEdit from "../VeterinaryEdit/VeterinaryEdit";

// Styles
import "./App.scss";

function App() {
  const user = useUser();

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {!user.isLogged() && <Route path="/register" element={<Register />} />}

        {user.isLogged() && (
          <>
            <Route path="/account" element={<Account />} />
            <Route path="/account/edit" element={<AccountEdit />} />
            <Route path="/veterinary" element={<Veterinary />} />
            <Route path="/veterinary/edit" element={<VeterinaryEdit />} />
          </>
        )}

        <Route path="*" element={<strong>404</strong>} />
      </Routes>
    </div>
  );
}

export default App;
