import * as React from 'react';
import ExpandableItem from '../ExpandableItem';
import { IJson } from '../types';

interface IProps {
  property: number | string | boolean | IJson;
  propertyName: string;
  emptyPropertyLabel?: string;
  rootProperty?: boolean;
}

function RecursiveItem({
  property,
  propertyName,
  emptyPropertyLabel = 'empty',
  rootProperty,
}:IProps) {
  const isPrimitive = typeof property === 'number'
    || typeof property === 'string'
    || typeof property === 'boolean';

  if (!property) {
    return (
      <div className="recursiveContainer">
        {emptyPropertyLabel}
      </div>
    );
  }

  if (isPrimitive) {
    return (
      <div className="recursiveContainer">

        <strong>
          {propertyName}
        </strong>
        :
        {' '}

        {property.toString()}
      </div>
    );
  }

  return (
    <div className="recursiveContainer">
      <ExpandableItem
        title={propertyName}
        expanded={!!rootProperty}
      >
        {Object.values(property).map((prop, index) => (
          <RecursiveItem
              // eslint-disable-next-line react/no-array-index-key
            key={index}
            property={prop}
            propertyName={Object.getOwnPropertyNames(property)[index]}
          />
        ))}
      </ExpandableItem>
    </div>
  );
}

export default RecursiveItem;
