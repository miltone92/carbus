import React from "react";
import { Navbar, FadeHeader } from "showntell";

function App() {
  const navigation = [
    { title: "Inicio", type: "item", href: "#inicio" },
    { title: "Servicios", type: "item", href: "#servicios" },
    { title: "Quienes Somos", type: "item", href: "#nosotros" },
    { title: "Transportes", type: "item", href: "#transportes" },
    { title: "Galería", type: "item", href: "#galeria" },
    { title: "Contáctenos", type: "item", href: "#contacto" },
  ];

  return (
    <div className="App">
      <Navbar
        brand={"Carbus"}
        navigation={navigation}
        customBgColor="#2f3542"
      ></Navbar>
      <div className="section_container">
        <section id="inicio">
          <FadeHeader>Hello</FadeHeader>
          <h1>Inicio</h1>
          <p>Hello</p>
        </section>

        <section id="servicios">
          <h1>Servicios</h1>
          <p>Hello</p>
        </section>
        <section id="nosotros">
          <h1>Nosotros</h1>
          <p>Hello</p>
        </section>
        <section id="transportes">
          <h1>Transportes</h1>
          <p>Hello</p>
        </section>
        <section id="galeria">
          <h1>Galeria</h1>
          <p>Hello</p>
        </section>
        <section id="contacto">
          <h1>Contacto</h1>
          <p>Hello</p>
        </section>
      </div>
    </div>
  );
}

export default App;
