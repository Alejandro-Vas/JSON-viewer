import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import { JSONValue } from '../types';

interface IJsonViewerProps {
  json: JSONValue
}

function JsonViewer({ json }: IJsonViewerProps) {
  const [jsonData, setJsonData] = useState({});
  console.log(jsonData);

  useEffect(() => {
    setJsonData(json);
  });

  const formattedJson = JSON.stringify(jsonData, undefined, 2);
  return (
    <h1>
      <pre>
        {formattedJson}
      </pre>
    </h1>
  );
}

export default JsonViewer;
