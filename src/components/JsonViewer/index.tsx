import React from 'react';
import RecursiveItem from '../RecursiveItem';
import { IJson } from '../../types';
import '../../styles/styles.scss';

interface IJsonViewerProps {
  json: IJson
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
