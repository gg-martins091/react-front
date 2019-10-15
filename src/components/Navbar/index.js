import React from 'react';

import { Barra } from './styles';

const Navbar = (props) => (
  <Barra>
    <div className="logo">LOGO</div>
    <div className="actions">
      <span>{props.username}</span>

    </div>
  </Barra>
);

export default Navbar;
