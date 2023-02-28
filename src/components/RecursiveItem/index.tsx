import React from 'react';
import ExpandableItem from '../ExpandableItem';
import { IJson } from '../../types';

interface IProps {
  property: number | string | boolean | IJson;
  propertyName: string;
  rootProperty?: boolean;
}

function RecursiveItem({
  property,
  propertyName,
  rootProperty,
}:IProps) {
  const isNumber = typeof property === 'number';
  const isString = typeof property === 'string';
  const isBoolean = typeof property === 'boolean';
  const isPrimitive = isNumber || isString || isBoolean;
  const isNull = property === null;

  const propertyClassName = (isNumber && 'number')
   || (isString && 'string')
    || (isBoolean && 'boolean')
      || (isNull && 'string')
        || '';

  if (isPrimitive || isNull) {
    return (
      <div className="recursiveContainer">

        <strong>
          {propertyName}
        </strong>
        :
        {' '}
        <span className={`property ${propertyClassName}`}>
          {String(property)}
        </span>
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
