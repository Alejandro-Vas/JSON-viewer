import React from 'react';
import { JsonViewer } from '../../src';
import json from './json.json';

function App() {
  return (
    <JsonViewer json={json} />
  );
}

export default App;
