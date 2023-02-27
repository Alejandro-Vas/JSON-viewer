import React from 'react';
import RecursiveItem from '../RecursiveItem';
import '../styles/styles.css';
import { JSONValue } from '../types';

interface IJsonViewerProps {
  json: JSONValue
}

function JsonViewer({ json }: IJsonViewerProps) {
  return (
    <RecursiveItem
      property={json}
      propertyName="Root"
      rootProperty
    />

  );
}

export default JsonViewer;
