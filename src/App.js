import React, { Component } from "react";
import "./App.css";
import Bruxa from "./img/bruxa.png";
import Fantasma from "./img/fantasma.png";
import Vampiro from "./img/vampiro.png";
import Zumbi from "./img/zumbi.png";
import Pirata from "./img/pirata.png";
import Fada from "./img/fada.png";

class App extends Component {
  state = {
    Figuras: [
      {
        Imagem: `${Bruxa}`,
        nome: "Bruxa",
      },

      {
        Imagem: `${Fantasma}`,
        nome: "Fantasma",
      },

      {
        Imagem: `${Vampiro}`,
        nome: "Vampiro",
      },
      {
        Imagem: `${Zumbi}`,
        nome: "Zumbi",
      },
      {
        Imagem: `${Fada}`,
        nome: "Fada",
      },
      {
        Imagem: `${Pirata}`,
        nome: "Pirata",
      },
    ],
  };

  render() {
    return (
      <>
        <h1 class="TituloPrincipal">Carnaval VNW</h1>
        <section class="ContainerMonsters">
          {this.state.Figuras.map((item) => (
            <>
              <div class="CaixaMonsters">
                <img class="Monsters" src={item.Imagem} alt="" />
                <h3 class="NameMonsters">{item.nome}</h3>
              </div>
            </>
          ))}
        </section>
      </>
    );
  }
}
export default App;
