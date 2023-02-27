import React from 'react';

import '../styles/styles.css';

function JsonViewer({ text }: { text:string }) {
  return (
    <h1>
      {text}
    </h1>
  );
}

export default JsonViewer;
