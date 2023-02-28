import * as React from 'react';
import ExpandableItem from '../ExpandableItem';
import { IJson } from '../../types';

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
  const isNumber = typeof property === 'number';
  const isString = typeof property === 'string';
  const isBoolean = typeof property === 'boolean';
  const isPrimitive = isNumber || isString || isBoolean;

  const propertyClassName = (isNumber && 'number') || (isString && 'string') || (isBoolean && 'boolean') || '';

  if (!property) {
    return (
      <div className="recursiveContainer empty">
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
        <span className={`property ${propertyClassName}`}>
          {property.toString()}
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
