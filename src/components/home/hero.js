import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Bienvenido a Game Vault!',
    content: "Game Vault es el lugar perfecto para todos los gamers. Aquí encontrarás los mejores juegos, las últimas novedades y las ofertas más increíbles. Descubre un mundo de diversión y entretenimiento con Game Vault",
  },

  {
    key: '2',
    title: 'Un lugar para todos los gamers!',
    content: 'Bienvenido a la tienda virtual de Game Vault!',
  },

  {
    key: '3',
    title: 'Boost your productivity with Game Vault!',
    content: 'Game Vault te ofrece una amplia variedad de juegos para que puedas disfrutar de tus momentos de ocio. Descubre los mejores juegos y disfruta de horas de diversión con Game Vault!',
  },
]

function AppHero() {
  return (
    <div id="hero" className="moreInfoBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">Learn More</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;