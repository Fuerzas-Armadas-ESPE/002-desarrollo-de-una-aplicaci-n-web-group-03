import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Drawer, Button } from 'antd';

const { Link: AnchorLink } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <Link to="/">Game Vaullt</Link>

          
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <AnchorLink href="/" title="Home" />
            <AnchorLink href="/information" title="Information" />
            <AnchorLink href="/AppCategories" title="Categories" />
            <AnchorLink href="/AppContact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
          >
            <div className="drawerLinks">
              <Link to="/" onClick={onClose}>Home</Link>
              <Link to="/information" onClick={onClose}>Information</Link>
              <Link to="/AppCategories" onClick={onClose}>Categories</Link>
              <Link to="/AppContact" onClick={onClose}>Contact</Link>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
