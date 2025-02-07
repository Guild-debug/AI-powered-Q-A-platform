// global-styles/src/components/layout.js
import React from 'react';
import '../components/layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
    </div>
  );
};

export default Layout;
