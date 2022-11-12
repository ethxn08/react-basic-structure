import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="home">
        <h1>Home</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
