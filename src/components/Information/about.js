import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'Acceso anticipado a juegos',
    content: 'Descubre, juega e involúcrate con juegos mientras evolucionan. Sé el primero en obtener información sobre las próximas novedades y en formar parte del proceso.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Disponible para dispositivos móviles',
    content: 'Accede a Game Vault en cualquier lugar desde tu dispositivo iOS o Android con la página web de Game Vault.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Compras simplificadas',
    content: 'Nuestra tienda admite más de 100 métodos de pago en más de 35 monedas, lo que te da la flexibilidad de pagar como tú quieras.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
        </div>
        <div className="contentHolder">
          <p>Trabajamos continuamente para traer nuevas actualizaciones y características a Game Vault, tales como:</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;