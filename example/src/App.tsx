import React from 'react';
import { JsonViewer } from '../../src';
import exampleJson from './exampleJson.json';

function App() {
  return (
    <JsonViewer json={exampleJson} />
  );
}

export default App;
