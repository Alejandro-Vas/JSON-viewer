import React from 'react';

import '../styles/styles.css';

function JsonViewer({ json }: any) {
  const formattedJson = JSON.stringify(json, undefined, 2);
  return (
    <h1>
      <pre>
        {formattedJson}
      </pre>
    </h1>
  );
}

export default JsonViewer;
