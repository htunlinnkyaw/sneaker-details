import React from "react";
import Container from "./components/Container.jsx";
import Header from "./components/Header.jsx";
import ProductDetail from "./components/ProductDetail.jsx";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <ProductDetail />
      </Container>
    </>
  );
};

export default App;
