import React from 'react';

import { List, Card, Button } from 'antd';

const data = [
  {
    title: 'Basic',
    content: [
      {
        price: '$29.99',
        space: '3 meses ',
        user: '1 usuario',
        support: '24/7 support',
        backup: 'Obten cualquier juego que desees!',
        access: 'Accede desde donde quieras'
      }
    ]
  },
  {
    title: 'Premium',
    content: [
      {
        price: '$59.99',
        space: '7 meses',
        user: '5 usuarios',
        support: '24/7 support',
        backup: 'Obten cualquier juego que desees!',
        access: 'Accede hasta 5 dispositivos!'
      }
    ]
  },
  {
    title: 'Golden user',
    content: [
      {
        price: '$99.99',
        space: '1 año',
        user: '15 users',
        support: '24/7 support',
        backup: 'Obten cualquier juego que desees!',
        access: 'Recibe regalos exclusivos!'
      }
    ]
  }
];

function AppPricing() {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Compara los planes de suscripción</h2>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <Button type="default" size="large"><i className="fab fa-telegram-plane"></i> Get Started</Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>  
  );
}

export default AppPricing;