import React from "react";
import Header from "./components/Header.jsx";
import SectionTitle from "./components/SectionTitle.jsx";
import Services from "./components/Services.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer.jsx";

// import UserCards from "./components/UserCards.jsx";

function App() {
  return (
    <>
      <Header />
      <SectionTitle title="Products" />
      <Products />
      <SectionTitle title="Services" />
      <Services />
      <Footer />
      {/* <UserCards /> */}
    </>
  );
}

export default App;
