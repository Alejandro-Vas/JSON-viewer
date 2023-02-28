import React, { useState } from 'react';
import RecursiveItem from '../RecursiveItem';
import { IJson } from '../../types';
import '../../styles/styles.scss';

interface IJsonViewerProps {
  json: IJson
}

function JsonViewer({ json }: IJsonViewerProps) {
  const [jsonState, setJsonState] = useState(json);

  const onDelete = (payload:{ depth: number, propertyName: string }) => {
    console.log(payload);
  };

  const depth = 0;
  return (
    <RecursiveItem
      property={jsonState}
      propertyName="Root"
      rootProperty
      depth={depth}
      onDelete={onDelete}
    />
  );
}

export default JsonViewer;
