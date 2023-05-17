// Barre de navigation présente dans le composant Header
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/actions/user';
import useUser from '@/hooks/useUser';

import './Header.scss';

function Header() {
  const user = useUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  
  
  return (
    <header className="app-header">
      <Link rel="stylesheet" href="/account"> <h1 className="app-header-title">Dogtolib</h1></Link>
      {/* // && = Si l'utilisateur est connecté j'affiche le bouton*/}
      {user.isLogged() && <button onClick={handleLogout} >Déconnexion</button>}
      <nav className="app-header-nav">
        <a className="app-header-nav-a" href="/"><img src='/icons/facebook.png' alt='facebook-icon'></img></a>
        <a className="app-header-nav-a" href="/"><img src='/icons/instagram.png' alt='instagram-icon'></img></a>
        <a className="app-header-nav-a" href="/"><img src='/icons/twitter.png' alt='twitter-icon'></img></a>
      </nav>
    </header>
  );
}

export default Header;
