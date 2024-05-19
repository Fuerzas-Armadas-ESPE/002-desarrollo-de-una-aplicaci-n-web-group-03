import React from 'react';

import image1 from '../../assets/images/horror.jpg';
import image2 from '../../assets/images/action.png';
import image3 from '../../assets/images/arcadeRythm.png';
import image4 from '../../assets/images/rol.png';
import image5 from '../../assets/images/adventure.png';
import image6 from '../../assets/images/simulation.png';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Categorias</h2>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="horror" src={image1} />}
            >
              <Meta title="Juegos de Terror" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="action" src={image2} />}
            >
              <Meta title="Juegos de acción" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="arcade" src={image3} />}
            >
              <Meta title="Arcade y Ritmo" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="rol" src={image4} />}
            >
              <Meta title="Juegos de Rol" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="adventure" src={image5} />}
            >
              <Meta title="Juegos de aventura" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="simulation" src={image6} />}
            >
              <Meta title="Juegos de simulación" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;