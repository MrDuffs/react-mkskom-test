import React from 'react';
import './style.scss';

function PageLayout({ children }) {
  return (
    <div className="page-layout">
      {children}
    </div>
  );
}

export default PageLayout;
