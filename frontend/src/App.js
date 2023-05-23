import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContainer } from "./components/containers/CartContainer";
import { HomeContainer } from "./components/containers/HomeContainer";
import AuthContainer from "./components/containers/AuthContainer";
import { ItemListContainer } from "./components/containers/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { AuthContext } from "./components/auth";
import "./App.css";

const App = () => {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("tokens") || ""
  );
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  const removeToken = () => {
    localStorage.removeItem("tokens");
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens ,removeToken}}>
        <BrowserRouter>
          <header className="bg-light">
            <NavBar />
          </header>
          <Routes>
            <Route exact path="/" element={<HomeContainer />} />
            <Route exact path="/products" element={<ItemListContainer />} />
            <Route exact path="/cart" element={<CartContainer />} />
            <Route exact path="/auth" element={<AuthContainer />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
