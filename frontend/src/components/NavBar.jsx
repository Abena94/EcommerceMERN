import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { useAuth } from "./auth";

export const NavBar = () => {
  const { authTokens, removeToken} = useAuth();
  const history = useNavigate();
  const handleLogout = () => {
    removeToken();
    window.location.reload(false);
    history('/');
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow bg-body rounded">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <box-icon name="dish" type="solid"></box-icon>Ah&Co
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fw-bold text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              {!authTokens ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/auth">
                    Log In
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <button className="nav-link" onClick={()=>handleLogout()}>
                    Log Out
                  </button>
                </li>
              )}
            </ul>
          </div>
          <CartWidget />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};
