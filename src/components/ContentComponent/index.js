/* eslint-disable react/prop-types */
import React from 'react';
import Button from '@mui/material/Button';

function ContentComponent({
  subtitle, content, color, noBtn,
}) {
  return (
    <div>
      <p data-testid="subtitle" style={{ color: color === 'black' ? '#000' : '#fff', fontWeight: 'bold', fontSize: '17px' }}>{subtitle}</p>
      <p
        data-testid="content"
        style={{
          color: color === 'black' ? '#000' : '#fff', fontWeight: 'light', fontSize: '14px', opacity: '60%',
        }}
      >
        {content}
      </p>
      {noBtn ? '' : <Button variant="outlined">Learn more</Button>}
    </div>
  );
}

export default ContentComponent;
