import React from 'react';

import './PageHeader.scss';

import bg from '../../assets/footer-bg.png';

function PageHeader(props) {
  return (
    <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
        <h2>{props.children}</h2>
    </div>
  )
}

export default PageHeader