import React from 'react';
import { Button, Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Accede a los juegos al instante',
    content: 'Por un buen precio accede desde donde quieras y cuando quieras a la gran variedad que ofrecemos en nuestra tienda.',
  },
  {
    key: '2',
    title: 'Únete a la Comunidad',
    content: "Conoce a nuevas personas, únete a grupos, forma clanes, chatea dentro de un juego, ¡y mucho más! Con más de 100 millones de posibles amigos (o enemigos), la diversión nunca acaba.",
  },
  {
    key: '3',
    title: 'Publica tu juego',
    content: 'Te ayudamos con un conjunto de herramientas y servicios que ayuda a los desarrolladores y editores a distribuir de la mejor manera posible sus juegos en Game Vault.',
  },
];

function AppMoreInfo() {
  const handleClick = () => {
    window.location.href = '/'; // Cambia '/target-page' a la ruta de tu página
  };

  return (
    <div className='backgroundDark'>
      <div className="custom-style" >
        <section id="stars"></section>
        <section id="stars2"></section>
        <section id="stars3"></section>
        <div id="moreInfo" className="moreInfoBlock">
          <Carousel>
            {items.map(item => (
                <div key={item.key} className="container-fluid">
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <div className="btnHolder">
                    <Button type="primary" size="large" onClick={handleClick}>Learn More</Button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default AppMoreInfo;
